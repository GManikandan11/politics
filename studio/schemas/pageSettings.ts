import { defineType, Rule } from 'sanity'

const pageSettings = defineType({
name: 'pageSettings',
title: 'Page Settings',
type: 'object',
fields: [
{ name: 'metaTitle', title: 'Meta Title', type: 'string', validation: (Rule: Rule) => Rule.max(70) },
{ name: 'metaDescription', title: 'Meta Description', type: 'text', validation: (Rule: Rule) => Rule.max(160) },
{ name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
{ name: 'ogTitle', title: 'OG Title', type: 'string' },
{ name: 'ogDescription', title: 'OG Description', type: 'text' },
{ name: 'ogImage', title: 'OG Image', type: 'image', options: { hotspot: true } },
{ name: 'twitterTitle', title: 'Twitter Title', type: 'string' },
{ name: 'twitterDescription', title: 'Twitter Description', type: 'text' },
{ name: 'twitterImage', title: 'Twitter Image', type: 'image', options: { hotspot: true } },
{ name: 'noIndex', title: 'No Index', type: 'boolean' },
{ name: 'noFollow', title: 'No Follow', type: 'boolean' },
],
})

export default pageSettings