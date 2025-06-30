
import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  breadcrumbs?: Array<{name: string, url?: string}>;
}

const PageSEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage = "https://rootsandrichness.in/og-image.jpg",
  ogType = "website",
  structuredData,
  breadcrumbs
}: PageSEOProps) => {
  useEffect(() => {
    // Ensure title follows consistent format: Primary Keyword | Brand Name
    const formattedTitle = title.includes('Roots & Richness') ? title : `${title} | Roots & Richness`;
    document.title = formattedTitle;

    // Update meta description with consistent length and action phrase
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      // Ensure description ends with action phrase if not present
      const actionPhrases = ['Shop now', 'Order today', 'Learn more', 'Discover', 'Explore'];
      const hasActionPhrase = actionPhrases.some(phrase => 
        description.toLowerCase().includes(phrase.toLowerCase())
      );
      const finalDescription = hasActionPhrase ? description : `${description} Shop now with free shipping on orders over ₹500.`;
      metaDescription.setAttribute('content', finalDescription.substring(0, 160));
    }

    // Update keywords with brand-consistent terms
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        const brandKeywords = 'wood-pressed oils, natural wellness, chemical-free, traditional extraction, Roots and Richness';
        const combinedKeywords = `${keywords}, ${brandKeywords}`;
        metaKeywords.setAttribute('content', combinedKeywords);
      }
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update Open Graph tags with consistent branding
    const ogTags = [
      { property: 'og:title', content: formattedTitle },
      { property: 'og:description', content: description.substring(0, 160) },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: 'Roots & Richness' },
      { property: 'og:locale', content: 'en_IN' }
    ];

    ogTags.forEach(tag => {
      let ogElement = document.querySelector(`meta[property="${tag.property}"]`);
      if (ogElement) {
        ogElement.setAttribute('content', tag.content);
      }
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: formattedTitle },
      { name: 'twitter:description', content: description.substring(0, 160) },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:site', content: '@rootsrichness' }
    ];

    twitterTags.forEach(tag => {
      let twitterElement = document.querySelector(`meta[name="${tag.name}"]`);
      if (twitterElement) {
        twitterElement.setAttribute('content', tag.content);
      }
    });

    // Add structured data with consistent organization info
    if (structuredData) {
      let existingScript = document.querySelector('script[type="application/ld+json"]#page-structured-data');
      if (existingScript) {
        existingScript.remove();
      }

      // Enhanced structured data with organization context
      const enhancedStructuredData = {
        "@context": "https://schema.org",
        ...structuredData,
        "publisher": structuredData && typeof structuredData === 'object' && !('publisher' in structuredData) ? {
          "@type": "Organization",
          "name": "Roots & Richness",
          "url": "https://rootsandrichness.in",
          "logo": "https://rootsandrichness.in/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          }
        } : undefined
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-structured-data';
      script.textContent = JSON.stringify(enhancedStructuredData);
      document.head.appendChild(script);
    }

    // Add breadcrumb structured data if provided
    if (breadcrumbs && breadcrumbs.length > 1) {
      let existingBreadcrumbScript = document.querySelector('script[type="application/ld+json"]#breadcrumb-structured-data');
      if (existingBreadcrumbScript) {
        existingBreadcrumbScript.remove();
      }

      const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          ...(crumb.url && { "item": crumb.url })
        }))
      };

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.id = 'breadcrumb-structured-data';
      breadcrumbScript.textContent = JSON.stringify(breadcrumbStructuredData);
      document.head.appendChild(breadcrumbScript);
    }

  }, [title, description, keywords, canonicalUrl, ogImage, ogType, structuredData, breadcrumbs]);

  return null;
};

export default PageSEO;
