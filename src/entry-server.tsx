import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

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

  // Generate head tags from Helmet
  const head = `
    ${helmet.title?.toString() || ''}
    ${helmet.meta?.toString() || ''}
    ${helmet.link?.toString() || ''}
    ${helmet.script?.toString() || ''}
  `;

  return { html, head };
}
