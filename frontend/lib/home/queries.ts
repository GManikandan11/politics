export const HOMEPAGE_QUERY = /* groq */ `
  *[_type == "homepage"][0]{
    heroTitle,
    heroTitle_2,
    heroTitleBlack_1,
    heroTitleBlack_2,
    heroTitleGreen,
    heroSubtitle,
    heroHighlight,
    ctaButtons,
    heroModernText,
    marqueeLogos[]{
      alt,
      image{
        asset->{url}
      }
    }
  }
`;


export const POST_LIST_QUERY = `
  *[_type == "post"] | order(publishedAt desc){
    title,
    slug
  }
`;

export const GETTING_STARTED_QUERY = `*[_type == "gettingStarted"][0]{
  title,
  ctaLabel,
  subtitle,
  installHeading,
  ctaLink,
  steps[]{
    stepTitle,
    description,
    code
  },
  marqueeLogos[]{
    alt,
    image {
      asset -> {
        url
      }
    }
  }
}`;


/* /lib/queries.ts */
export const MARKETING_PAGE_QUERY = /* groq */ `
*[_type == "marketingPage"][0]{
  headline,
  subhead,
  ctaLabel,
  ctaHref,
  heroMedia{
    "type":  select(defined(video) => "video", "image"),
    "url":   coalesce(video.asset->url, image.asset->url),
    "mime":  video.asset->mimeType
  },
  features[]{
    title, eyebrow, body, icon
  },
  cmsMedia{
    "type":  select(defined(video) => "video", "image"),
    "url":   coalesce(video.asset->url, image.asset->url),
    "mime":  video.asset->mimeType
  },
  cmsFeatures[]{
    title, eyebrow, body, icon
  },
  grid_3_Media{
    "type":  select(defined(video) => "video", "image"),
    "url":   coalesce(video.asset->url, image.asset->url),
    "mime":  video.asset->mimeType
  },
  grid_3[]{
    title, eyebrow, body, icon
  }
}
`


export const FAQ_PAGE_QUERY = /* groq */ `
*[_type == "faq"][0]{
  sectionLabel,
  headline,
  subhead,
  items[] {question, answer},
  waitlist {
    label,
    headline,
    subhead,
    inputPlaceholder,
    ctaLabel,
    errorMessage,
    successMessage,
    finePrint
  }
}
`

// lib/home/queries.ts
export const BLOGCARDS_PAGE_QUERY = /* groq */ `
  *[_type == "blogCards"][0]{
    sectionLabel,
    headline,
    subhead,
    cards[]{
      _key,
      excerpt,
      categories,
      "imageUrl": image.asset->url
    }
  }
`

export const TESTIMONIALS_QUERY = /* groq */ `
  *[_type == "testimonials"][0]{
    sectionLabel,
    headline,
    subhead,
    slides[]{
      _key,
      name,
      role,
      quote,
      rating,
      "avatarUrl": avatar.asset->url
    }
  }
`
