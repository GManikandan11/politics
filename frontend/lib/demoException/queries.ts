export const DEMO_EXPECTATION_QUERY = `
  *[_type == "demoExpectation"][0] {
    heading,
    points,
    rating,
    "whatsappIcon": whatsappIcon.asset->url,
    "partnerLogo": partnerLogo.asset->url
  }
`
