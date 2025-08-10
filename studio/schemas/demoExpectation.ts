// /schemas/demoExpectation.ts

export default {
  name: 'demoExpectation',
  title: 'Demo Booking Expectations',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'points',
      title: 'Expectations',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'whatsappIcon',
      title: 'WhatsApp Icon (Optional)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'rating',
      title: 'Rating Text',
      type: 'string',
    },
    {
      name: 'partnerLogo',
      title: 'Partner Logo (e.g. Meta)',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
