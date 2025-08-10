export const LANDING_PAGE_QUERY = `
  *[_type == "landingPages" && slug.current == $slug][0]{
    _id,
    slug,
    heroSection {
      highlight,
      headline,
      subheadline,
      primaryCta { text, url },
      secondaryCta { text, url },
      heroMedia{
        "type":  select(defined(video) => "video", "image"),
        "url":   coalesce(video.asset->url, image.asset->url),
        "mime":  video.asset->mimeType
      }
    },
    highlightsSection[]{
      title,
      description
    },
    socialProofSection {
      blurb,
      logos[]{ asset->{url} },
      testimonials[]{
        quote,
        authorName,
        authorTitle,
        authorImage {
          asset->{url}
        }
      },
      ctaButtons[]{
        text,
        url
      }
    },
    problemSection {
      title,
      intro,
      scenarioOne {
        name,
        points[]{
          pointTitle,
          pointText
        }
      },
      scenarioTwo {
        name,
        points[]{
          pointTitle,
          pointText
        }
      }
    },
    featureCards {
      sectionTitle,
      sectionDescription,
      cards[] {
        icon,
        title,
        description,
        number
      }
    },
    conversionExplanation {
      headline,
      subheadline,
      tagline,
      buttonText,
      buttonUrl,
      image {
        asset->{
          url
        }
      },
      bullets
    },
    demoRequestSection {
      headline,
      description,
      features,
      qaSessionText
    },
  faq {
  sectionLabel,
  headline,
  subhead,
  items[] {
    question,
    answer
  }
},
   funnelSection {
      title,
      description,
      stages[] {
        label,
        subtext
      },
    },
   integrationMarketplace {
      headline,
      description,
      integrations[] {
        name,
        logo {
          asset -> {
            url
          }
        }
      },
      cta {
        text,
        url
      }
    },
autoEngageSection {
  label,
  headline,
  subheadline,          // blockContent
  features[] {
    icon,
    title,
    step,
    description,
    disabled,
    visual { asset->{ url } }
  },
  personaCard {
    name,
    title,
    location,
    badges,
    image { asset->{ url } }
  },
  messageSteps[] {
    step,
    text,
    tags
  }
}
  }
`;
