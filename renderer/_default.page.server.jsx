
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';

export { render };
export const passToClient = ['pageProps', 'urlPathname'];

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const helmetContext = {};

  const pageHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <Page {...pageProps} />
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet ? dangerouslySkipEscape(helmet.title.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.meta.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.link.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.script.toString()) : ''}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
