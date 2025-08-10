export const GLOBAL_FAQ_QUERY = `
  *[_type == "individualFaqPage" && slug.current == "faq"][0] {
    title,
    items[]{ question, answer }
  }
`