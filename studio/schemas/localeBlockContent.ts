// schemas/localeBlockContent.ts
export default {
  name: 'localeBlockContent',
  type: 'object',
  title: 'Localized Block Content',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'blockContent'
    },
    {
      name: 'ta',
      title: 'Tamil',
      type: 'blockContent'
    }
  ]
};