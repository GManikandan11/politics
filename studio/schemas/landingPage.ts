import { defineType } from 'sanity';
import pageSettings from './pageSettings'; // Ensure this file exists and is exported

export default defineType({
  name: 'landingPage',
  title: 'SEO',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug / URL Path',
      type: 'slug',
      options: {
        source: (doc: any) => doc.title,
        maxLength: 96,
      },
    },
    {
      name: 'seo',
      title: 'SEO & Page Settings',
      type: 'pageSettings', // this must match the schema name in pageSettings.ts
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }, // to allow image blocks
      ],
    },
    {
      name: 'featuredImage',
      title: 'Hero / Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
});
