'use client';
import DebugClient from '@/components/DebugClient';
import { useEffect } from 'react';

interface PixelTrackerProps {
  slug: string;
}

export default function PixelTracker({ slug }: PixelTrackerProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const fbq = (window as any).fbq;

    fbq('track', 'ViewContent', {
      value: 5,
      currency: 'INR'
    });
    console.log('ONESS')

      // Set up time-on-page event
      // const timer = setTimeout(() => {
      //   fbq('trackCustom', 'time_on_page_10s');
      // }, 10000);

      // Set up scroll-depth tracking
      let scrollFired = false;
      const onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        const scrollPercent = scrollPos / document.documentElement.scrollHeight;
        if (scrollPercent >= 0.25 && !scrollFired) {
          // fbq('trackCustom', 'page_scroll_25');
          scrollFired = true;
        }
      };

      window.addEventListener('scroll', onScroll);

      // Cleanup
      return () => {
        // clearTimeout(timer);
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, [slug]);

  return null;
}
