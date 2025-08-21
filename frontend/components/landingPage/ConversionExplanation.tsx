// components/ConversionExplanation.tsx
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/common/getText';

interface ConversionExplanationProps {
  conversionExplanation: {
    headline: any; // Changed to any for multilingual support
    subheadline: any; // Changed to any for multilingual support
    tagline?: any; // Changed to any for multilingual support
    buttonText?: any; // Changed to any for multilingual support
    buttonUrl?: string;
    image?: {
      asset: {
        url: string;
      };
      alt?: any; // Added alt text with multilingual support
    };
    bullets: any[]; // Changed to any[] for multilingual support
  };
}

const ConversionExplanation = ({ conversionExplanation }: ConversionExplanationProps) => {
  const { currentLanguage } = useLanguage();
  
  if (!conversionExplanation) return null;

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

  const {
    headline,
    subheadline,
    image,
    bullets,
    tagline,
    buttonText,
    buttonUrl,
  } = conversionExplanation;

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4" style={{ margin: '0px' }}>
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-center">
        {image?.asset?.url && (
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src={image.asset.url}
              alt={asText(image?.alt, 'Conversion Explanation')}
              width={600}
              height={400}
              style={{borderRadius:'1em'}}
              className="object-cover shadow-lg"
            />
          </div>
        )}
        <div className='text-left order-2 md:order-1'>
          {tagline && (
            <p className="text-sm font-medium text-[#6941C6] bg-gray-50 dark:bg-gray-800 inline-block px-4 py-1 rounded-full shadow mb-6">
              {asText(tagline)}
            </p>
          )}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-grotesque">
            {asText(headline)}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {asText(subheadline)}
          </p>

          <ul className="mt-6 space-y-4">
            {bullets?.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg fill="#6f5bc6" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"></path>
                  </g>
                </svg>
                <p className="text-gray-800 dark:text-gray-300">
                  {asText(point)}
                </p>
              </li>
            ))}
          </ul>
          
          {buttonText && buttonUrl && (
            <a
              href={buttonUrl}
              className="mt-6 inline-block rounded-md px-6 py-3 text-sm font-semibold text-white shadow transition bg-secondary hover:bg-[#5c4bc0] dark:bg-dmk-red dark:hover:bg-dmk-red/90"
            >
              {asText(buttonText)} →
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConversionExplanation;