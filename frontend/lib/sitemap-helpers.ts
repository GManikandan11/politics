// lib/sitemap-helpers.ts
import { client } from '@/sanity/client'

export async function getBlogRoutes() {
  const posts = await client.fetch(`*[_type == "blogPost"]{
    "slug": slug.current,
    _updatedAt
  }`)

  return posts.map((post: any) => ({
    loc: `/blog/${post.slug}`,
    lastmod: post._updatedAt,
  }))
}
