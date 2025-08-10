import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gettingStarted',
  title: 'Getting Started Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
     defineField({
      name: 'installHeading',
      title: 'Install Heading',
      type: 'string',
    }),
     defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepTitle', title: 'Step Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'code', title: 'Command / Code Snippet', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'marqueeLogos',
      title: 'Marquee Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'url',
    }),
  ],
});
