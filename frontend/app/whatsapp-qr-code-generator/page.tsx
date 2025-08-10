// app/faq/page.tsx
import { client } from '@/sanity/client'
import { DEMO_EXPECTATION_QUERY } from '@/lib/demoException/queries'
import PageNotFound from '@/components/common/PageNotFound'
import DemoExpectation from '@/components/demoException/DemoException'
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage'; // Adjust path as needed

export const generateMetadata = generateLandingPageMetadata

export default async function whatsappQR() {

return(
  <>
<iframe
 className='bg-background-yellow'
        src="/WhatsAppQRcode.html"
        title="Book a Demo"
        width="100%"
        height= "700px"
        style={{ border: 'none' }}
      ></iframe>
</>
)
}
