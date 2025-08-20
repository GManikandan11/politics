// lib/i18n/config.ts
// 
export const locales = ['en', 'ta'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames = {
  en: 'English',
  ta: 'தமிழ்',
  // hi: 'हिन्दी'
};