//types.ts
export interface BlogCard {
  _key: string
  excerpt: string
  imageUrl?: string
  categories?: string[]
}

export interface blogCards {
  sectionLabel: string
  headline: string
  subhead?: string
  cards: BlogCard[]
}


export interface Testimonial {
  _key: string
  name: string
  role?: string
  quote: string
  rating: number
  avatarUrl?: string
}

export interface TestimonialsSectionData {
  sectionLabel: string
  headline: string
  subhead?: string
  slides: Testimonial[]
}


// HERO SECTION TYPES
export interface Media {
  type: 'image' | 'video'
  url: string
  mime?: string          // present for video
}

export interface Feature {
  title: string
  eyebrow?: string
  body?: string
  icon?: string
}

export interface MarketingProps {
  headline: string
  subhead?: string
  heroMedia: Media
  ctaLabel?: string
  ctaHref?: string
  features?: Feature[]
  cmsMedia?: Media
  cmsFeatures?: Feature[]
  grid_3_Media?: Media
  grid_3?: Feature[]
}

// SOLUTIONS PAGE TYPES
export interface Solution {
  solutionTitle: string;
  problemDescription: any; // Portable Text type
  solutionDetails: any;    // Portable Text type
  image?: any;             // Sanity Image type
}

export interface SolutionPage {
  title: string;
  solutions: Solution[];
}
