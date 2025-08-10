import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PortableText } from 'next-sanity'

interface FaqItem {
  question: string
  // answer can be string or Portable Text blocks
  answer: string | any[]
}

export interface FAQProps {
  sectionLabel?: string
  headline: string
  // subhead can be string or Portable Text blocks
  subhead?: string | any[]
  items: FaqItem[]
}

/** Minimal converter: Portable Text -> plain text */
function ptToPlain(input: unknown): string {
  if (!Array.isArray(input)) return typeof input === 'string' ? input : ''
  return input
    .map((block: any) =>
      block?.children?.map((span: any) => span?.text || '').join('') ?? ''
    )
    .join('\n\n')
}

export default function FAQ({
  sectionLabel = 'FAQ',
  headline,
  subhead,
  items,
}: FAQProps) {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => {
      const plain = ptToPlain(item.answer)
      return {
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: plain.replace(/\n/g, '<br />'),
        },
      }
    }),
  }

  return (
    <section className="pb-6 text-left text-zinc-600 bg-background relative pt-16 xl:pt-20 pb-16 xl:pb-20 container mx-auto px-4 max-w-7xl">
      {/* Heading */}
      <header className="mb-12 space-y-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          {sectionLabel}
        </span>

        <h2 className="text-4xl font-extrabold md:text-5xl font-grotesque">
          {headline}
        </h2>

        {subhead && (
          <div className="mx-auto max-w-xl text-zinc-600 md:text-lg">
            {Array.isArray(subhead) ? <PortableText value={subhead} /> : <p>{subhead}</p>}
          </div>
        )}
      </header>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Accordion */}
      <Accordion type="multiple" className="w-full">
        {items.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="py-6 text-left text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-zinc-600">
              {Array.isArray(item.answer) ? (
                <PortableText value={item.answer} />
              ) : (
                item.answer
                  ?.split(/\n\s*\n/)
                  .map((para, i) =>
                    para.trim() === '' ? (
                      <div key={i} className="h-4" />
                    ) : (
                      <p key={i} className="mb-2 whitespace-pre-line">
                        {para}
                      </p>
                    )
                  )
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
