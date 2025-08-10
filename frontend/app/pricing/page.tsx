import { client } from '@/sanity/client';
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage';
import PricingSection from '@/components/pricing/PricingSection';
import { PRICING_SECTION_QUERY } from '@/lib/pricing/queries';
import DebugClient from '@/components/DebugClient';
import { PAGE_QUERY } from '@/lib/SEO/queries';

// export const generateMetadata = generateLandingPageMetadata;

export const generateMetadata = () =>
  // generateLandingPageMetadata({ slugOverride: '/pricing' })
generateLandingPageMetadata({ params: { slug: '/pricing' } })

export default async function PricingPage() {
  const data = await client.fetch(PRICING_SECTION_QUERY);
  const pricing = await client.fetch(PAGE_QUERY, { slug: 'pricing' })

  if (!data) {
    return (
      <div className="text-center py-12 text-gray-500">
        Pricing details not available.
      </div>
    );
  }

  return (
    <div className="">
      <DebugClient data={pricing} />
      <PricingSection {...data} />
    </div>
  );
}
