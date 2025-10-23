import type { Plugin } from 'vite';
import { execSync } from 'child_process';

export function sitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      // Generate sitemap after build completes
      try {
        console.log('Generating sitemap...');
        execSync('npx tsx scripts/generate-sitemap.ts', { stdio: 'inherit' });
      } catch (error) {
        console.error('Failed to generate sitemap:', error);
      }
    },
  };
}
