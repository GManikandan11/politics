// app/page.tsx
import HomePageWrapper from '@/components/HomePageWrapper';
import { client } from '@/sanity/client';
import { LANDING_PAGE_BASE_QUERY } from '@/lib/landingpage/queries';

export const revalidate = 60; // ISR: revalidate every 60s

export const metadata = {
  title: 'Home Page',
  description: 'Welcome to our website',
};

type SearchParams = { lang?: string };

export default async function HomePage({ searchParams }: { searchParams?: SearchParams }) {
  const language = searchParams?.lang ?? 'en';

  try {
    // NOTE: Query doesn't use `language`, so we only pass `slug`
    const landingPage = await client.fetch<any | null>(
      LANDING_PAGE_BASE_QUERY,
      { slug: 'home' },
      {
        next: {
          revalidate: 60,
          tags: ['landingPages'],
        },
      }
    );

    if (!landingPage) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Page not found</h1>
            <p className="text-gray-600">No landing page data found for slug: <code>home</code></p>
          </div>
        </div>
      );
    }

    return <HomePageWrapper initialData={{ landingPage, language }} />;
  } catch (error) {
    console.error('Error in HomePage:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error loading page</h1>
          <p className="text-gray-600">Please check your Sanity configuration and CORS settings.</p>
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded">
            <p className="text-sm">
              Error details: {error instanceof Error ? error.message : 'Unknown error'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
