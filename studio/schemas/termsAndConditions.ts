// schemas/termsAndConditions.ts
import { Rule } from 'sanity'

const termsAndConditions = {
  name: 'termsAndConditions',
  title: 'Terms and Conditions',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'updatedDate',
      title: 'Last Updated Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule: Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      updatedDate: 'updatedDate'
    },
    prepare({ title, updatedDate }: { title: string; updatedDate: string }) {
      return {
        title,
        subtitle: `Updated on ${new Date(updatedDate).toLocaleDateString()}`
      }
    }
  }
}

export default termsAndConditions
