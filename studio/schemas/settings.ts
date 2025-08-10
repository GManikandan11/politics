import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  // only one settings document
//   __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({name: 'title', type: 'string', title: 'Site title'}),
    defineField({name: 'description', type: 'text', title: 'Description'}),
    defineField({name: 'logo', type: 'image', title: 'Logo', options: {hotspot: true}}),
  ],
})
