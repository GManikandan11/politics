import { groq } from 'next-sanity'

export const FOOTER_QUERY = groq`
  *[_type == "footer"][0]{
    columns[]{ title, links[]{ label, link } },
    socialLinks[]{ platform, href, "iconUrl": icon.asset->url },
    appLinks[]{ os, href, "iconUrl": icon.asset->url },
    copyright
  }
`
