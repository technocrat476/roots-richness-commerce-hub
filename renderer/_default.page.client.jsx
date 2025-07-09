
import ReactDOM from 'react-dom/client';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(
    <HelmetProvider>
      <Page {...pageProps} />
    </HelmetProvider>
  );
}
