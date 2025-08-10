// import { defineType } from 'sanity'
// import pageSettings from './pageSettings' // make sure this file exists and is registered in schemaTypes

// export default defineType({
//   name: 'seopage',
//   title: 'SEO',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       title: 'Page Title',
//       type: 'string',
//     },
//     {
//       name: 'slug',
//       title: 'Slug / URL Path',
//       type: 'slug',
//       options: {
//         source: (doc: any) => doc.title,
//         maxLength: 96,
//       },
//     },
//     {
//       name: 'seo',
//       title: 'SEO & Page Settings',
//       type: 'pageSettings', // ← this references your reusable object schema
//     },
//     {
//       name: 'content',
//       title: 'Page Content',
//       type: 'array',
//       of: [{ type: 'block' }],
//     },
//     {
//       name: 'featuredImage',
//       title: 'Hero / Featured Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//     },
//   ],
// })
