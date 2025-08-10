'use client';
import React, { useState } from 'react';
import { PricingSection as PricingSectionProps } from '@/types/pricingSection';
import clsx from 'clsx';
import { PortableText } from '@portabletext/react';
import ComparisonSection from './ComparisonSection';
import FeatureComparisonTable from './FeatureComparisonTable';
import HeroSection from './HeroSection';

export default function PricingSection(props: PricingSectionProps) {
  const {
    tagline,
    headline,
    subtext,
    plansByBilling,
    comparisonSection,
    featureComparisonTable,
    heroSection
  } = props;

  const billingLabels = plansByBilling?.map((p: any) => p.billingLabel) || [];

  const [selectedBillingLabel, setSelectedBillingLabel] = useState<string>(
    billingLabels.find((label: string) =>
      label.toLowerCase().includes('annual')
    ) || billingLabels[0]
  );

  const activePlans =
    plansByBilling?.find(
      (group: any) =>
        group.billingLabel?.toLowerCase().replace(/\s/g, '') ===
        selectedBillingLabel?.toLowerCase().replace(/\s/g, '')
    )?.plans || [];

  return (
    <div className=''>
   <div style={{backgroundColor: '#eef3fd'}}>
    <section className="container mx-auto px-4 max-w-7xl py-10 text-center font-inter">
      {/* Tagline */}
      {tagline && (
        <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1 bg-white text-primary rounded-full mx-auto mb-6 shadow border border-primary">
<svg fill='#6f5bc6' height='20px' width='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/></g></svg>
          {/* <img src="/location.png" alt="Location icon" className="w-4 h-4 object-contain" /> */}
          {tagline}
        </div>
      )}

      {/* Headline */}
      <h1 className="mx-auto mb-10 max-w-3xl text-5xl md:text-[64px] font-grotesque font-bold leading-tight">
        {headline}
      </h1>

      {/* Subtext */}
      {subtext && (
        <p className="text-gray-600 max-w-xl mx-auto mb-8 text-base">{subtext}</p>
      )}

      {/* Billing Toggle */}
      {billingLabels.length > 1 && (
        <div className="inline-flex w-[320px] justify-between rounded-full border border-gray-300 bg-white p-2 mb-10 mx-auto">
          {billingLabels.map((label: string, index: number) => {
            const isActive =
              selectedBillingLabel.toLowerCase().replace(/\s/g, '') ===
              label.toLowerCase().replace(/\s/g, '');
            return (
              <button
                key={index}
                onClick={() => setSelectedBillingLabel(label)}
                className={clsx(
                  'relative px-4 py-2 text-sm font-medium rounded-full transition-colors',
                  isActive ? 'bg-primary text-white' : 'text-black'
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      {/* Plans */}
      <div className="grid gap-8 md:grid-cols-3">
        {activePlans.map((plan: any, index: number) => {
          const isHighlighted = !!plan.highlightLabel;
          const isMostPopular = plan.highlightLabel?.toLowerCase() === 'most popular';

          return (
            <div
              key={plan.label}
              className={clsx(
                'flex flex-col justify-between border p-6 rounded-xl shadow h-full text-left font-inter relative',
                isMostPopular ? 'border-t-4 border-blue-500' : 'border-t-4 border-primary'
              )}
              style={{backgroundColor: isHighlighted ? '#fff' : '#fff'}}
            >
              {/* Most Popular Badge */}
              {isMostPopular && (
                <div className="absolute -top-4 left-1/3 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 text-xs rounded-full shadow font-semibold z-10">
                  {plan.highlightLabel}
                </div>
              )}

              <div className="flex flex-col gap-2 mb-4 text-center mt-4">
                <span className="text-sm bg-gray-100 font-semibold px-3 py-1 rounded-full w-fit mx-auto"
                style={{fontSize:'1em',backgroundColor:isMostPopular ? '#d8ebff' :'#e8def7' }}
                >
                  {plan.label}
                </span>
                <p className="text-4xl font-extrabold">{plan.price}</p>
                {plan.pricingCaption && (
                  <p className="text-sm text-gray-500 whitespace-pre-line">
                    {plan.pricingCaption}
                  </p>
                )}
                {Array.isArray(plan.body) && plan.body.length > 0 && (
                  <div className="text-sm text-gray-700 mb-4 leading-relaxed">
                    <PortableText value={plan.body} />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <ul className="mb-6 mt-4 space-y-2 text-sm">
                  {plan?.features?.map((f: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[18px] text-tick font-bold">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.ctaLabel && (
                <div className="text-center mt-auto pt-4">
                  <a
                    href={plan.ctaLink || '#'}
                    className={clsx(
                      'inline-block w-full rounded-md px-6 py-3 text-sm font-semibold text-white shadow transition',
                      isMostPopular
                        ? 'bg-secondary'
                        : 'bg-primary',
                      'hover:bg-[#5c4bc0]'
                    )}
                  >
                    {plan.ctaLabel}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
    </div>
      {/* Other Sections */}
      {comparisonSection && <ComparisonSection comparisonSection={comparisonSection} />}
      {featureComparisonTable && <FeatureComparisonTable data={featureComparisonTable} />}
      {heroSection && <HeroSection heroSection={heroSection} />}
  </div>
  );
}
