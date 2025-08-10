// /schemas/marketing.ts
import { defineType, defineField } from 'sanity'
// import _media from './Blocks/media'
import './Blocks/media'  

export default defineType({
  name: 'marketingPage',
  title: 'Marketing Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'features', title: 'Feature Grid' },
    { name: 'cmsFeatures', title: 'CMS Feature Grid' },
    { name: 'grid_3', title: 'Grid 3' },
  ],
  fields: [
    /* ───── Hero ───── */
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'subhead',
      title: 'Sub-headline',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroMedia',
      title: 'Hero Media',
      type: 'media',
      group: 'features',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA URL',
      type: 'url',
      group: 'hero',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),

    /* ───── Feature Grid ───── */
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'body', title: 'Description', type: 'text', rows: 4 },
            {
              name: 'icon',
              title: 'Icon SVG',
              type: 'string',
              description: 'Paste raw SVG markup or an icon name',
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'eyebrow' },
          },
        },
      ],
    }),

      /* ───── CMS Grid ───── */
     defineField({
      name: 'cmsMedia',
      title: 'CMS Media',
      type: 'media',
      group: 'cmsFeatures',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cmsFeatures',
      title: 'CMS Features',
      type: 'array',
      group: 'cmsFeatures',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'body', title: 'Description', type: 'text', rows: 4 },
            {
              name: 'icon',
              title: 'Icon SVG',
              type: 'string',
              description: 'Paste raw SVG markup or an icon name',
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'eyebrow' },
          },
        },
      ],
    }),
 /* ───── Grid 3───── */
  defineField({
      name: 'grid_3_Media',
      title: 'Grid 3 media',
      type: 'media',
      group: 'grid_3',
      options: { hotspot: true },
    }),
    defineField({
      name: 'grid_3',
      title: 'Grid 3',
      type: 'array',
      group: 'grid_3',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'body', title: 'Description', type: 'text', rows: 4 },
            {
              name: 'icon',
              title: 'Icon SVG',
              type: 'string',
              description: 'Paste raw SVG markup or an icon name',
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'eyebrow' },
          },
        },
      ],
    }),
  ],
})
