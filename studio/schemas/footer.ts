import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          name: 'footerColumn',
          type: 'object',
          title: 'Column',
          fields: [
            { name: 'title', type: 'string', title: 'Heading' },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                defineField({
                  name: 'link',
                  type: 'object',
                  fields: [
                    { name: 'label', type: 'string', title: 'Label' },
                      {
                        name: 'link',
                        title: 'Link Path',
                        type: 'string',
                        description: 'Enter a relative path (e.g., "/home")',
                        validation: Rule => Rule.regex(/^\/.+/, 'Must start with "/"'),
                        },
                    // { name: 'href', type: 'url', title: 'URL' },
                  ],
                }),
              ],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Icons',
      type: 'array',
      of: [
        defineField({
          name: 'social',
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform (e.g. Twitter)' },
            { name: 'href', type: 'url', title: 'URL' },
            {
              name: 'icon',
              type: 'image',
              title: 'Icon Image',
              options: { hotspot: true },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'appLinks',
      title: 'Mobile App Links',
      type: 'array',
      of: [
        defineField({
          name: 'app',
          type: 'object',
          fields: [
            { name: 'os', type: 'string', title: 'OS (android / ios)' },
            { name: 'href', type: 'url', title: 'Store URL' },
            {
              name: 'icon',
              type: 'image',
              title: 'Badge Image',
              options: { hotspot: true },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: `© ${new Date().getFullYear()} My Company, Inc. All rights reserved.`,
    }),
  ],
})
