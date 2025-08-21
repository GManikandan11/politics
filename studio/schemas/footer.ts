import { defineField, defineType } from 'sanity'

// Define the localized string type
const localeString = {
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'string'
    },
    {
      title: 'Tamil',
      name: 'ta',
      type: 'string'
    }
  ]
}

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
            { 
              name: 'title', 
              type: 'localeString', 
              title: 'Heading' 
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                defineField({
                  name: 'link',
                  type: 'object',
                  fields: [
                    { 
                      name: 'label', 
                      type: 'localeString', 
                      title: 'Label' 
                    },
                    {
                      name: 'link',
                      title: 'Link Path',
                      type: 'string',
                      description: 'Enter a relative path (e.g., "/home")',
                      validation: Rule => Rule.regex(/^\/.+/, 'Must start with "/"'),
                    },
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
            { 
              name: 'platform', 
              type: 'localeString', 
              title: 'Platform (e.g. Twitter)' 
            },
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
            { 
              name: 'os', 
              type: 'localeString', 
              title: 'OS (android / ios)' 
            },
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
      type: 'localeString',
      initialValue: {
        en: `© ${new Date().getFullYear()} My Company, Inc. All rights reserved.`,
        ta: `© ${new Date().getFullYear()} என் நிறுவனம், Inc. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`
      }
    }),
  ],
})