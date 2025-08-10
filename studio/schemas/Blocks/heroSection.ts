// /schemas/Blocks/heroSection.ts
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
     defineField({
      name: 'heroTitle',
      title: 'Hero Top Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Top Description',
      type: 'text',
    }),
    defineField({
      name: 'tag',
      title: 'Top Label Tag',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Main Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'richIntro',
      title: 'Intro Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtext',
      title: 'CTA Description',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Hero Illustration (Right)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
