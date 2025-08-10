// app/faq/page.tsx
import { client } from '@/sanity/client'
import { GLOBAL_FAQ_QUERY } from '@/lib/FAQ/quaries'
import FAQ from '@/components/faq/FAQ'
import PageNotFound from '@/components/common/PageNotFound'

export default async function FAQPage() {
  const faq = await client.fetch(GLOBAL_FAQ_QUERY)

  if (!faq) {
    return <PageNotFound message="FAQs page not found." />
  }

  return <FAQ title={faq.title} items={faq.items} />
}
