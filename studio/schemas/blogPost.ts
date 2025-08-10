export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {name: 'publishedAt', title: 'Published At', type: 'datetime'},
    {name: 'mainImage', title: 'Main Image', type: 'image', options: {hotspot: true}},
    {name: 'excerpt', title: 'Excerpt', type: 'text'},
    {name: 'body', title: 'Body', type: 'blockContent'},
        {
      name: 'faq',
      title: 'FAQ Section',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
