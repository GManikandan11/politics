import { groq } from 'next-sanity';

export const PRICING_SECTION_QUERY = groq`
  *[_type == "pricingSection" && slug.current == "pricing"][0]{
    tagline,
    headline,
    subtext,
    featureHighlights[],

    billingToggles[] {
      label,
      highlight,
      isDefault
    },

    plansByBilling[] {
      billingLabel,
      plans[] {
        label,
        price,
        pricingCaption,
        highlightLabel,
        features[],
        body[]{
          ...,
          children[]{
            ..., 
            _type == "span" => { ... }
          }
        },
        ctaLabel,
        ctaLink
      }
    },

    comparisonSection {
      title,
      leftColumnTitle,
      rightColumnTitle,
      comparisonItems[] {
        leftFeature,
        rightFeature
      },
      leftSummary[] {
        ...,
        children[] {
          ..., 
          _type == "span" => { ... }
        }
      },
      rightSummary[] {
        ...,
        children[] {
          ..., 
          _type == "span" => { ... }
        }
      }
    },

    featureComparisonTable {
      title,
      columns,
      rows[] {
        group,
        feature,
        values
      }
    },

    heroSection {
    heroTitle,
    heroDescription,
      tag,
      title,
      richIntro[] {
        ...,
        children[] {
          ..., 
          _type == "span" => { ... }
        }
      },
      ctaLabel,
      ctaSubtext,
      ctaLink,
      image {
        asset-> {
          url
        }
      }
    }
  }
`;
