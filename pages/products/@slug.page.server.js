
import { products } from '@/data/products';

export { onBeforeRender };

async function onBeforeRender(pageContext) {
  const { slug } = pageContext.routeParams;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    throw new Error(`Product with slug "${slug}" not found`);
  }

  const pageProps = { product };
  
  return {
    pageContext: {
      pageProps,
    },
  };
}
