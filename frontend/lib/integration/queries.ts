// /lib/integration/queries.ts
export const INTEGRATIONS_QUERY = `*[_type == "integration"] | order(publishedAt desc) {
  _id,
  title,
  eyebrow,
  body,
  icon,
  "image": media.asset->url,
  ctaLabel,
  ctaLink,
  slug
}`
