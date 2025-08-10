import { defineField, defineType } from 'sanity';
import heroSection from './heroSection';

export default defineType({
  name: 'pricingSection',
  title: 'Pricing Section',
  type: 'document',
  groups: [
    { name: 'group1', title: 'Basic Info' },
    { name: 'group2', title: 'Billing Plans' },
    { name: 'group3', title: 'Comparison Section' },
    { name: 'group4', title: 'Feature Comparison Table' },
    { name: 'group5', title: 'Hero Section' }
  ],
  fields: [
    // Group 1: Basic Info
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'group1',
      options: { source: 'tagline', maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', group: 'group1' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string', group: 'group1' }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
      rows: 3,
      group: 'group1'
    }),
    defineField({
      name: 'featureHighlights',
      title: 'Feature Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'group1'
    }),

    // Group 2: Plans by Billing
    defineField({
      name: 'plansByBilling',
      title: 'Plans by Billing Toggle',
      type: 'array',
      group: 'group2',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'billingLabel',
              title: 'Billing Toggle Label',
              type: 'string'
            }),
            defineField({
              name: 'plans',
              title: 'Plans',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', title: 'Plan Name', type: 'string' }),
                    defineField({ name: 'price', title: 'Price', type: 'string' }),
                    defineField({ name: 'pricingCaption', title: 'Price Subtitle', type: 'string' }),
                    defineField({ name: 'highlightLabel', title: 'Highlight Label', type: 'string' }),
                    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
                    defineField({ name: 'body', title: 'Body', type: 'blockContent' }),
                    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
                    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'url' })
                  ]
                }
              ]
            })
          ]
        }
      ]
    }),

    // Group 3: Comparison Section
    defineField({
      name: 'comparisonSection',
      title: 'Comparison Section',
      type: 'object',
      group: 'group3',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'leftColumnTitle', title: 'Left Column Title', type: 'string' }),
        defineField({ name: 'rightColumnTitle', title: 'Right Column Title', type: 'string' }),
        defineField({
          name: 'comparisonItems',
          title: 'Comparison Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'leftFeature', title: 'Left Feature', type: 'string' }),
                defineField({ name: 'rightFeature', title: 'Right Feature', type: 'string' })
              ]
            }
          ]
        }),
        defineField({ name: 'leftSummary', title: 'Left Price Summary', type: 'blockContent' }),
        defineField({ name: 'rightSummary', title: 'Right Price Summary', type: 'blockContent' })
      ]
    }),

    // Group 4: Feature Comparison Table
    defineField({
      name: 'featureComparisonTable',
      title: 'Feature Comparison Table',
      type: 'object',
      group: 'group4',
      fields: [
        defineField({ name: 'title', title: 'Table Title', type: 'string' }),
        defineField({
          name: 'columns',
          title: 'Plan Columns',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.min(2).max(4)
        }),
        defineField({
          name: 'rows',
          title: 'Feature Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'group', title: 'Group Heading (Optional)', type: 'string' }),
                defineField({ name: 'feature', title: 'Feature Label', type: 'string' }),
                defineField({
                  name: 'values',
                  title: 'Values (per plan)',
                  type: 'array',
                  of: [{ type: 'string' }]
                })
              ]
            }
          ]
        })
      ]
    }),

    // Group 5: Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'heroSection',
      group: 'group5'
    })
  ]
});
