
import express from 'express';
import compression from 'compression';
import { renderPage } from 'vite-plugin-ssr/server';
import { createServer as createViteServer } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();

async function createServer() {
  const app = express();

  app.use(compression());

  if (isProduction) {
    app.use(express.static(`${root}/dist/client`));
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.ssrLoadModule);
  }

  app.get('*', async (req, res, next) => {
    try {
      const pageContextInit = {
        urlOriginal: req.originalUrl,
      };
      
      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;
      
      if (!httpResponse) {
        return next();
      }
      
      const { body, statusCode, headers } = httpResponse;
      headers.forEach(([name, value]) => res.setHeader(name, value));
      res.status(statusCode).send(body);
    } catch (err) {
      next(err);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();
