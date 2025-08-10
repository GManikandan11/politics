import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials (home section)',
  type: 'document',

  fields: [
    /* ───── Heading copy ───── */
    defineField({
      name: 'sectionLabel',
      title: 'Tiny label',
      type: 'string',
      initialValue: 'Testimonials',
      validation: (R) => R.max(24),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'What our users say',
      validation: (R) => R.required().max(120),
    }),
    defineField({
      name: 'subhead',
      title: 'Sub-headline',
      type: 'text',
      rows: 2,
    }),

    /* ───── Slide array (3-6 items) ───── */
    defineField({
      name: 'slides',
      title: 'Slides (3–6)',
      type: 'array',
      validation: (R) => R.required().min(3).max(6),
      of: [
        {
          type: 'object',
          fields: [
            {name: 'avatar',    title: 'Avatar', type: 'image', options: {hotspot: true}},
            {name: 'name',      title: 'Name',   type: 'string', validation: (R) => R.required()},
            {name: 'role',      title: 'Role',   type: 'string'},
            {name: 'rating',    title: 'Stars (1-5)', type: 'number', validation: (R) => R.min(1).max(5)},
            {name: 'quote',     title: 'Quote',  type: 'text',  rows: 3, validation: (R) => R.required()},
          ],
          preview: {
            select: {title: 'name', subtitle: 'role', media: 'avatar'},
          },
        },
      ],
    }),
  ],
})
