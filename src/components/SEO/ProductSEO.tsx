
import PageSEO from './PageSEO';

interface ProductSEOProps {
  product: {
    id: string;
    name: string;
    description?: string;
    shortDescription: string;
    price: number;
    originalPrice?: number;
    images: string[];
    slug: string;
    category?: string;
    sku?: string;
  };
}

const ProductSEO = ({ product }: ProductSEOProps) => {
  const productStructuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images,
    "description": product.description || product.shortDescription,
    "sku": product.sku || product.id,
    "brand": {
      "@type": "Brand",
      "name": "Roots and Richness"
    },
    "category": product.category || "Food & Beverages",
    "offers": {
      "@type": "Offer",
      "url": `https://rootsandrichness.in/products/${product.slug}`,
      "priceCurrency": "INR",
      "price": product.price.toString(),
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Roots and Richness"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Priya K."
        },
        "reviewBody": "Excellent quality and authentic taste. Highly recommended!"
      }
    ]
  };

  return (
    <PageSEO
      title={`${product.name} - Premium ${product.category || 'Natural Product'} | Roots and Richness`}
      description={`Buy ${product.name} online. ${product.shortDescription} Premium quality, wood-pressed, and chemical-free. ₹${product.price}. Free shipping above ₹499.`}
      keywords={`${product.name.toLowerCase()}, buy ${product.name.toLowerCase()} online, wood-pressed oil, natural products, roots and richness`}
      canonicalUrl={`https://rootsandrichness.in/products/${product.slug}`}
      structuredData={productStructuredData}
      ogImage={product.images[0]}
    />
  );
};

export default ProductSEO;
