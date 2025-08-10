import { groq } from 'next-sanity';

export const PAGE_QUERY = groq`
  *[_type == "landingPage" && slug.current == $slug][0] {
    title,
    seo {
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogImage { asset->{url} },
      twitterTitle,
      twitterDescription,
      twitterImage { asset->{url} },
      noIndex,
      noFollow
    }
  }
`;
