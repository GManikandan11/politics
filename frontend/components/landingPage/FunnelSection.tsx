'use client';
import React from 'react';

interface FunnelStep {
  label: string;
  subtext: string;
}

interface CTA {
  text: string;
  url: string;
}

interface FunnelSectionProps {
  funnelSection: {
    title: string;
    description?: string;
    stages?: FunnelStep[];
    cta?: CTA;
  };
}

const FunnelSection = ({ funnelSection }: FunnelSectionProps) => {
  if (!funnelSection) return null;

  const { title, description, stages, cta } = funnelSection;

  return (
    <section style={{margin:'0px'}} className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
        {description && (
          <p className="text-gray-500 dark:text-gray-300 mb-6">{description}</p>
        )}

        {Array.isArray(stages) && stages.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {stages.map((step, index) => (
              <div key={index} className="land-card p-6 rounded-lg shadow-md bg-white dark:bg-secondaryDark">
                <h4 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">{step.label}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-left">{step.subtext}</p>
              </div>
            ))}
          </div>
        )}

        {cta && (
          <div className="mt-10">
            <a
              href={cta.url}
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700"
            >
              {cta.text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FunnelSection;
