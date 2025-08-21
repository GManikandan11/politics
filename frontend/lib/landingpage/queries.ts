import { groq } from 'next-sanity';
// lib/landingpage/queries.ts

export const LANDING_PAGE_BASE_QUERY = groq`
*[_type == "landingPages" && slug.current == $slug][0]{
  _id, _createdAt, _updatedAt, slug,
  heroSection{
    highlight, headline, subheadline,
    primaryCta{ text, url },
    secondaryCta{ text, url },
      heroMedia{
      "type":  select(defined(video) => "video", "image"),
      "url":   coalesce(video.asset->url, image.asset->url),
      "mime":  video.asset->mimeType,
      "alt":   coalesce(image.alt, alt, "Hero media")
    }
  },
  highlightsSection[]{ title, description },
  socialProofSection{
    blurb,
    logos[]{ asset->{url}, alt },
    testimonials[]{ quote, authorName, authorTitle, authorImage{ asset->{url}, alt } },
    ctaButtons[]{ text, url }
  },
  conversionExplanation{
    tagline, headline, subheadline,
    image{ asset->{url}, alt },
    bullets[],
    buttonText, buttonUrl
  }
}
`;


//   *[_type == "landingPages" && slug.current == $slug ][0] {
//     _id,
//     _createdAt,
//     _updatedAt,
//     slug,
//     language,
//     heroSection {
//       highlight->,
//       headline->,
//       subheadline->,
//       primaryCta {
//         text->,
//         url
//       },
//       secondaryCta {
//         text->,
//         url
//       }
//     },
//     highlightsSection[] {
//       title->,
//       description->
//     },
//     socialProofSection {
//       blurb->,
//       logos[] {
//         asset->{url},
//         alt->
//       },
//       testimonials[] {
//         quote->,
//         authorName->,
//         authorTitle->,
//         authorImage {
//           asset->{url},
//           alt->
//         }
//       },
//       ctaButtons[] {
//         text->,
//         url
//       }
//     },
//     // Include other sections as needed
//   }
// `;