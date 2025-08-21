import { groq } from 'next-sanity'

export const FOOTER_QUERY = groq`
  *[_type == "footer"][0]{
    columns[]{
      title {
        en,
        ta
      },
      links[]{
        label {
          en,
          ta
        },
        link
      }
    },
    socialLinks[]{
      platform {
        en,
        ta
      },
      href,
      "iconUrl": icon.asset->url
    },
    appLinks[]{
      os {
        en,
        ta
      },
      href,
      "iconUrl": icon.asset->url
    },
    copyright {
      en,
      ta
    }
  }
`