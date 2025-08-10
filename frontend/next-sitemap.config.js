// next-sitemap.config.js
// module.exports = {
//   siteUrl: 'https://bizmagnets.ai', // ⬅️ Change to your domain
//   generateRobotsTxt: true,
//   sitemapSize: 7000,
//   changefreq: 'weekly',
//   priority: 0.7,
//   exclude: ['/studio'], // Exclude Sanity Studio paths
// }

// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: 'https://bizmagnets.ai',        // ✅ Your production domain
//   generateRobotsTxt: true,                     // ✅ Generates robots.txt
//   generateIndexSitemap: false,                 // ✅ Outputs a single sitemap.xml instead of sitemap-0.xml, etc.
//   sitemapSize: 10000,                          // ✅ Ensures all URLs fit in one file
//   changefreq: 'weekly',                        // ✅ Frequency setting for crawlers
//   priority: 0.7,                               // ✅ Default priority
//   exclude: ['/studio'],                        // ✅ Exclude Sanity Studio from sitemap
//   robotsTxtOptions: {
//     policies: [
//       {
//         userAgent: '*',
//         allow: '/',
//         disallow: ['/studio'],
//       },
//     ],
//     additionalSitemaps: [
//       'https://bizmagnets.ai/sitemap.xml',
//     ],
//   },
// }
/** @type {import('next-sitemap').IConfig} */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bizmagnets.ai',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/studio', '/lp', '/es/lp'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/lp/', '/es/lp/'],
      },
    ],
    additionalSitemaps: [
      'https://bizmagnets.ai/sitemap.xml',
      'https://bizmagnets.ai/blog-sitemap.xml',
    ],
  },
};
