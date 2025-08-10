// lib/solution/queries.ts
import { groq } from "next-sanity";

export const SOLUTION_PAGE_PATHS_QUERY = groq`
  *[_type == "solutionPage"] {
    "slug": slug.current
  }
`;

export const SOLUTION_PAGE_QUERY = groq`
  *[_type == "solutionPage" && slug.current == $slug][0] {
    title,
    title_2,
    subTitle,
    seoDescription,
    items[] { question, answer },
    solutions[] {
      solutionTitle,
      problemDescription,
      solutionDetails,
      image {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    "grid1Media": grid_1_Media {
      asset->{
        _id,
        url
      },
      hotspot,
      alt
    },
    "grid1": grid_1[] {
      title,
      eyebrow,
      body,
      icon,
        ctwaLabel,
        ctwaLink
    },
    
    "grid2Media": grid_2_Media {
      asset->{
        _id,
        url
      },
      hotspot,
      alt
    },
    "grid2": grid_2[] {
      title,
      eyebrow,
      body,
      icon,
        ctwaLabel,
  ctwaLink
    },
    "grid3Media": grid_3_Media {
      asset->{
        _id,
        url
      },
      hotspot,
      alt
    },
    "grid3": grid_3[] {
      title,
      eyebrow,
      body,
      icon,
        ctwaLabel,
  ctwaLink
    },
    "grid4Media": grid_4_Media {
      asset->{
        _id,
        url
      },
      hotspot,
      alt
    },
    "grid4": grid_4[] {
      title,
      eyebrow,
      body,
      icon,
        ctwaLabel,
  ctwaLink
    },
    "grid5Media": grid_5_Media {
      asset->{
        _id,
        url
      },
      hotspot,
      alt
    },
    "grid5": grid_5[] {
      title,
      eyebrow,
      body,
      icon,
        ctwaLabel,
        ctwaLink
    }
  }
`;
