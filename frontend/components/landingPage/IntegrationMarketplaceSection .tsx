'use client';
import { PortableText } from 'next-sanity';
import React from 'react';

interface Integration {
  name: string;
  logo: {
    asset: {
      url: string;
    };
  };
}

interface CTA {
  text: string;
  url: string;
}

interface Props {
  integrationMarketplace: {
    headline: string;
    description: string;
    integrations: Integration[];
    cta: CTA;
  };
}

const IntegrationMarketplaceSection = ({
  integrationMarketplace,
}: Props) => {
  if (!integrationMarketplace) return null;

  const { headline, description, integrations, cta } = integrationMarketplace;

  return (
<section style={{ margin: '0px' }} className="bg-white dark:bg-gray-900 py-20 bg-gray-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start md:items-center">
    
    {/* Left Column */}
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-grotesque text-left">
        {headline}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 mt-8 text-left">
        {Array.isArray(description) ? (
          <PortableText value={description} />
        ) : (
          description
        )}
      </p>

      {/* CTA - Left aligned */}
      {cta?.url && cta?.text && (
        <div className="mt-8 text-left">
          <a
            href={cta.url}
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded-md transition"
          >
            {cta.text}
            <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      )}
    </div>

    {/* Right Icon Grid */}
    <div className="flex justify-end w-full">
      <div className="grid grid-cols-3 gap-8 w-full max-w-md ml-auto md:ml-0 self-center pr-6">
        {integrations?.map((integration, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <img
              src={integration.logo?.asset?.url}
              alt={integration.name}
              className="w-12 h-12 mb-3 object-contain"
            />
            <span className="text-sm text-gray-700 dark:text-white">{integration.name}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

  );
};

export default IntegrationMarketplaceSection;
