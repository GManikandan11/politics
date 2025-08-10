import { defineType, defineField } from 'sanity';
import './Blocks/media'  

export default defineType({
  name: 'solutionPage',
  title: 'Solution Page',
  type: 'document',

  // ← Declare your three grid groups here:
  groups: [
    { name: 'grid_1', title: 'Grid 1' },
    { name: 'grid_2', title: 'Grid 2' },
    { name: 'grid_3', title: 'Grid 3' },
    { name: 'grid_4', title: 'Grid 4' },
    { name: 'grid_5', title: 'Grid 5' },
    {name : 'faq' , title:'FAQ'}

  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
     defineField({
      name: 'title_2',
      title: 'Page Title',
      type: 'string',
    //   validation: (Rule) => Rule.required(),
    }),
     defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    // … your existing `solutions` + `seoDescription` …

    // ─── Grid 1 ───
    defineField({
      name: 'grid_1_Media',
      title: 'Grid 1 Media',
      type: 'image',
      options: { hotspot: true },
      group: 'grid_1',
    }),
    defineField({
      name: 'grid_1',
      title: 'Grid 1 Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title',   title: 'Title',     type: 'string' },
            { name: 'eyebrow', title: 'Eyebrow',   type: 'string' },
            { name: 'body',    title: 'Body',      type: 'text',   rows: 4 },
            { name: 'icon',    title: 'Icon SVG',  type: 'string' },
                   {
          name: 'ctwaLabel',
          title: 'CTA Label',
          type: 'string',
          description: 'Button or link label, e.g., "Chat Now"',
        },
              {
          name: 'ctwaLink',
          title: 'WhatsApp Link',
          type: 'url',
          description: 'Full WhatsApp URL, e.g., https://wa.me/15551234567',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
            allowRelative: false,
          }),
        },
          ],
          preview: { select: { title: 'title', subtitle: 'eyebrow' } },
        },
      ],
      group: 'grid_1',
    }),
        defineField({
          name: 'items',
          title: 'Questions & Answers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'question', title: 'Question', type: 'string'},
                {name: 'answer', title: 'Answer', type: 'text', rows: 4}             
              ],
              preview: {select: {title: 'question'}},
            },
          ],
          validation: (Rule) => Rule.min(1),
        group: 'faq',    
        }),

    // ─── Grid 2 ───
    defineField({
      name: 'grid_2_Media',
      title: 'Grid 2 Media',
      type: 'image',
      options: { hotspot: true },
      group: 'grid_2',
    }),
    defineField({
      name: 'grid_2',
      title: 'Grid 2 Content',
      type: 'array',
      of: [
           {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'body', title: 'Description', type: 'text', rows: 4 },
            {
              name: 'icon',
              title: 'Icon SVG',
              type: 'string',
              description: 'Paste raw SVG markup or an icon name',
            },
              {
          name: 'ctwaLabel',
          title: 'CTA Label',
          type: 'string',
          description: 'Button or link label, e.g., "Chat Now"',
        },
              {
          name: 'ctwaLink',
          title: 'WhatsApp Link',
          type: 'url',
          description: 'Full WhatsApp URL, e.g., https://wa.me/15551234567',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
            allowRelative: false,
          }),
        },
          ],
          preview: {
            select: { title: 'title', subtitle: 'eyebrow' },
          },
        },
      ],
      group: 'grid_2',
    }),

    // ─── Grid 3 ───
    defineField({
      name: 'grid_3_Media',
      title: 'Grid 3 Media',
      type: 'image',
      options: { hotspot: true },
      group: 'grid_3',
    }),
    defineField({
      name: 'grid_3',
      title: 'Grid 3 Content',
      type: 'array',
      of: [
           {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'body', title: 'Description', type: 'text', rows: 4 },
            {
              name: 'icon',
              title: 'Icon SVG',
              type: 'string',
              description: 'Paste raw SVG markup or an icon name',
            },
              {
          name: 'ctwaLabel',
          title: 'CTA Label',
          type: 'string',
          description: 'Button or link label, e.g., "Chat Now"',
        },
              {
          name: 'ctwaLink',
          title: 'WhatsApp Link',
          type: 'url',
          description: 'Full WhatsApp URL, e.g., https://wa.me/15551234567',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
            allowRelative: false,
          }),
        },
          ],
          preview: {
            select: { title: 'title', subtitle: 'eyebrow' },
          },
        },
      ],
      group: 'grid_3',
    }),
        // ─── Grid 4 ───
    defineField({
      name: 'grid_4_Media',
      title: 'Grid 4 Media',
      type: 'image',
      options: { hotspot: true },
      group: 'grid_4',
    }),
    defineField({
      name: 'grid_4',
      title: 'Grid 4 Content',
      type: 'array',
      of: [
           {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'body', title: 'Description', type: 'text', rows: 4 },
            {
              name: 'icon',
              title: 'Icon SVG',
              type: 'string',
              description: 'Paste raw SVG markup or an icon name',
            },
              {
          name: 'ctwaLabel',
          title: 'CTA Label',
          type: 'string',
          description: 'Button or link label, e.g., "Chat Now"',
        },
              {
          name: 'ctwaLink',
          title: 'WhatsApp Link',
          type: 'url',
          description: 'Full WhatsApp URL, e.g., https://wa.me/15551234567',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
            allowRelative: false,
          }),
        },
          ],
          preview: {
            select: { title: 'title', subtitle: 'eyebrow' },
          },
        },
      ],
      group: 'grid_4',
    }),
        // ─── Grid 5 ───
    defineField({
      name: 'grid_5_Media',
      title: 'Grid 5 Media',
      type: 'image',
      options: { hotspot: true },
      group: 'grid_5',
    }),
    defineField({
      name: 'grid_5',
      title: 'Grid 5 Content',
      type: 'array',
      of: [
           {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
            { name: 'body', title: 'Description', type: 'text', rows: 4 },
            {
              name: 'icon',
              title: 'Icon SVG',
              type: 'string',
              description: 'Paste raw SVG markup or an icon name',
            },
              {
          name: 'ctwaLabel',
          title: 'CTA Label',
          type: 'string',
          description: 'Button or link label, e.g., "Chat Now"',
        },
              {
          name: 'ctwaLink',
          title: 'WhatsApp Link',
          type: 'url',
          description: 'Full WhatsApp URL, e.g., https://wa.me/15551234567',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
            allowRelative: false,
          }),
        },
          ],
          preview: {
            select: { title: 'title', subtitle: 'eyebrow' },
          },
        },
      ],
      group: 'grid_5',
    }),
  ],
});
