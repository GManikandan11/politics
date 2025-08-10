// ./schemas/blogCards.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name:  'blogCards',
  title: 'Blog Cards (home section)',
  type:  'document',

  fields: [
     defineField({
      name: 'sectionLabel',
      title: 'Tiny Label (e.g. “Blog Cards”)',
      type: 'string',
      initialValue: 'blogCards',
      validation: (Rule) => Rule.max(24),
      // fieldset: '',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
      // fieldset: 'faq',
    }),
    defineField({
      name: 'subhead',
      title: 'Sub-headline',
      type: 'text',
      rows: 2,
      // fieldset: 'faq',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (R) => R.required().max(120),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (R) => R.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Section published date',
      type:  'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    /* ─────── exactly three cards ─────── */
    defineField({
      name:  'cards',
      title: 'Cards (exactly 3)',
      type:  'array',
      validation: (R) => R.required().min(3).max(3),
      of: [
        {
          type:   'object',
          fields: [
            {
              name:  'image',
              type:  'image',
              title: 'Hero image',
              options: {hotspot: true},
            },
            { name: 'excerpt',    type: 'text',   title: 'Short summary', rows: 3 },
            { name: 'categories', type: 'array',  title: 'Tags',
              of: [{type: 'string'}],
              validation: (R) => R.max(6),
            },
          ],
          preview: {
            select: {title: 'excerpt', media: 'image'},
          },
        },
      ],
    }),
  ],
})
