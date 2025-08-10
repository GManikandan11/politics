import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPages',
  title: 'Landing Pages',
  type: 'document',
  groups: [
    {name: 'grid1', title: 'Group 1'},
    {name: 'grid2', title: 'Group 2'},
    {name: 'grid3', title: 'Group 3'},
    {name: 'grid4', title: 'Group 4'},
    {name: 'grid5', title: 'Group 5'},
    {name: 'grid6', title: 'Group 6'},
    {name: 'grid7', title: 'Group 7'},
    {name: 'grid8', title: 'Group 8'},
    {name: 'grid9', title: 'Group 9'},
    {name: 'grid10', title: 'Group 10'},
    {name: 'grid11', title: 'Group 11'},
  ],
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heroSection.headline',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    // 1. Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      group: 'grid1',
      fields: [
        defineField({name: 'highlight', title: 'Highlight Text', type: 'string'}),
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'subheadline', title: 'Subheadline', type: 'blockContent'}),
        defineField({
          name: 'primaryCta',
          title: 'Primary CTA',
          type: 'object',
          fields: [
            defineField({name: 'text', title: 'Button Text', type: 'string'}),
            defineField({name: 'url', title: 'Button URL', type: 'url'}),
          ],
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary CTA',
          type: 'object',
          fields: [
            defineField({name: 'text', title: 'Button Text', type: 'string'}),
            defineField({name: 'url', title: 'Button URL', type: 'url'}),
          ],
        }),
        // defineField({name: 'heroImage', title: 'Hero Image', type: 'image'}),
            defineField({
              name: 'heroMedia',
              title: 'Hero Media',
              type: 'media',
              options: { hotspot: true },
            }),
      ],
    }),

    // 2. Highlights Section
    defineField({
      name: 'highlightsSection',
      title: 'Highlights Section',
      type: 'array',
      group: 'grid2',
      of: [
        {
          type: 'object',
          name: 'highlightItem',
          title: 'Highlight',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
        },
      ],
      description: 'Quick highlight points (e.g. Instant Setup, Integrations, Automated Process)',
    }),

    // 3. Social Proof Section
    defineField({
      name: 'socialProofSection',
      title: 'Social Proof Section',
      type: 'object',
      group: 'grid3',
      fields: [
        defineField({name: 'blurb', title: 'Tagline/Blurb', type: 'string'}),
        defineField({
          name: 'logos',
          title: 'Customer Logos',
          type: 'array',
          of: [{type: 'image'}],
        }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'testimonial',
              title: 'Testimonial',
              fields: [
                defineField({name: 'quote', title: 'Quote', type: 'text'}),
                defineField({name: 'authorName', title: 'Author Name', type: 'string'}),
                defineField({name: 'authorTitle', title: 'Author Title', type: 'string'}),
                defineField({name: 'authorImage', title: 'Author Image', type: 'image'}),
              ],
            },
          ],
        }),
        defineField({
          name: 'ctaButtons',
          title: 'CTA Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'ctaButton',
              title: 'CTA Button',
              fields: [
                defineField({name: 'text', title: 'Button Text', type: 'string'}),
                defineField({name: 'url', title: 'Button URL', type: 'url'}),
              ],
            },
          ],
          validation: (Rule) => Rule.max(2),
        }),
      ],
    }),

    // 4. Problem Section
    defineField({
      name: 'problemSection',
      title: 'Problem Section',
      type: 'object',
      group: 'grid4',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'intro', title: 'Intro Text', type: 'string'}),
        defineField({
          name: 'scenarioOne',
          title: 'Scenario One',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Scenario Name', type: 'string'}),
            defineField({
              name: 'points',
              title: 'Bullet Points',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'pointItem',
                  fields: [
                    defineField({name: 'pointTitle', title: 'Point Title', type: 'string'}),
                    defineField({name: 'pointText', title: 'Point Description', type: 'string'}),
                  ],
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'scenarioTwo',
          title: 'Scenario Two',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Scenario Name', type: 'string'}),
            defineField({
              name: 'points',
              title: 'Bullet Points',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'pointItem',
                  fields: [
                    defineField({name: 'pointTitle', title: 'Point Title', type: 'string'}),
                    defineField({name: 'pointText', title: 'Point Description', type: 'string'}),
                  ],
                },
              ],
            }),
          ],
        }),
      ],
    }),
    // 5. featureCards Section
   defineField({
  name: 'featureCards',
  title: 'Feature Cards',
  type: 'object',
  group: 'grid5',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          fields: [
            { name: 'icon', title: 'Icon (Emoji or Image)', type: 'string' },
            { name: 'title', title: 'Card Title', type: 'string' },
            { name: 'description', title: 'Card Description', type: 'string' },
            { name: 'number', title: 'Card Number (e.g. 01)', type: 'string' },
          ],
        },
      ],
    }),
  ],
}),

    // 6. conversionExplanation Section
    defineField({
  name: 'conversionExplanation',
  title: 'Conversion Explanation',
  type: 'object',
  group: 'grid6',
  fields: [
    {
      name: 'tagline',
      title: 'Section Tagline',
      type: 'string',
      description: 'Shown above the headline (e.g., Identify Anonymous Website Visitors)',
    },
    { name: 'headline', title: 'Headline', type: 'string' },
    { name: 'subheadline', title: 'Subheadline', type: 'string' },
    { name: 'image', title: 'Illustration/Image', type: 'image' },
    {
      name: 'bullets',
      title: 'Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'See exactly how it works →',
    },
    {
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'url',
    },
  ],
}),
    // 7. dataHighlight Section

    defineField({
  name: 'demoRequestSection',
  title: 'Demo Request Section',
  type: 'object',
  group: 'grid7', // or your relevant section group
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'features',
      title: 'What we’ll cover in the demo',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'qaSessionText',
      title: 'Q&A Session Info',
      type: 'blockContent',
    },
  ],
}),
    // defineField({
    //   name: 'dataHighlight',
    //   title: 'Data Highlight Block',
    //   type: 'object',
    //   group: 'grid7',
    //   fields: [
    //     {name: 'title', title: 'Title', type: 'string'},
    //     {name: 'description', title: 'Description', type: 'text'},
    //     {
    //       name: 'features',
    //       title: 'Feature Boxes',
    //       type: 'array',
    //       of: [
    //         {
    //           type: 'object',
    //           fields: [
    //             {name: 'title', title: 'Box Title', type: 'string'},
    //             {name: 'description', title: 'Box Description', type: 'string'},
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // }),
defineField({
  name: 'faq',
  title: 'FAQ Section',
  type: 'object',
  group: 'grid8',
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Tiny Label (e.g. “FAQ”)',
      type: 'string',
      initialValue: 'FAQ',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'subhead',
      title: 'Sub-headline',
      type: 'blockContent', // or 'blockContent' if you want rich text formatting
    }),
    defineField({
      name: 'items',
      title: 'Questions & Answers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 6 }, // or 'blockContent'
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),
  ],
}),
      // 9. funnelSection
    defineField({
      name: 'funnelSection',
      title: 'Funnel Section',
      type: 'object',
      group: 'grid9',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'description', title: 'Description', type: 'string'},
        {
          name: 'stages',
          title: 'Funnel Stages',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', title: 'Label', type: 'string'},
                {name: 'subtext', title: 'Subtext', type: 'string'},
              ],
            },
          ],
        },
      ],
    }), 
    // 10. integrationMarketplace Section
    defineField({
      name: 'integrationMarketplace',
      title: 'Integration Marketplace',
      type: 'object',
      group: 'grid10',
      fields: [
        {name: 'headline', title: 'Headline', type: 'string'},
        {name: 'description', title: 'Description', type: 'blockContent'},
        {
          name: 'integrations',
          title: 'Integration Icons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'name', title: 'Tool Name', type: 'string'},
                {name: 'logo', title: 'Logo Image', type: 'image'},
              ],
            },
          ],
        },
        {
          name: 'cta',
          title: 'Call to Action',
          type: 'object',
          fields: [
            {name: 'text', title: 'CTA Text', type: 'string'},
            {name: 'url', title: 'CTA URL', type: 'url'},
          ],
        },
      ],
    }),
    // 11. autoEngageSection
    defineField({
      name: 'autoEngageSection',
      title: 'Auto Engage Section',
      type: 'object',
      group: 'grid11',
      fields: [
        defineField({name: 'label', title: 'Top Label', type: 'string'}),
        defineField({name: 'headline', title: 'Headline', type: 'string'}),
        defineField({name: 'subheadline', title: 'Subheadline', type: 'blockContent'}),
        defineField({
        name: 'features',
        title: 'Feature Tabs',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'feature',
            fields: [
              defineField({ name: 'icon', title: 'Icon (Emoji or String)', type: 'string' }),
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'step', title: 'Step Number', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'string' }),
              defineField({ name: 'visual', title: 'Right-side Visual', type: 'image' }), // 👈 NEW
              defineField({ name: 'disabled', title: 'Disabled?', type: 'boolean' }),
            ],
          },
        ],
      }),
        defineField({
          name: 'personaCard',
          title: 'Persona Card',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'location', title: 'Location', type: 'string'}),
            defineField({name: 'image', title: 'Image', type: 'image'}),
            defineField({name: 'badges', title: 'Badges', type: 'array', of: [{type: 'string'}]}),
          ],
        }),

        defineField({
          name: 'messageSteps',
          title: 'Message Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'message',
              fields: [
                defineField({name: 'step', title: 'Step', type: 'string'}),
                defineField({name: 'text', title: 'Message Content', type: 'text'}),
                defineField({
                  name: 'tags',
                  title: 'Tags (e.g., auto-engaged)',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})
