// components/terms/TermsContent.tsx
'use client'

import { PortableText } from '@portabletext/react'

type TermsContentProps = {
  title: string
  updatedDate: string
  body: any[]
}

export default function TermsContent({ title, updatedDate, body }: TermsContentProps) {
  return (
    <div className="max-w-8xl mx-auto p-8">
      {/* <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Last updated: {new Date(updatedDate).toLocaleDateString()}
      </p> */}
      <PortableText value={body} />
    </div>
  )
}
