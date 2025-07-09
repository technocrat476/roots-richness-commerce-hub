
import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
}

const PageSEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  structuredData 
}: PageSEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    let ogDesc = document.querySelector('meta[property="og:description"]');
    let ogUrl = document.querySelector('meta[property="og:url"]');
    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    let ogTypeMeta = document.querySelector('meta[property="og:type"]');

    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDesc) ogDesc.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
    if (ogImageMeta) ogImageMeta.setAttribute('content', ogImage);
    if (ogTypeMeta) ogTypeMeta.setAttribute('content', ogType);

    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    let twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDesc) twitterDesc.setAttribute('content', description);
    if (twitterImage) twitterImage.setAttribute('content', ogImage);

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-page-structured-data]');
    existingScripts.forEach(script => script.remove());

    // Add structured data if provided
    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      dataArray.forEach((data, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-page-structured-data', `page-${index}`);
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, structuredData]);

  return null;
};

export default PageSEO;
