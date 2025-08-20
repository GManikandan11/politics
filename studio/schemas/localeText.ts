// schemas/localeText.ts
export default {
  name: 'localeText',
  type: 'object',
  title: 'Localized Text',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 3
    },
    {
      name: 'ta',
      title: 'Tamil',
      type: 'text',
      rows: 3
    }
  ]
};