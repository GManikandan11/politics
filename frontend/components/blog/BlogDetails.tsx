// components/blog/BlogDetails.tsx
'use client'

import { PortableText } from '@portabletext/react'
import { useLanguage } from '@/contexts/LanguageContext'

type BlogDetailsProps = {
  post: any
}

// Helper function to extract text from multilingual objects
function asText(value: any, lang: string = 'en', fallback: string = ''): string {
  if (!value) return fallback;
  
  if (typeof value === 'object') {
    return value[lang] || value.en || fallback;
  }
  
  if (typeof value === 'string') return value;
  
  return fallback;
}

export default function BlogDetails({ post }: BlogDetailsProps) {
  const { currentLanguage } = useLanguage()
  
  // Safely handle body content
  const bodyArray = Array.isArray(post.body) ? post.body : [];
  
  // Generate table of contents from headings
  const toc = bodyArray
    .filter((block: any) => block && block._type === 'block' && ['h2', 'h3'].includes(block.style))
    .map((block: any) => {
      const text = block?.children?.map((child: any) => child.text).join('') || ''
      return {
        text,
        id: text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
      }
    })

  // Localized strings
  const localizedStrings = {
    tableOfContents: currentLanguage === 'ta' ? 'பொருளடக்கம்' : 'Table of Contents',
    noContent: currentLanguage === 'ta' ? 'இந்த வலைப்பதிவு இடுகைக்கு உள்ளடக்கம் இல்லை.' : 'No content available for this blog post.',
    learnMore: currentLanguage === 'ta' ? 'மேலும் அறிக' : 'Learn more'
  }

  // Define basic components for PortableText with language support
  const components = {
    types: {
      image: ({ value }: any) => {
        const url = value?.asset?.url
        if (!url) return null
        return (
          <figure className="my-6">
            <img
              src={url}
              alt={asText(value.alt, currentLanguage, 'Blog image')}
              className="rounded-lg w-full object-contain max-h-[600px]"
            />
            {value.caption && (
              <figcaption className="text-center text-sm text-gray-500">
                {asText(value.caption, currentLanguage)}
              </figcaption>
            )}
          </figure>
        )
      }
    },
    block: {
      h2: ({ children }: any) => {
        const text = typeof children === 'string' ? children : children?.join('') || ''
        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
        return (
          <h2 
            id={id} 
            className="text-2xl font-bold my-6 font-grotesque text-gray-900"
          >
            {children}
          </h2>
        )
      },
      h3: ({ children }: any) => {
        const text = typeof children === 'string' ? children : children?.join('') || ''
        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
        return (
          <h3 
            id={id} 
            className="text-xl font-semibold my-5 text-gray-800"
          >
            {children}
          </h3>
        )
      },
      normal: ({ children }: any) => (
        <p className="my-2 text-gray-700">
          {children}
        </p>
      )
    }
  }

  // Calculate grid column span based on TOC presence
  const mainContentSpan = toc.length > 0 ? 'lg:col-span-6' : 'lg:col-span-9'

  // Process multilingual content
  const processedTitle = asText(post.title, currentLanguage)
  const processedAltText = asText(post.altText, currentLanguage, 'Blog image')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[calc(100vh-150px)]">
      {/* Table of Contents - Only show if there are headings */}
      {toc.length > 0 && (
        <aside className="lg:col-span-3 hidden lg:block sticky top-24 self-start h-fit border-r pr-4">
          <h2 className="font-semibold text-lg mb-4 font-grotesque text-gray-900">
            {localizedStrings.tableOfContents}
          </h2>
          <ul className="text-sm space-y-2">
            {toc.map((item: any) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className="hover:underline text-gray-700"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <main className={`${mainContentSpan} col-span-12 overflow-y-auto pr-2`}>
        <h1 className="text-3xl font-bold mb-2 font-grotesque text-gray-900">
          {processedTitle}
        </h1>
        <p className="text-sm mb-6 text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString(currentLanguage === 'ta' ? 'ta-IN' : 'en-US')}
        </p>
        
        {/* Only render PortableText if body exists */}
        {bodyArray.length > 0 ? (
          <div className="prose max-w-none space-y-10">
            <PortableText value={bodyArray} components={components} />
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">
              {localizedStrings.noContent}
            </p>
          </div>
        )}
      </main>

      <aside className="lg:col-span-3 hidden lg:block sticky top-24 self-start h-fit pl-4 space-y-6">
        <div className="rounded p-4 shadow bg-blue-50">
          <img
            src="/Website_Ad_Image.png"
            alt="Advertisement image"
            className="rounded-lg w-full object-contain max-h-[600px]"
          />
          <h2 className="mb-3 text-lg font-semibold font-grotesque text-gray-900">
            {currentLanguage === 'ta' ? 'சிவா சங்கர்' : 'siva sangar'}
          </h2>
          <button className="bg-dmk-red text-white px-4 py-2 rounded hover:bg-dmk-red/90 transition-colors">
            {localizedStrings.learnMore}
          </button>
        </div>
      </aside>
    </div>
  )
}