// components/blog/BlogCard.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from 'next-themes' // If using next-themes, otherwise implement your own theme hook

type BlogCardProps = {
  title: string
  slug: string
  publishedAt: string
  excerpt: string
  imageUrl: string
  altText?: string
}

function truncate(str: string, maxLength: number) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str
}

export default function BlogCard({ title, slug, publishedAt, excerpt, imageUrl, altText }: BlogCardProps) {
  const { currentLanguage } = useLanguage()
  // If using next-themes, use this:
  // const { theme } = useTheme()
  // Otherwise, you can use a simple context or localStorage-based theme
  const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'

  const date = new Date(publishedAt)
  const day = date.getDate()
  const month = date.toLocaleString(currentLanguage === 'ta' ? 'ta-IN' : 'en-US', { month: 'short' })

  // Localized strings
  const localizedStrings = {
    learnMore: currentLanguage === 'ta' ? 'மேலும் அறிக' : 'Learn more'
  }

  // Helper function to extract text from multilingual objects
  const asText = (value: any, fallback: string = ''): string => {
    if (!value) return fallback;
    
    if (typeof value === 'object') {
      return value[currentLanguage] || value.en || fallback;
    }
    
    if (typeof value === 'string') return value;
    
    return fallback;
  }

  // Process multilingual content
  const processedTitle = asText(title, '')
  const processedExcerpt = asText(excerpt, '')
  const processedAltText = asText(altText, title)

  // Theme-based styles
  const cardStyles = theme === 'dark' 
    ? 'bg-gray-800 border-gray-700 text-white hover:shadow-lg' 
    : 'bg-white border-gray-200 text-gray-900 hover:shadow-md'

  const excerptStyles = theme === 'dark' 
    ? 'text-gray-300' 
    : 'text-gray-600'

  const buttonStyles = theme === 'dark'
    ? 'bg-dmk-red hover:bg-dmk-red/90 text-white'
    : 'bg-secondary hover:bg-secondary/90 text-white'

  return (
    <Link href={`/blog/${slug}`}>
      <div className={`border rounded-xl overflow-hidden shadow transition group relative ${cardStyles}`}>
        <div className="relative h-48 w-full">
          <Image 
            src={imageUrl} 
            alt={processedAltText} 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded text-xs font-bold text-center">
          <div>{day}</div>
          <div>{month}</div>
        </div>
        <div className="p-4">
          <h3 
            className="text-lg font-semibold font-grotesque mb-2" 
            title={processedTitle}
          >
            {truncate(processedTitle, 30)}
          </h3>
          <p 
            className={`text-sm mt-1 line-clamp-2 ${excerptStyles}`} 
            title={processedExcerpt}
          >
            {truncate(processedExcerpt, 80)}
          </p>
          <Link href={`/blog/${slug}`}>
            <button className={`mt-4 py-2 px-4 rounded transition-colors ${buttonStyles}`}>
              {localizedStrings.learnMore}
            </button>
          </Link>
        </div>
      </div>
    </Link>
  )
}