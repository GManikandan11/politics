'use client';

import Image from 'next/image';
import Link from 'next/link';
import './landingPage.css';
import ProblemSection from './ProblemSection';
import featureCards from './featureCards';
import FeatureCards from './featureCards';
import FunnelSection from './FunnelSection';
import AutoEngageSection from './AutoEngageSection';
import ConversionExplanation from './ConversionExplanation';
import DemoSection from './DemoSection';
import DebugClient from '../DebugClient';
import { useRef } from 'react';
import type { Media, Feature } from "@/lib/types";
import { PortableText } from '@portabletext/react';
import FAQ from './FAQ';
import IntegrationMarketplaceSection from './IntegrationMarketplaceSection ';


function MediaBlock({ media, alt }: { media: Media; alt: string }) {
  return media?.type === "video" ? (
    <video
      src={media?.url}
      playsInline
      // autoPlay
      // loop
      controls // Optional: show play/pause and volume controls
      className="h-full w-full object-cover rounded-xl"
    />
  ) : (
    <Image
      src={media?.url}
      alt={alt}
      width={500}
      height={300}
      className="rounded-xl"
      priority
    />
  );
}


interface CTA {
  text: string;
  url: string;
}

interface HeroSection {
  highlight: string;
  headline: string;
  subheadline: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  // heroImage?: {
  //   asset: {
  //     url: string;
  //   };
  // };
  heroMedia:Media;
}

interface HighlightItem {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: {
    asset: {
      url: string;
    };
  };
}

interface CTAButton {
  text: string;
  url: string;
}

interface SocialProofSection {
  blurb: string;
  logos: { asset: { url: string } }[];
  testimonials: Testimonial[];
  ctaButtons: CTAButton[];
}


interface FunnelStep {
  label: string;
  description: string;
}

interface FunnelSection {
  title: string;
  subtitle?: string;
  funnelSteps?: FunnelStep[];
  cta?: {
    text: string;
    url: string;
  };
}

interface AutoEngageFeature {
  icon?: string;
  title: string;
  step: string;
  description: string;
  disabled?: boolean;
}

interface AutoEngageMessage {
  step: string;
  text: string;
  tags?: string[];
}

interface PersonaCard {
  name: string;
  title: string;
  location: string;
  imageUrl: string;
  badges?: string[];
}

interface AutoEngageSection {
  label: string;
  headline: string;
  subheadline: string;
  features: AutoEngageFeature[];
  personaCard: PersonaCard;
  messageSteps: AutoEngageMessage[];
}

interface Props {
  heroSection: HeroSection;
  highlightsSection: HighlightItem[];
  socialProofSection: SocialProofSection;
  problemSection: {
    title: string;
    intro: string;
    scenarioOne: {
      name: string;
      points: { pointTitle: string; pointText: string }[];
    };
    scenarioTwo: {
      name: string;
      points: { pointTitle: string; pointText: string }[];
    };
  };
  featureCards: {
    sectionTitle?: string;
    sectionDescription?: string;
    cards: {
      icon?: string;
      title: string;
      description: string;
      number?: string;
    }[];
  };
  conversionExplanation: {
    headline: string;
    subheadline: string;
    image?: {
      asset: {
        url: string;
      };
    };
    bullets: string[];
  };
  demoRequestSection: any;
  faq:any;
  funnelSection: FunnelSection;
  autoEngageSection: AutoEngageSection;
  integrationMarketplace:any;
  // You can extend this interface with more sections (problemSection, solutionSection, etc.)
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
  faq
}: Props) {
   const demoRef = useRef<HTMLDivElement | null>(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div className="space-y-16">
      <DebugClient data={{funnelSection,autoEngageSection,faq}} />
      {/* Hero Section */}
      <div style={{ backgroundColor: "#ecf5fe" }}>
        <section className="text-center py-10 px-4 bg-gradient-to-b from-[#f3f2fc] to-[#eaf0fd]">
          <p className="text-sm font-medium text-[#6941C6] bg-white inline-block px-4 py-1 rounded-full shadow">
            {heroSection?.highlight}
          </p>
          <h1 style={{ lineHeight: '1.2em' }} className="text-5xl md:[font-size:3.7em] font-grotesque font-bold mt-6 text-gray-900 mx-auto mb-10 max-w-5xl leading-[1.2em]">
            {heroSection?.headline.split(' ').map((word, i) =>
              (word.toLowerCase() === '9800' || word.toLowerCase() === "man-days") ? (
                <span key={i} className="text-purple-500"> {word} </span>
              ) : (
                <span key={i}> {word} </span>
              )
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
            {Array.isArray(heroSection?.subheadline) || typeof heroSection?.subheadline === 'object' ? (
              <PortableText value={heroSection.subheadline} />
            ) : (
              <>{heroSection?.subheadline}</>
            )}
            {/* {heroSection?.subheadline} */}
          </p>
          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            {/* <Link href={heroSection?.primaryCta.url}> */}
              <div className='cursor-pointer'>
              <span
              onClick={scrollToDemo}
              className="bg-[#3A8EF6] text-white px-6 py-3 rounded-lg shadow hover:bg-[#327fe4] font-semibold transition bg-secondary">
                {heroSection?.primaryCta.text}
              </span>
              </div>
            {/* </Link> */}
            {heroSection?.secondaryCta && (
              <Link href={heroSection?.secondaryCta.url}>
                <span className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium">
                  {heroSection.secondaryCta.text}
                </span>
              </Link>
            )}
          </div>
          {heroSection?.heroMedia && (
          <div className="mt-20 max-w-5xl mx-auto">
            <MediaBlock media={heroSection.heroMedia} alt={heroSection.headline} />
          </div>
        )}
        </section>
      </div>
      {/* Highlights Section */}
      {highlightsSection?.length > 0 && (
        <div className='py-20' style={{ backgroundColor: '#fafafa', margin: '0px' }}>
          <section className="grid md:grid-cols-3 gap-8 text-center px-4 container mx-auto px-4 max-w-7xl">
            {highlightsSection.map((item, index) => (
              <div key={index}
                className='land-card'
              >
                <h3 className="text-xl font-semibold  font-grotesque text-left">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-left">{item.description}</p>
              </div>
            ))}
          </section>
        </div>
      )}

      {/* Social Proof Section */}
      <section className="  pt-4 pb-16 px-4">
        <div className="max-w-7xl mx-auto md:flex md:items-start md:gap-12">
          {/* Left Column – Blurb, Logos, Buttons */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="text-center md:text-left mb-8">
              <p className=" dark:text-white text-xl font-semibold  font-grotesque">{socialProofSection?.blurb}</p>
            </div>

            {/* Logos */}
            {socialProofSection?.logos?.length > 0 && (
              <div className="flex justify-center md:justify-start flex-wrap gap-8 mb-6"
                style={{ gridRowGap: '0px' }}
              >
                {socialProofSection.logos.map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo.asset.url}
                    alt={`Logo ${idx}`}
                    width={120}
                    height={60}
                    className=""
                  />
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            {socialProofSection?.ctaButtons?.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center md:justify-start items-center gap-4"
                style={{ gridRowGap: '38px' }}
              >
                {socialProofSection.ctaButtons.map((cta, idx) => (
                  cta.url ? (
                    <Link key={idx} href={cta?.url} passHref>
                      <span className={`${idx === 0 ? 'bg-[#3A8EF6] text-white px-6 py-3 rounded-lg shadow hover:bg-[#327fe4] font-semibold transition bg-secondary' : 'px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium'} cursor-pointer`}>
                        {cta.text}
                      </span>
                    </Link>
                  ) : (
                    <span
                      key={idx}
                      className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium"
                    >
                      {cta.text}
                    </span>
                  )
                ))}
              </div>
            )}

          </div>

          {/* Right Column – Testimonials */}
          {socialProofSection?.testimonials?.length > 0 && (
            <div className="md:w-1/2 flex flex-col gap-20 items-center">
              {socialProofSection.testimonials.map((t, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Testimonial Card */}
                  <div className="relative  bg-secondaryDark text-white px-6 py-12 rounded-3xl w-full max-w-xl">
                    {/* Quote */}
                    <p className="text-lg font-semibold leading-relaxed">
                      “{t.quote}”
                    </p>

                    {/* Floating Author Image */}
                    {t.authorImage?.asset?.url && (
                      <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2"
                        style={{
                          bottom: "-4em"
                        }}
                      >
                        <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden"
                          style={{
                            border: '10px solid #fff',
                            width: '85px',
                            height: '85px',
                          }}
                        >
                          <Image
                            src={t.authorImage.asset.url}
                            alt={t.authorName}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Author Info Below */}
                  <div className="mt-14 relative top-8">
                    <p className="font-semibold text-gray-900 dark:text-white">{t.authorName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.authorTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <ProblemSection {...problemSection} />

      {featureCards &&
        <>
          {/* <div className="triangle-bottom m-auto" style={{ margin: 'auto' }}></div> */}
          <FeatureCards featureCards={featureCards} />
        </>
      }

      {conversionExplanation && (
        <ConversionExplanation conversionExplanation={conversionExplanation} />
      )}
      {demoRequestSection && (
        <div
        ref={demoRef}
        >
          <DemoSection
          data={demoRequestSection} />
        </div>
      )}
      {/* {funnelSection?.title && <FunnelSection funnelSection={funnelSection} />}
      {integrationMarketplace && <IntegrationMarketplaceSection integrationMarketplace={integrationMarketplace} />}
      {autoEngageSection?.headline && <AutoEngageSection autoEngageSection={autoEngageSection} />} */}
    </div>
    {/* {faq && <FAQ {...faq} /> } */}
    </>
  );
}
