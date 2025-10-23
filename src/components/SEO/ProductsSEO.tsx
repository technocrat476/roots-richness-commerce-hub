
import PageSEO from './PageSEO';
import { organizationData, websiteData } from '@/utils/structuredData';
import { products } from '@/data/products';
import { generateProductListStructuredData, generateBreadcrumbStructuredData } from '@/utils/seoUtils';

const ProductsSEO = () => {
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Home', url: 'https://rootsandrichness.in/' },
    { name: 'Products', url: 'https://rootsandrichness.in/products' },
  ]);

  const productListData = generateProductListStructuredData(
    products.filter(p => p.inStock),
    'All Products - Roots and Richness'
  );

  const collectionPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Premium Wood-Pressed Oils & Natural Products - Roots and Richness",
    "description": "Shop our complete collection of wood-pressed oils, tribal coffee, and natural wellness products. Chemical-free, traditionally processed, and sourced directly from Indian farms.",
    "url": "https://rootsandrichness.in/products",
  };

  const productsStructuredData = [
    organizationData,
    websiteData,
    collectionPageData,
    breadcrumbData,
    productListData
  ];

  return (
    <PageSEO
      title="Premium Wood-Pressed Oils & Natural Products | Roots and Richness"
      description="Shop our complete collection of authentic wood-pressed oils, tribal coffee, and natural wellness products. Cold-pressed, chemical-free, and traditionally processed. Free shipping on orders above ₹499."
      keywords="wood-pressed oils online, buy natural oils, cold-pressed oils, organic oils india, mustard oil, groundnut oil, coconut oil, sesame oil, tribal coffee, natural products online shopping"
      canonicalUrl="https://rootsandrichness.in/products"
      ogImage="https://rootsandrichness.in/og-products.jpg"
      structuredData={productsStructuredData}
      author="Roots and Richness Team"
    />
  );
};

export default ProductsSEO;
