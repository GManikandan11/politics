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
        source: 'heroSection.headline.en', // Use English as default for slug
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
        defineField({name: 'highlight', title: 'Highlight Text', type: 'localeString'}),
        defineField({name: 'headline', title: 'Headline', type: 'localeString'}),
        defineField({name: 'subheadline', title: 'Subheadline', type: 'localeBlockContent'}),
        defineField({
          name: 'primaryCta',
          title: 'Primary CTA',
          type: 'object',
          fields: [
            defineField({name: 'text', title: 'Button Text', type: 'localeString'}),
            defineField({name: 'url', title: 'Button URL', type: 'url'}),
          ],
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary CTA',
          type: 'object',
          fields: [
            defineField({name: 'text', title: 'Button Text', type: 'localeString'}),
            defineField({name: 'url', title: 'Button URL', type: 'url'}),
          ],
        }),
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
            defineField({name: 'title', title: 'Title', type: 'localeString'}),
            defineField({name: 'description', title: 'Description', type: 'localeString'}),
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
        defineField({name: 'blurb', title: 'Tagline/Blurb', type: 'localeString'}),
        defineField({
          name: 'logos',
          title: 'Customer Logos',
          type: 'array',
          of: [
            defineField({
              type: 'image',
              name: 'logo',
              title: 'Logo',
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'localeString',
                  description: 'Important for SEO and accessibility',
                }),
              ],
            }),
          ],
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
                defineField({name: 'quote', title: 'Quote', type: 'localeText'}),
                defineField({name: 'authorName', title: 'Author Name', type: 'localeString'}),
                defineField({name: 'authorTitle', title: 'Author Title', type: 'localeString'}),
                defineField({
                  name: 'authorImage',
                  title: 'Author Image',
                  type: 'image',
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'localeString',
                    }),
                  ],
                }),
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
                defineField({name: 'text', title: 'Button Text', type: 'localeString'}),
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
        defineField({name: 'title', title: 'Title', type: 'localeString'}),
        defineField({name: 'intro', title: 'Intro Text', type: 'localeString'}),
        defineField({
          name: 'scenarioOne',
          title: 'Scenario One',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Scenario Name', type: 'localeString'}),
            defineField({
              name: 'points',
              title: 'Bullet Points',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'pointItem',
                  fields: [
                    defineField({name: 'pointTitle', title: 'Point Title', type: 'localeString'}),
                    defineField({name: 'pointText', title: 'Point Description', type: 'localeString'}),
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
            defineField({name: 'name', title: 'Scenario Name', type: 'localeString'}),
            defineField({
              name: 'points',
              title: 'Bullet Points',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'pointItem',
                  fields: [
                    defineField({name: 'pointTitle', title: 'Point Title', type: 'localeString'}),
                    defineField({name: 'pointText', title: 'Point Description', type: 'localeString'}),
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
          type: 'localeString',
        }),
        defineField({
          name: 'sectionDescription',
          title: 'Section Description',
          type: 'localeString',
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
                { name: 'title', title: 'Card Title', type: 'localeString' },
                { name: 'description', title: 'Card Description', type: 'localeString' },
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
          type: 'localeString',
          description: 'Shown above the headline (e.g., Identify Anonymous Website Visitors)',
        },
        { name: 'headline', title: 'Headline', type: 'localeString' },
        { name: 'subheadline', title: 'Subheadline', type: 'localeString' },
        { 
          name: 'image', 
          title: 'Illustration/Image', 
          type: 'image',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'localeString',
            }),
          ],
        },
        {
          name: 'bullets',
          title: 'Bullet Points',
          type: 'array',
          of: [{ type: 'localeString' }],
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'localeString',
          initialValue: {
            en: 'See exactly how it works →',
            ta: 'அது எவ்வாறு செயல்படுகிறது என்பதைப் பார்க்கவும் →'
          },
        },
        {
          name: 'buttonUrl',
          title: 'Button URL',
          type: 'url',
        },
      ],
    }),
    
    // 7. demoRequestSection
    defineField({
      name: 'demoRequestSection',
      title: 'Demo Request Section',
      type: 'object',
      group: 'grid7',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'localeString',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'localeBlockContent',
        },
        {
          name: 'features',
          title: "What we ll cover in the demo",
          type: 'array',
          of: [{ type: 'localeString' }],
        },
        {
          name: 'qaSessionText',
          title: 'Q&A Session Info',
          type: 'localeBlockContent',
        },
      ],
    }),

    // 8. FAQ Section
    defineField({
      name: 'faq',
      title: 'FAQ Section',
      type: 'object',
      group: 'grid8',
      fields: [
        defineField({
          name: 'sectionLabel',
          title: 'Tiny Label (e.g. "FAQ")',
          type: 'localeString',
          initialValue: {
            en: 'FAQ',
            ta: 'அடிக்கடி கேட்கப்படும் கேள்விகள்'
          },
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'localeString',
        }),
        defineField({
          name: 'subhead',
          title: 'Sub-headline',
          type: 'localeBlockContent',
        }),
        defineField({
          name: 'items',
          title: 'Questions & Answers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'question', title: 'Question', type: 'localeString' },
                { name: 'answer', title: 'Answer', type: 'localeText' },
              ],
              preview: { 
                select: { 
                  title: 'question.en',
                  subtitle: 'answer.en'
                } 
              },
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
        {name: 'title', title: 'Title', type: 'localeString'},
        {name: 'description', title: 'Description', type: 'localeString'},
        {
          name: 'stages',
          title: 'Funnel Stages',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', title: 'Label', type: 'localeString'},
                {name: 'subtext', title: 'Subtext', type: 'localeString'},
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
        {name: 'headline', title: 'Headline', type: 'localeString'},
        {name: 'description', title: 'Description', type: 'localeBlockContent'},
        {
          name: 'integrations',
          title: 'Integration Icons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'name', title: 'Tool Name', type: 'localeString'},
                {
                  name: 'logo', 
                  title: 'Logo Image', 
                  type: 'image',
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'localeString',
                    }),
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'cta',
          title: 'Call to Action',
          type: 'object',
          fields: [
            {name: 'text', title: 'CTA Text', type: 'localeString'},
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
        defineField({name: 'label', title: 'Top Label', type: 'localeString'}),
        defineField({name: 'headline', title: 'Headline', type: 'localeString'}),
        defineField({name: 'subheadline', title: 'Subheadline', type: 'localeBlockContent'}),
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
                defineField({ name: 'title', title: 'Title', type: 'localeString' }),
                defineField({ name: 'step', title: 'Step Number', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'localeString' }),
                defineField({ 
                  name: 'visual', 
                  title: 'Right-side Visual', 
                  type: 'image',
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'localeString',
                    }),
                  ],
                }),
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
            defineField({name: 'name', title: 'Name', type: 'localeString'}),
            defineField({name: 'title', title: 'Title', type: 'localeString'}),
            defineField({name: 'location', title: 'Location', type: 'localeString'}),
            defineField({
              name: 'image', 
              title: 'Image', 
              type: 'image',
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'localeString',
                }),
              ],
            }),
            defineField({name: 'badges', title: 'Badges', type: 'array', of: [{type: 'localeString'}]}),
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
                defineField({name: 'text', title: 'Message Content', type: 'localeText'}),
                defineField({
                  name: 'tags',
                  title: 'Tags (e.g., auto-engaged)',
                  type: 'array',
                  of: [{type: 'localeString'}],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})