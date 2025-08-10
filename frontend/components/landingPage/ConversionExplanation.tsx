// components/ConversionExplanation.tsx
import React from 'react';
import Image from 'next/image';

interface ConversionExplanationProps {
  conversionExplanation: {
    headline: string;
    subheadline: string;
    tagline?: string;
    buttonText?: string;
    buttonUrl?: string;
    image?: {
      asset: {
        url: string;
      };
    };
    bullets: string[];
  };
}


const ConversionExplanation = ({ conversionExplanation }: ConversionExplanationProps) => {
  if (!conversionExplanation) return null;

  // const { headline, subheadline, image, bullets } = conversionExplanation;
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
          <div className="flex justify-center">
            <Image
              src={image.asset.url}
              alt="Conversion Explanation"
              width={1920}
              height={1080}
              style={{borderRadius:'1em'}}
              // className="rounded-lg shadow"
            />
          </div>
        )}
        <div className='text-left'>
          {/* <p className="text-sm font-medium text-[#6941C6] bg-gray-50 inline-block px-4 py-1 rounded-full shadow mb-6">Identify Anonymous Website Visitors</p> */}
          {tagline && (
        <p className="text-sm font-medium text-[#6941C6] bg-gray-50 inline-block px-4 py-1 rounded-full shadow mb-6">
          {tagline}
        </p>
      )}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-grotesque">{headline}</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">{subheadline}</p>

          <ul className="mt-6 space-y-4">
            {bullets?.map((point, idx) => (
              <li key={idx} className="flex items-start  items-center gap-3">
                <svg fill="#6f5bc6" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"></path></g></svg>
                <p className="text-gray-800 dark:text-gray-300">{point}</p>
              </li>
            ))}
          </ul>
          {buttonText && buttonUrl && (
            <a
              href={buttonUrl}
              className="mt-6 inline-block rounded-md px-6 py-3 text-sm font-semibold text-white shadow transition bg-secondary hover:bg-[#5c4bc0]"
            >
              {buttonText}
            </a>
          )}
        {/* 
          <button className="mt-6 inline-block  rounded-md px-6 py-3 text-sm font-semibold text-white shadow transition bg-secondary hover:bg-[#5c4bc0]">
            See exactly how it works →
          </button> */}
        </div>

        {/* Illustration Image */}
  
      </div>
    </section>
  );
};

export default ConversionExplanation;
