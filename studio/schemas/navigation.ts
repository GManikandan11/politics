import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            {
              name: 'link',
              title: 'Link Path',
              type: 'string',
              description: 'Enter a relative path (e.g., "/home")',
              validation: Rule => Rule.regex(/^\/.+/, 'Must start with "/"'),
            },
            {
              name: 'hasDropdown',
              title: 'Enable Dropdown',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'dropdownItems',
              title: 'Dropdown Items',
              type: 'array',
              hidden: ({ parent }) => !parent?.hasDropdown,
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', title: 'Dropdown Item Title', type: 'string' },
                    {
                      name: 'link',
                      title: 'Dropdown Item Link',
                      type: 'string',
                      validation: Rule => Rule.required().regex(/^\/.+/, 'Must start with "/"'),
                    },
                  ],
                  preview: {
                    select: { title: 'title', subtitle: 'link' },
                  },
                },
              ],
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'link' },
          },
        },
      ],
    }),
    defineField({
      name: 'themeToggle',
      title: 'Enable Theme Toggle',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
