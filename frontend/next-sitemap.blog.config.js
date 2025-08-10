/** @type {import('next-sitemap').IConfig} */

// 1. Fetch blog slugs from Sanity
const fetchBlogUrlsFromCMS = async () => {
  const res = await fetch(
    `https://ffyemvvw.api.sanity.io/v1/data/query/production?query=*[_type == "blog"]{ "slug": slug.current }`
  );
  const json = await res.json();
  return json.result.map((b) => b.slug);
};

// 2. Sitemap config using those slugs

module.exports = {
  siteUrl: 'https://bizmagnets.ai',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  outDir: './public',
  sitemapBaseFileName: 'blog-sitemap',

  additionalPaths: async () => {
    const slugs = await fetchBlogUrlsFromCMS();
    return slugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'weekly',
      priority: 0.8,
    }));
  },
};
