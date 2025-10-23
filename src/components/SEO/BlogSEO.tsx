import PageSEO from './PageSEO';
import { generateBreadcrumbStructuredData } from '@/utils/seoUtils';

const BlogSEO = () => {
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Home', url: 'https://rootsandrichness.in/' },
    { name: 'Blog', url: 'https://rootsandrichness.in/blog' },
  ]);

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Roots and Richness Blog",
    "description": "Learn about natural wellness, wood-pressed oils, traditional health practices, and sustainable living",
    "url": "https://rootsandrichness.in/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Roots and Richness",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rootsandrichness.in/logo.png",
      },
    },
  };

  return (
    <PageSEO
      title="Natural Wellness Blog | Roots and Richness"
      description="Discover articles about wood-pressed oils, traditional health practices, natural wellness, and sustainable living. Expert insights from Roots and Richness."
      keywords="natural wellness blog, wood-pressed oils benefits, traditional health, sustainable living, ayurvedic oils, cold-pressed oil benefits"
      canonicalUrl="https://rootsandrichness.in/blog"
      ogImage="https://rootsandrichness.in/og-blog.jpg"
      structuredData={[breadcrumbData, blogStructuredData]}
    />
  );
};

export default BlogSEO;
