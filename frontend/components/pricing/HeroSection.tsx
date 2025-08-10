'use client';
import React from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

interface HeroProps {
  heroSection: {
      heroTitle:string;
    heroDescription:string;
    tag?: string;
    title: string;
    richIntro?: any;
    ctaLabel?: string;
    ctaSubtext?: string;
    ctaLink?: string;
    backgroundColor?: string; // e.g., #1d0b42
    textColor?: string;       // e.g., #ffffff
    buttonColor?: string;     // e.g., #3993ff
    image?: {
      asset?: {
        url?: string;
      };
    };
  };
}

export default function HeroSection({ heroSection }: HeroProps) {
  const {
    heroTitle,
    heroDescription,
    tag,
    title,
    richIntro,
    ctaLabel,
    ctaSubtext,
    ctaLink,
    backgroundColor = '#1e0b42',
    textColor = '#ffffff',
    buttonColor = '#3993ff',
    image
  } = heroSection;

  return (
    <div style={{backgroundColor: '#f7f2ff'}} className='py-10 mt-10'>
              <h2
              className="mx-auto mb-10 max-w-3xl text-5xl md:text-[64px] font-grotesque font-bold leading-tight text-center">
        {heroTitle}
      </h2>
      <h6 className='text-gray-600 max-w-xl mx-auto mb-8 text-base'>
        {heroDescription}
      </h6>
   <section
  className="container mx-auto px-4 max-w-7xl relative rounded-3xl shadow-xl overflow-hidden px-6 py-12 md:px-16 md:py-20 max-w-[1440px] mx-auto my-10"
  style={{ backgroundColor }}
>
  <div className="grid md:grid-cols-2 items-center gap-8">
    {/* LEFT SIDE - TEXT */}
    <div className="flex flex-col justify-center gap-10 max-w-xl mx-auto md:mx-0" style={{ color: textColor }}>
      {tag && (
        <span className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 bg-purple-500 text-white rounded-full w-32">
          <svg fill='#ffff' height='20px' width='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/></g></svg>{tag}
        </span>
      )}

      <h2 className="text-4xl md:text-4xl font-bold leading-tight font-grotesque text-left" style={{ color: textColor }}>
        {title}
      </h2>

      {richIntro && (
        <div className="text-lg leading-relaxed font-inter text-white/90 text-left">
          <PortableText value={richIntro} />
        </div>
      )}

      {ctaLabel && (
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={ctaLink || '#'}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-600 transition"
          >
            {ctaLabel}
          </a>
          {ctaSubtext && (
            <p className="text-sm text-white/80">{ctaSubtext}</p>
          )}
        </div>
      )}
    </div>

    {/* RIGHT SIDE - IMAGE */}
    {image?.asset?.url && (
      <div className="relative mx-auto md:mx-0 flex justify-center " >
        <Image
          src={image.asset.url}
          alt="Hero Visual"
          width={600}
          height={400}
          className="object-contain"
          style={{borderRadius:'10px'}}
        />
      </div>
    )}
  </div>
</section>
</div>
  );
}
