// app/faq/page.tsx
import { client } from '@/sanity/client'
import { DEMO_EXPECTATION_QUERY } from '@/lib/demoException/queries'
import PageNotFound from '@/components/common/PageNotFound'
import DemoExpectation from '@/components/demoException/DemoException'
import PixelTracker from './PixelTracker'
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage'; // Adjust path as needed

export const generateMetadata = generateLandingPageMetadata

export default async function FAQPage() {
  const expectations = await client.fetch(DEMO_EXPECTATION_QUERY)
  if (!expectations) {
    return <PageNotFound message="FAQs page not found." />
  }
  const slug = expectations.slug?.current || 'faq'
return(
  <>
<PixelTracker slug={slug} />
<DemoExpectation
  heading={expectations.heading}
  points={expectations.points}
  rating={expectations.rating}
  whatsappIcon={expectations.whatsappIcon}
  partnerLogo={expectations.partnerLogo}
/>
</>
)
}
