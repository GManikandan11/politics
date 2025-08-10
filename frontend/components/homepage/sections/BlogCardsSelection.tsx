// components/homepage/sections/BlogCardsSection.tsx
'use client'

import DebugClient from '@/components/DebugClient'
import BlogCards from '@/components/homepage/sections/BlogCards'
import type { blogCards } from '@/lib/types'

export default function BlogCardsSection({
  sectionLabel,
  headline,
  subhead,
  cards,
}: blogCards) {
  return (
    <section className="space-y-10 text-center  container mx-auto px-4 max-w-7xl">
      {/* heading block */}
      <header className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          {sectionLabel}
        </span>
        <h2 className="text-4xl font-extrabold md:text-5xl">{headline}</h2>
        {subhead && (
          <p className="mx-auto max-w-xl text-zinc-600 md:text-lg">{subhead}</p>
        )}
      </header>

      {/* three-card grid */}
      <DebugClient data={{cards}} />
      <BlogCards posts={cards} />
    </section>
  )
}
