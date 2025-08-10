'use client';
import React from 'react';
import { PortableText } from '@portabletext/react';

export default function ComparisonSection({
  comparisonSection,
}: {
  comparisonSection: {
    title?: string;
    leftColumnTitle?: string;
    rightColumnTitle?: string;
    comparisonItems?: { leftFeature: string; rightFeature: string }[];
    leftSummary?: any;
    rightSummary?: any;
  };
}) {
  if (!comparisonSection) return null;

  const {
    title,
    leftColumnTitle,
    rightColumnTitle,
    comparisonItems,
    leftSummary,
    rightSummary,
  } = comparisonSection;

  return (
    <div className="mt-20 max-w-7xl mx-auto text-left px-4 md:px-0">
      {/* Section Title */}
      {title && (
        <h3 className="mx-auto mb-10 max-w-4xl text-center text-4xl md:text-[64px] font-grotesque font-semibold leading-tight text-[#1e1e1e]">
          {title}
        </h3>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="rounded-2xl p-6 border border-black shadow-glow bg-cardBg">
          <h4 className="text-xl font-bold mb-4 text-[#1e1e1e]">
            {leftColumnTitle}
          </h4>
          <ul className="space-y-3 text-base text-[#1e1e1e] font-medium">
            {comparisonItems?.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
               <span className="inline-flex w-6 h-6 rounded-full bg-tickBlue text-white items-center justify-center text-xs leading-none font-bold">
                ✔
                </span>
                <span>{item.leftFeature}</span>
              </li>
            ))}
          </ul>
          {leftSummary && (
            <div className="mt-6 text-base text-[#1e1e1e] font-semibold">
              <PortableText value={leftSummary} />
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="rounded-2xl p-6 border border-black shadow-glow bg-white">
          <h4 className="text-xl font-bold mb-4 text-[#1e1e1e]">
            {rightColumnTitle}
          </h4>
          <ul className="space-y-3 text-base text-[#1e1e1e] font-medium">
            {comparisonItems?.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
             <span className="inline-flex w-6 h-6 rounded-full bg-tickPurple text-white items-center justify-center text-xs leading-none font-bold">
                ✔
                </span>
                <span>{item.rightFeature}</span>
              </li>
            ))}
          </ul>
          {rightSummary && (
            <div className="mt-6 text-base text-[#1e1e1e] font-semibold">
              <PortableText value={rightSummary} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
