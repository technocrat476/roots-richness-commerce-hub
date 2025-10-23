// SEO utility functions for better optimization

export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
};

export const generateProductListStructuredData = (products: any[], listName: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": listName,
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "url": `https://rootsandrichness.in/products/${product.slug}`,
        "image": product.images[0],
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "INR",
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        },
      },
    })),
  };
};

export const generateOfferStructuredData = (product: any) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  
  if (!hasDiscount) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "INR",
    "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "url": `https://rootsandrichness.in/products/${product.slug}`,
    "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  };
};

export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Roots and Richness",
    "image": "https://rootsandrichness.in/logo.png",
    "@id": "https://rootsandrichness.in",
    "url": "https://rootsandrichness.in",
    "telephone": "+91-98765-43210",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Green Valley Road",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0760,
      "longitude": 72.8777,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00",
      },
    ],
    "sameAs": [
      "https://www.instagram.com/rootsandrichness",
      "https://www.facebook.com/rootsandrichness",
    ],
  };
};

export const generateMetaTags = (page: {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string;
  type?: string;
}) => {
  return {
    title: page.title,
    description: page.description,
    canonical: page.url,
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.url,
      type: page.type || 'website',
      image: page.image || 'https://rootsandrichness.in/og-default.jpg',
      siteName: 'Roots and Richness',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@rootsandrichness',
      title: page.title,
      description: page.description,
      image: page.image || 'https://rootsandrichness.in/og-default.jpg',
    },
    keywords: page.keywords,
  };
};

// Optimize page title for SEO
export const optimizeTitle = (productName: string, category?: string) => {
  const suffix = 'Roots and Richness';
  const categoryText = category ? ` | ${category}` : '';
  const maxLength = 60;
  
  let title = `${productName}${categoryText} | ${suffix}`;
  
  if (title.length > maxLength) {
    title = `${productName} | ${suffix}`;
  }
  
  return title;
};

// Generate SEO-friendly description
export const generateMetaDescription = (shortDesc: string, benefits?: string[]) => {
  const maxLength = 155;
  let description = shortDesc;
  
  if (benefits && benefits.length > 0 && description.length < 100) {
    description += ` ${benefits.slice(0, 2).join('. ')}.`;
  }
  
  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...';
  }
  
  return description;
};
