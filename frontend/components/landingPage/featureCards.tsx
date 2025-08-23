import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/common/getText';
import Image from 'next/image';

type FeatureCard = {
  icon?: string;
  title: any; // Changed to any for multilingual support
  description: any; // Changed to any for multilingual support
  number?: any; // Changed to any for multilingual support
};

interface FeatureCardsProps {
  featureCards?: {
    sectionTitle?: any; // Changed to any for multilingual support
    sectionDescription?: any; // Changed to any for multilingual support
    cards: FeatureCard[];
  };
}

export default function FeatureCards({ featureCards }: FeatureCardsProps) {
  const { currentLanguage } = useLanguage();
  
  if (!featureCards || !featureCards.cards?.length) return null;

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

  return (
    <div className="bg-primaryLight dark:bg-gray-900 pb-20" style={{ margin: '0px' }}>
      <div className="triangle-bottom m-auto" style={{ margin: 'auto' }}></div>
      <section className="px-4 container mx-auto max-w-7xl space-y-12">
        {/* Top Section Title and Description */}
        {(featureCards.sectionTitle || featureCards.sectionDescription) && (
          <div className="text-center">
            {featureCards.sectionTitle && (
              <h2 className="font-bold mx-auto mb-5 max-w-3xl text-4xl md:text-5xl font-grotesque text-gray-900 dark:text-white">
                {asText(featureCards.sectionTitle)}
              </h2>
            )}
            {featureCards.sectionDescription && (
              <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mt-2 text-lg">
                {asText(featureCards.sectionDescription)}
              </p>
            )}
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featureCards.cards.map((item, index) => (
            <div
              key={index}
              className="land-card p-8 rounded-xl shadow-md bg-white dark:bg-secondaryDark border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="frame-3522966 flex flex-col items-center">
                {item.icon && (
                  <div className="flex justify-center card-icon mb-4">
                    <Image
                      src={item.icon}
                      alt={asText(item.title)}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                )}
                {item.number && (
                  <span className="text-6xl font-bold mb-4 text-dmk-red">
                    {asText(item.number)}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mt-6 font-grotesque text-left text-gray-900 dark:text-white">
                {asText(item.title)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-left">
                {asText(item.description)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}