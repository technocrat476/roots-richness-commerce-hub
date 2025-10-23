import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import type { ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction
  ? fs.readFileSync(path.resolve(__dirname, './dist/client/index.html'), 'utf-8')
  : '';
const ssrManifest = isProduction
  ? fs.readFileSync(path.resolve(__dirname, './dist/client/.vite/ssr-manifest.json'), 'utf-8')
  : undefined;

// Create express app
const app = express();

// Add compression middleware
app.use(compression());

// Add Vite or respective production middlewares
let vite: ViteDevServer;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  });
  app.use(vite.middlewares);
} else {
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve all routes
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template: string;
    let render: (url: string) => Promise<{ html: string; head: string }>;

    if (!isProduction) {
      // Dev mode: always read fresh template and import module
      template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      // Production mode: use cached template
      template = templateHtml;
      render = (await import('./dist/server/entry-server.js')).render;
    }

    // Render the app HTML
    const rendered = await render(url);
    
    // Inject rendered HTML and head into template
    const html = template
      .replace(`<!--app-head-->`, rendered.head)
      .replace(`<!--app-html-->`, rendered.html);

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e: any) {
    !isProduction && vite?.ssrFixStacktrace(e);
    console.error(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
