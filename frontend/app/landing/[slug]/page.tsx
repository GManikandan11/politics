import { client } from '@/sanity/client';
import { LANDING_PAGE_QUERY } from '@/lib/landingpage/queries';
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage';
import LandingPage from '@/components/landingPage/LandingPage';
import { notFound } from 'next/navigation';
import DebugClient from '@/components/DebugClient';

export const generateMetadata = generateLandingPageMetadata;

type Props = {
  params: { slug: string };
};

export default async function LandingPageSlug({ params }: Props) {
  const slug = params.slug;
  const landingPage = await client.fetch(LANDING_PAGE_QUERY, { slug });

  if (!landingPage) {
    return notFound(); // or show a fallback UI
  }

  return (
    <div className="">
        <DebugClient data={{ landingPage,slug }} />
      <LandingPage {...landingPage} />
    </div>
  );
}
