'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/common/getText';

interface FunnelStep {
  label: any; // Changed to any for multilingual support
  subtext: any; // Changed to any for multilingual support
}

interface CTA {
  text: any; // Changed to any for multilingual support
  url: string;
}

interface FunnelSectionProps {
  funnelSection: {
    title: any; // Changed to any for multilingual support
    description?: any; // Changed to any for multilingual support
    stages?: FunnelStep[];
    cta?: CTA;
  };
}

const FunnelSection = ({ funnelSection }: FunnelSectionProps) => {
  const { currentLanguage } = useLanguage();
  
  if (!funnelSection) return null;

  // Helper function to extract text from multilingual objects
  const asText = (value: any, fallback = ''): string => {
    if (!value) return fallback;
    
    if (typeof value === 'object') {
      // Handle multilingual object {en: 'text', ta: 'text'}
      return value[currentLanguage] || value.en || fallback;
    }
    
    if (typeof value === 'string') return value;
    
    return fallback;
  };

  const { title, description, stages, cta } = funnelSection;

  return (
    <section style={{margin:'0px'}} className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 dark:text-white">
          {asText(title)}
        </h2>
        {description && (
          <p className="text-gray-500 dark:text-gray-300 mb-6 text-lg">
            {asText(description)}
          </p>
        )}

        {Array.isArray(stages) && stages.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {stages.map((step, index) => (
              <div 
                key={index} 
                className="land-card p-6 rounded-lg shadow-md bg-white dark:bg-secondaryDark border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-dmk-red flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700 dark:text-white">
                    {asText(step.label)}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-left">
                  {asText(step.subtext)}
                </p>
              </div>
            ))}
          </div>
        )}

        {cta && (
          <div className="mt-12">
            <a
              href={cta.url}
              className="inline-block bg-dmk-red text-white px-8 py-4 rounded-md hover:bg-dmk-red/90 transition-colors duration-300 font-semibold text-lg"
            >
              {asText(cta.text)} →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FunnelSection;