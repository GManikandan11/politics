// sanity/schemas/localeString.ts
import { locales, localeNames } from '../../frontend/lib/i18n/config';

export default {
  name: 'localeString',
  type: 'object',
  fields: locales.map((locale) => ({
    name: locale,
    title: localeNames[locale],
    type: 'string'
  }))
};