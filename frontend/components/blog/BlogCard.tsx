// components/blog/BlogCard.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

type BlogCardProps = {
  title: string
  slug: string
  publishedAt: string
  excerpt: string
  imageUrl: string
}

function truncate(str: string, maxLength: number) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str
}

export default function BlogCard({ title, slug, publishedAt, excerpt, imageUrl }: BlogCardProps) {
  const date = new Date(publishedAt)
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'short' })

  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition group relative">
        <div className="relative h-48 w-full">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded text-xs font-bold text-center">
          <div>{day}</div>
          <div>{month}</div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold font-grotesque" title={title}>{truncate(title, 30)}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2" title={excerpt}>{truncate(excerpt, 80)}</p>
          {/* <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
            Learn more
          </button> */}
          <Link href={`/blog/${slug}`}>
  <button className="mt-4 bg-secondary  text-white py-2 px-4 rounded">
    Learn more
  </button>
</Link>
        </div>
      </div>
    </Link>
  )
}
