'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getText } from '@/common/getText';
import { useLanguage } from '@/contexts/LanguageContext';

type LinkItem = { label: { en: string; ta: string } | string; link?: string };
type Column = { title: { en: string; ta: string } | string; links: LinkItem[] };
type Social = { platform: { en: string; ta: string } | string; href?: string; iconUrl?: string };
type AppLink = { os: { en: string; ta: string } | string; href?: string; iconUrl?: string };

type FooterData = {
  columns?: Column[];
  socialLinks?: Social[];
  appLinks?: AppLink[];
  copyright?: { en: string; ta: string } | string;
};

interface FooterProps {
  footer: FooterData;
}

// UI-only strings (headings)
const languageContent: Record<string, { followUs: string; mobileApp: string }> = {
  en: { followUs: 'Follow us', mobileApp: 'Mobile App' },
  ta: { followUs: 'எங்களைப் பின்தொடரவும்', mobileApp: 'மொபைல் பயன்பாடு' },
  default: { followUs: 'Follow us', mobileApp: 'Mobile App' },
};

export default function Footer({ footer }: FooterProps) {
  const { currentLanguage } = useLanguage();   // 🔥 uses context
  const lang = currentLanguage;

  const {
    columns = [],
    socialLinks = [],
    appLinks = [],
    copyright = '',
  } = footer;

  const validColumns = columns.filter((col) => col.links?.length > 0);
  const validSocial = socialLinks.filter((s) => s.href && s.iconUrl);
  const validApps = appLinks.filter((a) => a.href && a.iconUrl);

  const content = languageContent[lang] || languageContent.default;

  return (
    <footer className="border-t pt-8 pb-6 bg-white text-zinc-700 dark:bg-gray-900 text-black dark:text-white bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Columns */}
        {validColumns.map((col, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-3">
              {getText(col.title, lang)}
            </h3>
            <ul className="space-y-2">
              {col.links
                .filter((link) => link.link)
                .map((link, i) => (
                  <li key={i}>
                    <Link href={link.link!} className="hover:underline">
                      {getText(link.label, lang)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        {/* Social + Apps */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{content.followUs}</h3>
          <div className="flex space-x-4">
            {validSocial.map((s, i) => (
              <Link
                key={i}
                href={s.href!}
                aria-label={getText(s.platform, lang)}
                className="transition-transform hover:scale-110"
              >
                <div className="p-2 bg-gray-100 rounded-full dark:bg-gray-800">
                  {s.iconUrl && (
                    <Image
                      src={s.iconUrl}
                      alt={getText(s.platform, lang)}
                      width={24}
                      height={24}
                      unoptimized
                      className="filter grayscale hover:grayscale-0 transition-all"
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>

          <h3 className="mt-6 text-lg font-semibold mb-3">{content.mobileApp}</h3>
          <div className="flex space-x-4">
            {validApps.map((a, i) => (
              <Link
                key={i}
                href={a.href!}
                aria-label={getText(a.os, lang)}
                className="transition-transform hover:scale-105"
              >
                <div className="p-2 bg-gray-100 rounded-lg dark:bg-gray-800">
                  {a.iconUrl && (
                    <Image
                      src={a.iconUrl}
                      alt={getText(a.os, lang)}
                      width={32}
                      height={32}
                      unoptimized
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      {copyright && (
        <div className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          {getText(copyright, lang)}
        </div>
      )}
    </footer>
  );
}
