export const ALL_BLOGS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    "imageUrl": mainImage.asset->url,
    faq[] { question, answer }
  }
`
