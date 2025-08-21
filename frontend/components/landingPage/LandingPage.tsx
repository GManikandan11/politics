'use client';

import Image from 'next/image';
import Link from 'next/link';
import './landingPage.css';
import ProblemSection from './ProblemSection';
import FeatureCards from './featureCards';
import FunnelSection from './FunnelSection';
import AutoEngageSection from './AutoEngageSection';
import ConversionExplanation from './ConversionExplanation';
import DemoSection from './DemoSection';
import { useRef, useMemo } from 'react';
import type { Media } from '@/lib/types';
import { PortableText } from '@portabletext/react';
import FAQ from './FAQ';
// import IntegrationMarketplaceSection from './IntegrationMarketplaceSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/common/getText';
import { useTheme } from 'next-themes';

type MultilingualText = {
  en?: string;
  ta?: string;
} | string | null | undefined;

function asText(value: MultilingualText, lang: string, fallback = ''): string {
  // Uses your getText when object-like, otherwise returns string/fallback
  if (value && typeof value === 'object') {
    // @ts-expect-error allows calling your getText util
    return getText(value, lang) ?? fallback;
  }
  if (typeof value === 'string') return value;
  return fallback;
}

function MediaBlock({ media, alt }: { media: Media; alt: string }) {
  return media?.type === "video" ? (
    <>
    <video
      src={media?.url}
      playsInline
      // autoPlay
      // loop
      controls // Optional: show play/pause and volume controls
      className="h-full w-full object-cover rounded-xl"
    />
    </>
  ) : (
    <Image
      src={media?.url}
      alt={alt}
      width={1000}
      height={600}
      className="rounded-xl"
      priority
    />
  );
}

interface CTA {
  text?: MultilingualText;
  url?: string;
}

interface HeroSection {
  highlight?: MultilingualText;
  headline?: MultilingualText;
  subheadline?: any; // PortableTextValue or string
  primaryCta?: CTA;
  secondaryCta?: CTA;
  heroMedia?: (Media & { alt?: MultilingualText }) | any;
}

interface HighlightItem {
  title?: MultilingualText;
  description?: MultilingualText;
}

interface Testimonial {
  quote?: MultilingualText;
  authorName?: MultilingualText;
  authorTitle?: MultilingualText;
  authorImage?: {
    asset?: {
      url?: string;
    };
    alt?: MultilingualText;
  };
}

interface CTAButton {
  text?: MultilingualText;
  url?: string;
}

interface SocialProofSection {
  blurb?: MultilingualText;
  logos?: {
    asset?: { url?: string };
    alt?: MultilingualText;
  }[];
  testimonials?: Testimonial[];
  ctaButtons?: CTAButton[];
}

interface Props {
  heroSection?: HeroSection | null;
  highlightsSection?: HighlightItem[] | null;
  socialProofSection?: SocialProofSection | null;
  problemSection?: any;
  featureCards?: any;
  conversionExplanation?: any;
  demoRequestSection?: any;
  faq?: any;
  funnelSection?: any;
  autoEngageSection?: any;
  integrationMarketplace?: any;
  currentLanguage?: string;
}

export default function LandingPage({
  heroSection,
  highlightsSection,
  socialProofSection,
  problemSection,
  featureCards,
  funnelSection,
  autoEngageSection,
  conversionExplanation,
  demoRequestSection,
  integrationMarketplace,
  faq,
}: Props) {
  const demoRef = useRef<HTMLDivElement | null>(null);
  const { currentLanguage } = useLanguage();
  const { theme } = useTheme();

  const colors = useMemo(
    () => ({
      light: {
        primary: '#E31937',
        background: '#FFFFFF',
        text: '#111827',
        secondary: '#6B7280',
        highlight: '#ECF5FE',
        border: '#E5E7EB',
        hover: '#F9FAFB',
      },
      dark: {
        primary: '#F87171',
        background: '#1F2937',
        text: '#F3F4F6',
        secondary: '#9CA3AF',
        highlight: '#1E3A8A',
        border: '#374151',
        hover: '#111827',
      },
    }),
    []
  );

  const currentColors = theme === 'dark' ? colors.dark : colors.light;

  const handleScrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineText = asText(heroSection?.headline, currentLanguage);
  const highlightText = asText(heroSection?.highlight, currentLanguage);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: currentColors.background, color: currentColors.text }}
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <div style={{ backgroundColor: currentColors.highlight }}>
          <section className="text-center py-10 px-4">
            {highlightText ? (
              <p
                className="text-sm font-medium inline-block px-4 py-1 rounded-full shadow"
                style={{ color: currentColors.primary, backgroundColor: '#FFFFFF' }}
              >
                {highlightText}
              </p>
            ) : null}

            {headlineText ? (
              <h1
                className="text-5xl md:text-6xl font-bold mt-6 mx-auto mb-10 max-w-5xl leading-[1.2]"
                style={{ color: currentColors.text }}
              >
                {headlineText.split(' ').map((word, i) =>
                  (word.toLowerCase() === '9800' || word.toLowerCase() === 'man-days') ? (
                    <span key={`${word}-${i}`} className="text-dmk-red"> {word} </span>
                  ) : (
                    <span key={`${word}-${i}`}> {word} </span>
                  )
                )}
              </h1>
            ) : null}

            <p
              className="text-lg md:text-xl mt-4 max-w-2xl mx-auto"
              style={{ color: currentColors.secondary }}
            >
              {Array.isArray(heroSection?.subheadline) || typeof heroSection?.subheadline === 'object' ? (
                <PortableText value={heroSection?.subheadline} />
              ) : (
                asText(heroSection?.subheadline, currentLanguage)
              )}
            </p>

            <div className="flex justify-center gap-4 mt-10 flex-wrap">
              {heroSection?.primaryCta?.text ? (
                <button
                  type="button"
                  onClick={handleScrollToDemo}
                  className="bg-dmk-red text-white px-6 py-3 rounded-lg shadow hover:bg-dmk-red/90 font-semibold transition"
                >
                  {asText(heroSection?.primaryCta?.text, currentLanguage)}
                </button>
              ) : null}

              {heroSection?.secondaryCta?.text ? (
                heroSection?.secondaryCta?.url ? (
                  <Link
                    href={heroSection.secondaryCta.url}
                    className="px-6 py-3 rounded-lg border transition font-medium"
                    style={{
                      borderColor: currentColors.border,
                    }}
                  >
                    {asText(heroSection.secondaryCta.text, currentLanguage)}
                  </Link>
                ) : (
                  <span
                    className="px-6 py-3 rounded-lg border"
                    style={{ borderColor: currentColors.border }}
                  >
                    {asText(heroSection.secondaryCta.text, currentLanguage)}
                  </span>
                )
              ) : null}
            </div>

            {heroSection?.heroMedia ? (
              <div className="mt-20 max-w-5xl mx-auto">
         <MediaBlock media={heroSection.heroMedia} 
            alt={heroSection.heroMedia?.alt || heroSection.headline}
            />
              </div>
            ) : null}
          </section>
        </div>

        {/* Highlights Section */}
        {Array.isArray(highlightsSection) && highlightsSection.length > 0 ? (
          <div className="py-20">
            <section className="grid md:grid-cols-3 gap-8 text-center px-4 container mx-auto max-w-7xl">
              {highlightsSection.map((item, index) => (
                <div
                  key={index}
                  className="land-card rounded-2xl p-6 shadow-sm"
                  style={{ backgroundColor: theme === 'dark' ? colors.dark.hover : '#FFFFFF' }}
                >
                  <h3 className="text-xl font-semibold text-left" style={{ color: currentColors.text }}>
                    {asText(item?.title, currentLanguage)}
                  </h3>
                  <p className="mt-2 text-left" style={{ color: currentColors.secondary }}>
                    {asText(item?.description, currentLanguage)}
                  </p>
                </div>
              ))}
            </section>
          </div>
        ) : null}

        {/* Social Proof Section */}
        <section className="pt-4 pb-16 px-4">
          <div className="max-w-7xl mx-auto md:flex md:items-start md:gap-12">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="text-center md:text-left mb-8">
                <p className="text-xl font-semibold" style={{ color: currentColors.text }}>
                  {asText(socialProofSection?.blurb, currentLanguage)}
                </p>
              </div>

              {Array.isArray(socialProofSection?.logos) && socialProofSection!.logos!.length > 0 ? (
                <div className="flex justify-center md:justify-start flex-wrap gap-8 mb-6">
                  {socialProofSection!.logos!.map((logo, idx) =>
                    logo?.asset?.url ? (
                      <Image
                        key={idx}
                        src={logo.asset.url}
                        alt={asText(logo?.alt, currentLanguage, 'logo')}
                        width={120}
                        height={60}
                        sizes="120px"
                      />
                    ) : null
                  )}
                </div>
              ) : null}

              {Array.isArray(socialProofSection?.ctaButtons) && socialProofSection!.ctaButtons!.length > 0 ? (
                <div className="mt-4 flex flex-wrap justify-center md:justify-start items-center gap-4">
                  {socialProofSection!.ctaButtons!.map((cta, idx) => {
                    const text = asText(cta?.text, currentLanguage);
                    if (!text) return null;
                    const commonClasses =
                      'px-6 py-3 rounded-lg transition font-medium inline-flex items-center justify-center';

                    if (idx === 0) {
                      return cta?.url ? (
                        <Link
                          key={idx}
                          href={cta.url}
                          className={`${commonClasses} bg-dmk-red text-white shadow hover:bg-dmk-red/90`}
                        >
                          {text}
                        </Link>
                      ) : (
                        <span key={idx} className={`${commonClasses}`} style={{ borderColor: currentColors.border }}>
                          {text}
                        </span>
                      );
                    }

                    return cta?.url ? (
                      <Link
                        key={idx}
                        href={cta.url}
                        className={`${commonClasses} border`}
                        style={{ borderColor: currentColors.border }}
                      >
                        {text}
                      </Link>
                    ) : (
                      <span
                        key={idx}
                        className={`${commonClasses} border`}
                        style={{ borderColor: currentColors.border }}
                      >
                        {text}
                      </span>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {Array.isArray(socialProofSection?.testimonials) && socialProofSection!.testimonials!.length > 0 ? (
              <div className="md:w-1/2 flex flex-col gap-20 items-center">
                {socialProofSection!.testimonials!.map((t, i) => {
                  const quote = asText(t?.quote, currentLanguage);
                  const authorName = asText(t?.authorName, currentLanguage);
                  const authorTitle = asText(t?.authorTitle, currentLanguage);
                  const imgUrl = t?.authorImage?.asset?.url;

                  return (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="relative bg-dmk-red text-white px-6 py-12 rounded-3xl w-full max-w-xl">
                        {quote ? (
                          <p className="text-lg font-semibold leading-relaxed">"{quote}"</p>
                        ) : null}

                        {imgUrl ? (
                          <div className="absolute left-1/2 bottom-[-4em] transform -translate-x-1/2">
                            <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden">
                              <Image
                                src={imgUrl}
                                alt={asText(
                                  t?.authorImage?.alt ?? { en: 'Author image', ta: 'நூலாசிரியர் படம்' },
                                  currentLanguage,
                                  'Author image'
                                )}
                                width={80}
                                height={80}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>

                      {(authorName || authorTitle) && (
                        <div className="mt-14 relative top-8">
                          {authorName ? (
                            <p className="font-semibold" style={{ color: currentColors.text }}>
                              {authorName}
                            </p>
                          ) : null}
                          {authorTitle ? (
                            <p className="text-sm" style={{ color: currentColors.secondary }}>
                              {authorTitle}
                            </p>
                          ) : null}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>

        {/* Other Sections */}
        {featureCards ? <FeatureCards featureCards={featureCards} /> : null}

        {conversionExplanation ? (
          <ConversionExplanation conversionExplanation={conversionExplanation} />
        ) : null}

        {demoRequestSection ? (
          <div ref={demoRef}>
            <DemoSection data={demoRequestSection} />
          </div>
        ) : null}

        {/* Uncomment when you’re ready to render them */}
        {/* {funnelSection?.title && <FunnelSection funnelSection={funnelSection} />} */}
        {/* {integrationMarketplace && <IntegrationMarketplaceSection integrationMarketplace={integrationMarketplace} />} */}
        {/* {autoEngageSection?.headline && <AutoEngageSection autoEngageSection={autoEngageSection} />} */}
        {/* {faq && <FAQ {...faq} />} */}
      </div>
    </div>
  );
}
