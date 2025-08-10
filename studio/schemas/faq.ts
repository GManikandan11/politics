// ./schemas/faq.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ & Waitlist Page',
  type: 'document',

  // ───────────────────────────────────────── fieldsets help Studio UX
  fieldsets: [
    {name: 'faq', title: 'FAQ Section', options: {collapsible: true, collapsed: false}},
    {name: 'waitlist', title: 'Waitlist Section', options: {collapsible: true, collapsed: false}},
  ],

  fields: [
    /* ───────────── FAQ SECTION ───────────── */
    defineField({
      name: 'sectionLabel',
      title: 'Tiny Label (e.g. “FAQ”)',
      type: 'string',
      initialValue: 'FAQ',
      validation: (Rule) => Rule.max(24),
      fieldset: 'faq',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
      fieldset: 'faq',
    }),
    defineField({
      name: 'subhead',
      title: 'Sub-headline',
      type: 'text',
      rows: 2,
      fieldset: 'faq',
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
            {name: 'answer', title: 'Answer', type: 'text', rows: 4},
          ],
          preview: {select: {title: 'question'}},
        },
      ],
      validation: (Rule) => Rule.min(1),
      fieldset: 'faq',
    }),

    /* ───────────── WAITLIST SECTION ───────────── */
    defineField({
      name: 'waitlist',
      title: 'Waitlist Copy',
      type: 'object',
      fieldset: 'waitlist',
      fields: [
        {name: 'label',          title: 'Tiny Label',               type: 'string',  initialValue: 'Launching soon',  validation: (R) => R.max(24)},
        {name: 'headline',       title: 'Headline',                 type: 'string',  initialValue: 'Sign up for our waitlist!', validation: (R) => R.required().max(120)},
        {name: 'subhead',        title: 'Sub-headline',             type: 'text',    rows: 2, initialValue: 'Be the first to learn about Schema UI’s new free template launching soon!'},
        {name: 'inputPlaceholder',title:'Email input placeholder',  type: 'string',  initialValue: 'Enter your email', validation: (R) => R.required().max(64)},
        {name: 'ctaLabel',       title: 'Button label',             type: 'string',  initialValue: 'Subscribe',        validation: (R) => R.required().max(32)},
        {name: 'errorMessage',   title: 'Validation error',         type: 'string',  initialValue: 'Please enter a valid email', validation: (R) => R.required().max(120)},
        {name: 'successMessage', title: 'After-submit success',     type: 'string',  initialValue: "Thanks — you're on the list!", validation: (R) => R.max(160)},
        {name: 'finePrint',      title: 'Consent / fine-print',     type: 'text',    rows: 3, initialValue: 'By subscribing, you agree to receive emails from us. You can unsubscribe at any time.'},
      ],
    }),
  ],
})
