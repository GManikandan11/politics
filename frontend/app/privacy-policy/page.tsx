// app/terms/page.tsx
import { client } from '@/sanity/client'
import PageNotFound from '@/components/common/PageNotFound'
// import BlockContent from '@sanity/block-content-to-react'
import TermsContent from '@/components/termsContent/TermsContent'
type TermsData = {
  title: string
  updatedDate: string
  body: any[]
}

import { generateLandingPageMetadata } from '@/lib/metaData/landingpage'; // Adjust path as needed

export const generateMetadata = generateLandingPageMetadata

const TERMS_QUERY = `
  *[_type == "privacyPolicy"] | order(updatedDate desc)[0] {
    title,
    updatedDate,
    body
  }
`

export default async function TermsPage() {
  const terms: TermsData | null = await client.fetch(TERMS_QUERY)

  if (!terms) {
    return <PageNotFound message="Terms and Conditions page not found." />
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">{terms.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Last updated: {new Date(terms.updatedDate).toLocaleDateString()}
      </p>
      <TermsContent {...terms} />
      {/* <BlockContent blocks={terms.body} /> */}
    </div>
  )
}