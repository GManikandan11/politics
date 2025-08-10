// app/integrations/page.tsx
import { client } from '@/sanity/client';
import { INTEGRATIONS_QUERY } from '@/lib/integration/queries';
import IntegrationCard from '@/components/integration/IntegrationCard';
// import { Integration } from '@/types/Integration';
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage'; // Adjust path as needed

export const generateMetadata = generateLandingPageMetadata

export default async function IntegrationPage() {
  const integrations = await client.fetch(INTEGRATIONS_QUERY);

  if (!integrations || integrations.length === 0) {
    return <div className="text-center py-12 text-gray-500">No integrations found.</div>;
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <h1 className="text-4xl text-center font-bold mb-10">Integrations</h1>

      <div className="space-y-10">
        {integrations.map((integration:any,index:number) => (
          <IntegrationCard key={integration._id} {...integration} index={index}  />
        ))}
      </div>
    </div>
  );
}
