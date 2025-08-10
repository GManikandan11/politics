import React from 'react';
import { PortableText } from '@portabletext/react';


interface DemoSectionProps {
  data: {
    headline?: string;
    description?: string;
    features?: string[];
    qaSessionText?: string;
  };
}

const DemoSection = ({ data }: DemoSectionProps) => {
  if (!data || !data.headline) return null;

  const {
    headline,
    description,
    features = [],
    qaSessionText,
  } = data;

  return (
    <section 
      className="mx-auto px-4 sm:px-6 py-12 md:px-16 md:py-20 my-10"
      style={{ backgroundColor: '#1e0b42' }}
    >
      <div className="max-w-12xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-white text-4xl md:text-4xl font-bold leading-tight font-grotesque text-left">
            {headline}
          </h2>
        <div className="text-left text-white mt-4">
          {Array.isArray(description) || (typeof description === 'object' && description !== null) ? (
            <PortableText value={description as any} />
          ) : (
            description && (
              <p className="text-white text-lg leading-relaxed font-inter text-white/90 text-left mt-4">
                {description}
              </p>
            )
          )}
        </div>
          {/* {description && (
            <p className="text-white text-lg leading-relaxed font-inter text-white/90 text-left mt-4">
              {description}
            </p>
          )} */}

          {features.length > 0 && (
            <ul className="text-white space-y-3 mt-6 mb-6">
              {features.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 dark:text-gray-200"
                >
                 <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center bg-transparent">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        <div className="text-left text-white">
          {qaSessionText ? (
            <PortableText value={qaSessionText as any} />
          ) : null}
        </div>
{/* <PortableText value={qaSessionText} />; */}
          {/* {qaSessionText && (
            <p className="text-white text-left text-sm mb-6">
              <strong className="block text-2xl md:text-2xl font-semibold mb-2">Q&A Session</strong>
              {qaSessionText}
            </p>
          )} */}
        </div>

        {/* Right column removed as image no longer in query */}
        <div>
             <iframe
        src="/BookADemoV2.html"
        title="Book a Demo"
        width="100%"
        height= "600px"
        style={{ border: 'none' }}
      ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
