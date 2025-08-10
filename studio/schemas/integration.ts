// /schemas/integration.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'integration',
  title: 'Integration Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'icon',
      title: 'Icon SVG',
      type: 'string',
      description: 'Paste raw SVG markup or icon name',
    }),
    defineField({
      name: 'media',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({ scheme: ['http', 'https'], allowRelative: false }),
    }),
  ],
})
