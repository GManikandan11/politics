import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
     defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
      defineField({
      name: 'heroTitle_2',
      title: 'Hero Title 2',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleBlack_1',
      title: 'Hero Title (Black Part)',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleBlack_2',
      title: 'Hero Title (Black Part)',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleGreen',
      title: 'Hero Title',
      type: 'string',
    }),
    //     defineField({
    //   name: 'heroTitleGreen_2',
    //   title: 'Hero Title (Green Part)',
    //   type: 'string',
    // }),
    //     defineField({
    //   name: 'heroTitleGreen_3',
    //   title: 'Hero Title',
    //   type: 'string',
    // }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Highlight Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Call-to-Action Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Button Label', type: 'string' },
            { name: 'link', title: 'Link', type: 'url' },
            { name: 'style', title: 'Style', type: 'string' }, // e.g. 'primary', 'whatsapp'
          ],
        },
      ],
    }),
    defineField({
      name: 'heroModernText',
      title: 'HeroModern Text',
      type: 'string',
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
    })
  ],
});
