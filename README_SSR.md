# SSR Implementation Guide - Roots and Richness

## 🎯 Overview

This document describes the Server-Side Rendering (SSR) implementation for the Roots and Richness e-commerce website.

## 🏗️ Architecture

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Server**: Express.js
- **SSR Engine**: react-dom/server
- **Routing**: React Router v6 with StaticRouter (server) / BrowserRouter (client)
- **SEO**: react-helmet-async for dynamic meta tags

### Key Files

```
project/
├── server.ts                    # Express SSR server
├── src/
│   ├── entry-server.tsx        # Server-side entry point
│   ├── entry-client.tsx        # Client-side hydration entry
│   ├── App.tsx                 # Main app component (SSR-compatible)
│   ├── AppWrapper.tsx          # Context providers wrapper
│   └── components/
│       └── SEO/                # SEO components with Helmet
├── index.html                  # HTML template with SSR placeholders
├── vite.config.ts             # Vite config with SSR support
├── tsconfig.server.json       # TypeScript config for server
└── build-ssr.sh               # SSR build script
```

## 🚀 Getting Started

### Development Mode (with SSR)

```bash
npm run dev:ssr
```

This runs the Express server with Vite in middleware mode, providing:
- Hot Module Replacement (HMR)
- Server-side rendering on every request
- Full development experience

### Build for Production

```bash
npm run build:ssr
```

This creates:
- `dist/client/` - Client-side assets and HTML
- `dist/server/` - Server-side bundle

### Preview Production Build

```bash
npm run preview:ssr
```

### Deploy

```bash
NODE_ENV=production node server.ts
```

Or use a process manager like PM2:

```bash
pm2 start server.ts --name roots-richness-ssr
```

## 📝 How SSR Works

### 1. Request Flow

```
User Request → Express Server → Route Match → SSR Render → HTML Response
```

### 2. Server-Side Rendering

```typescript
// src/entry-server.tsx
export async function render(url: string) {
  const helmetContext = {} as any;

  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const head = `${helmet.title}${helmet.meta}${helmet.link}`;

  return { html, head };
}
```

### 3. Client-Side Hydration

```typescript
// src/entry-client.tsx
hydrateRoot(
  document.getElementById('root')!,
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
```

## 🔍 SEO Features

### Dynamic Meta Tags

All pages use `react-helmet-async` to set:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

Example:

```typescript
<PageSEO
  title="Buy Premium Wood-Pressed Oil | Roots and Richness"
  description="Authentic wood-pressed oils from Indian farms..."
  keywords="wood-pressed oil, cold-pressed oil, natural oil"
  canonicalUrl="https://rootsandrichness.in/products/groundnut-oil"
  ogType="product"
  structuredData={productSchema}
/>
```

### Structured Data (JSON-LD)

Every product page includes:
- Product schema
- Offer information
- Aggregate ratings
- Brand information
- Additional properties

### Pre-rendered HTML

Search engines receive fully rendered HTML with:
- Complete product information
- Prices and availability
- Reviews and ratings
- SEO-optimized content

## 🎨 Component Architecture

### AppWrapper

Wraps the app with necessary providers:
- QueryClientProvider (React Query)
- CartProvider (Shopping cart state)
- AdminProvider (Admin authentication)
- TooltipProvider (UI)
- ErrorBoundary

### Routing Strategy

- **Server**: Uses `StaticRouter` for SSR
- **Client**: Uses `BrowserRouter` for hydration and navigation
- **Lazy Loading**: Components are lazy-loaded for optimal performance

## 📊 Performance Optimizations

1. **Code Splitting**: Lazy loading with React.lazy()
2. **Asset Optimization**: Vite handles bundling and minification
3. **Compression**: gzip/brotli via compression middleware
4. **Caching**: Static assets with long cache headers
5. **SSR Manifest**: Preload critical resources

## 🧪 Testing SSR

### Check HTML Source

```bash
curl http://localhost:5173/ | grep "<title>"
```

Should show the rendered title, not the placeholder.

### Lighthouse Audit

```bash
npm install -g lighthouse
lighthouse http://localhost:5173/ --view
```

Target scores:
- Performance: 90+
- SEO: 95+
- Best Practices: 90+

### Google Rich Results Test

1. Build and run production server
2. Use ngrok to expose: `ngrok http 5173`
3. Test at: https://search.google.com/test/rich-results
4. Verify Product schema appears

## 🔧 Configuration

### Environment Variables

```env
NODE_ENV=production
PORT=5173
BASE=/
```

### Vite Config (SSR Settings)

```typescript
export default defineConfig({
  build: {
    manifest: true,
    ssrManifest: true,
  },
  ssr: {
    noExternal: ['react-helmet-async']
  }
});
```

## 🚨 Troubleshooting

### Hydration Mismatches

If you see warnings about hydration:
1. Ensure server and client render the same initial HTML
2. Check for browser-only code in components
3. Use `useEffect` for client-only operations

### Server Errors

Check server logs:
```bash
DEBUG=express:* node server.ts
```

### Build Issues

Clean and rebuild:
```bash
rm -rf dist/
npm run build:ssr
```

## 📈 Monitoring

### Performance Metrics

Monitor these Core Web Vitals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### SEO Metrics

Track via Google Search Console:
- Indexed pages
- Rich snippets appearance
- Core Web Vitals
- Mobile usability

## 🔮 Future Enhancements

- [ ] Implement ISR (Incremental Static Regeneration)
- [ ] Add API routes for serverless functions
- [ ] Implement edge caching with CDN
- [ ] Add service worker for offline support
- [ ] Implement AMP pages for mobile
- [ ] Add GraphQL for optimized data fetching

## 📚 Resources

- [Vite SSR Guide](https://vitejs.dev/guide/ssr.html)
- [React Server Components](https://react.dev/reference/react-dom/server)
- [Google SEO Guidelines](https://developers.google.com/search/docs)
- [Schema.org Product](https://schema.org/Product)

## 🤝 Support

For issues or questions:
- Check the troubleshooting section
- Review server logs
- Test with `curl` or Postman
- Validate HTML output

---

**Last Updated**: October 2025
**Version**: 1.0.0
