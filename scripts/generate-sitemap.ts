import { writeFileSync } from 'fs';
import { products } from '../src/data/products';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
}

const generateSitemap = () => {
  const baseUrl = 'https://rootsandrichness.in';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls: SitemapUrl[] = [
    // Static pages
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/products`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/faq`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
    },
    // Policy pages
    {
      loc: `${baseUrl}/policies/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/policies/shipping`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/policies/return-refund`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/policies/terms`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3,
    },
  ];

  // Add product pages dynamically
  products.forEach((product) => {
    urls.push({
      loc: `${baseUrl}/products/${product.slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
      images: product.images.map((img, idx) => ({
        loc: img,
        title: `${product.name} - Image ${idx + 1}`,
        caption: product.shortDescription,
      })),
    });
  });

  // Generate XML
  const xmlUrls = urls.map((url) => {
    const imageXml = url.images
      ? url.images.map(
          (img) => `
      <image:image>
        <image:loc>${img.loc}</image:loc>
        ${img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : ''}
        ${img.caption ? `<image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
      </image:image>`
        ).join('')
      : '';

    return `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${imageXml}
  </url>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${xmlUrls}
</urlset>`;

  return sitemap;
};

const escapeXml = (unsafe: string) => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
};

// Generate and write sitemap
const sitemap = generateSitemap();
writeFileSync('public/sitemap.xml', sitemap, 'utf-8');
console.log('✅ Sitemap generated successfully at public/sitemap.xml');
