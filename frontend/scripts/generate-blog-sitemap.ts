import { client } from '../sanity/client';
import fs from 'fs';
import path from 'path';

(async () => {
  const posts = await client.fetch(`*[_type == "blogPost"]{ "slug": slug.current }`);

  const baseUrl = 'https://bizmagnets.ai';
  const xmlItems = posts
    .map((post: any) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('');

  const finalXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;

  const outputPath = path.resolve(__dirname, '../public/blog-sitemap.xml');
  fs.writeFileSync(outputPath, finalXml.trim());

  console.log('✅ blog-sitemap.xml generated at:', outputPath);
})();
