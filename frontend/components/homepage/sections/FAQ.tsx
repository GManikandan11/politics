import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { WaitlistSection, type WaitlistProps } from './WaitlistSection'

interface FaqItem {
  question: string
  answer: string
}

export interface FAQProps {
  sectionLabel?: string
  headline: string
  subhead?: string
  items: FaqItem[]

  /** Optional hero that appears below the accordion */
  waitlist?: WaitlistProps    // ← new
}

export default function FAQ({
  sectionLabel = 'FAQ',
  headline,
  subhead,
  items,
  waitlist,                   // ← new
}: FAQProps) {

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
    <section className="pb-6 text-left text-zinc-600 bg-background relative pt-16 xl:pt-20 pb-16 xl:pb-20 container mx-auto px-4 max-w-7xl">
      {/* ── Heading block ─────────────────── */}
      <header className="mb-12 space-y-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          {sectionLabel}
        </span>

        <h2 className="text-4xl font-extrabold md:text-5xl font-grotesque">{headline}</h2>

        {subhead && (
          <p className="mx-auto max-w-xl text-zinc-600 md:text-lg">
            {subhead}
          </p>
        )}
      </header>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />


      {/* ── Accordion list ────────────────── */}
      <Accordion type="multiple" className="w-full">
        {items.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="py-6 text-left text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-zinc-600">
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

      {/* ── Waitlist hero (optional) ───────── */}
      {/* {waitlist && (
        <div className="mt-24">
          <WaitlistSection {...waitlist} />
        </div>
      )} */}
    </section>
  )
}
