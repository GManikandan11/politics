'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LandingPage from '@/components/landingPage/LandingPage';
import DebugClient from '@/components/DebugClient';
import { client } from '@/sanity/client';
import { LANDING_PAGE_BASE_QUERY } from '@/lib/landingpage/queries';

// If you have concrete types, replace `any` with your LandingPage type
interface LandingPageDoc {
  [key: string]: any;
}
interface HomePageWrapperProps {
  initialData: {
    landingPage: LandingPageDoc | null;
    language?: string; // not used for fetching anymore, kept for compatibility
  };
}

/**
 * Fetches the landing page ONCE (slug="home") and then
 * switches localized text on the client without refetching.
 */
export default function HomePageWrapper({ initialData }: HomePageWrapperProps) {
  const { currentLanguage } = useLanguage();

  const [data, setData] = useState<{ landingPage: LandingPageDoc | null }>(
    { landingPage: initialData?.landingPage ?? null }
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(!initialData?.landingPage);

  // Helper to read localized fields like { en: "...", ta: "...", ... }
  const getLocalizedContent = useCallback(
    (content: Record<string, any> | null | undefined) => {
      if (!content) return null;
      return content[currentLanguage] ?? content.en ?? null;
    },
    [currentLanguage]
  );

  // Transform only the fields you actually localize
  const transformedData = useMemo(() => {
    const lp = data.landingPage;
    if (!lp) return null;

    const hero = lp.heroSection
      ? {
          ...lp.heroSection,
          headline: getLocalizedContent(lp.heroSection.headline),
          highlight: getLocalizedContent(lp.heroSection.highlight),
          subheadline: getLocalizedContent(lp.heroSection.subheadline),
          primaryCta: lp.heroSection.primaryCta
            ? {
                ...lp.heroSection.primaryCta,
                text: getLocalizedContent(lp.heroSection.primaryCta.text),
              }
            : null,
          secondaryCta: lp.heroSection.secondaryCta
            ? {
                ...lp.heroSection.secondaryCta,
                text: getLocalizedContent(lp.heroSection.secondaryCta.text),
              }
            : null,
        }
      : null;

    // Example for highlights; add other sections if you store them localized
    const highlights = Array.isArray(lp.highlightsSection)
      ? lp.highlightsSection.map((h: any) => ({
          ...h,
          title: getLocalizedContent(h?.title) ?? h?.title ?? null,
          description: getLocalizedContent(h?.description) ?? h?.description ?? null,
        }))
      : lp.highlightsSection;

    const socialProof = lp.socialProofSection
      ? {
          ...lp.socialProofSection,
          testimonials: Array.isArray(lp.socialProofSection.testimonials)
            ? lp.socialProofSection.testimonials.map((t: any) => ({
                ...t,
                quote: getLocalizedContent(t?.quote) ?? t?.quote ?? null,
              }))
            : lp.socialProofSection.testimonials,
          ctaButtons: Array.isArray(lp.socialProofSection.ctaButtons)
            ? lp.socialProofSection.ctaButtons.map((b: any) => ({
                ...b,
                text: getLocalizedContent(b?.text) ?? b?.text ?? null,
              }))
            : lp.socialProofSection.ctaButtons,
        }
      : null;

    const conversion = lp.conversionExplanation
      ? {
          ...lp.conversionExplanation,
          subheadline:
            getLocalizedContent(lp.conversionExplanation.subheadline) ??
            lp.conversionExplanation.subheadline ??
            null,
          // If bullets are localized as object {en:[], ta:[]}, handle here:
          bullets:
            (lp.conversionExplanation.bullets &&
              (lp.conversionExplanation.bullets[currentLanguage] ??
                lp.conversionExplanation.bullets.en ??
                lp.conversionExplanation.bullets)) ||
            lp.conversionExplanation.bullets,
        }
      : null;

    return {
      ...lp,
      heroSection: hero,
      highlightsSection: highlights,
      socialProofSection: socialProof,
      conversionExplanation: conversion,
    };
  }, [data.landingPage, getLocalizedContent, currentLanguage]);

  // Fetch ONCE if we don't already have the doc.
  // Do NOT depend on currentLanguage (localization is client-only).
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const landingPage = await client.fetch<LandingPageDoc | null>(
        LANDING_PAGE_BASE_QUERY,
        { slug: 'home' }
      );

      if (!landingPage) {
        throw new Error('Landing page data not found');
      }
      setData({ landingPage });
    } catch (err: any) {
      console.error('Error fetching landing page:', err);
      setError(err?.message ?? 'Failed to load page');
      if (!data.landingPage) setData({ landingPage: null });
    } finally {
      setIsLoading(false);
    }
  }, [data.landingPage]);

  useEffect(() => {
    let mounted = true;
    // only fetch if we have nothing yet
    if (!data.landingPage) {
      (async () => {
        if (!mounted) return;
        await fetchData();
      })();
    }
    return () => {
      mounted = false;
    };
  }, [data.landingPage, fetchData]);

  // Loading state (first load only)
  if (isLoading && !data.landingPage) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg inline-block">
          <h2 className="font-bold">Error loading page</h2>
          <p className="mt-1">{error}</p>
          <p className="text-sm text-red-500 mt-2">
            If this persists, check your Sanity CORS settings and browser console.
          </p>
          <button
            onClick={() => fetchData()}
            className="mt-3 px-4 py-2 bg-red-100 hover:bg-red-200 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // No data state
  if (!data?.landingPage) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="bg-yellow-50 text-yellow-700 p-4 rounded-lg">
          No landing page data available. Please check:
          <ul className="text-left mt-2 text-sm list-disc list-inside">
            <li>Sanity project configuration</li>
            <li>CORS settings in Sanity dashboard</li>
            <li>Document exists with slug "home"</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="dark:bg-background">
        <DebugClient data={{ currentLanguage, data }} />
        {transformedData ? (
          <LandingPage {...transformedData} currentLanguage={currentLanguage} />
        ) : (
          <div className="text-center p-8">
            <p>Data transformation failed. Please check the console.</p>
          </div>
        )}
      </main>
    </div>
  );
}
