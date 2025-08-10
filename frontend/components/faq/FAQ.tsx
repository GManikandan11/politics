// components/faq/FAQ.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import DebugClient from '../DebugClient'
import React from 'react'

type FaqItem = {
  question: string
  answer: string
}

type FAQProps = {
  title?: string
  items: FaqItem[]
}

export default function FAQ({ title, items }: FAQProps) {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        // Replace newlines with <br /> to retain formatting in structured data
        "text": item.answer.replace(/\n/g, '<br />')
      }
    }))
  }

  return (
    <section className="container mx-auto px-4 py-10 max-w-3xl">
      {title && (
        <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
      )}

      {/* Debug view for development */}
      <DebugClient data={{ items }} />

      {/* JSON-LD Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      {/* FAQ Accordion */}
      <Accordion type="multiple" className="w-full">
        {items?.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600 mt-2">
              {item?.answer
                ?.split(/\n\s*\n/)
                .map((para, i) =>
                  para.trim() === '' ? (
                    <div key={i} className="h-4" />
                  ) : (
                    <p key={i} className="mb-2 whitespace-pre-line">
                      {para}
                    </p>
                  )
                )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
