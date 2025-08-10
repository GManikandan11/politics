import DebugClient from '@/components/DebugClient'
import { client } from '@/sanity/client'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import FAQ from '@/components/faq/FAQ'
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage'; // Adjust path as needed

export const generateMetadata = generateLandingPageMetadata

// Utility to safely extract text from PortableText block children
const getPlainText = (children: any): string => {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) {
    return children
      .map((child: any) => (typeof child === 'string' ? child : child?.props?.text || child?.text || ''))
      .join('')
  }
  return ''
}

type HeadingItem = {
  id: string
  text: string
}

const components = {
  types: {
    image: ({ value }: any) => {
      const url = value?.asset?.url
      if (!url) return null
      return (
        <figure className="my-6">
          <img
            src={url}
            alt={value.alt || 'Blog image'}
            className="rounded-lg w-full object-contain max-h-[600px]"
          />
          {value.caption && <figcaption className="text-center text-sm text-gray-500">{value.caption}</figcaption>}
        </figure>
      )
    }
  },
  block: {
    h2: ({ children }: any) => {
      const text = getPlainText(children)
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
      return <h2 id={id} className="text-2xl font-bold my-6 font-grotesque">{children}</h2>
    },
    h3: ({ children }: any) => {
      const text = getPlainText(children)
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
      return <h3 id={id} className="text-xl font-semibold my-5">{children}</h3>
    },
    normal: ({ children }: any) => <p className="my-2">{children}</p>
  }
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const slug = `${params.slug.replace(/^\/+/, '')}`
  const post = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      publishedAt,
       faq[]{ question, answer },
      body[] {
        ...,
        _type == "image" => {
          ...,
          asset->{ _id, url },
          alt,
          caption
        }
      },
      slug,
      "imageUrl": mainImage.asset->url
    }`,
    { slug }
  )

  if (!post) return <p className="p-10">Not found.</p>

  const toc: HeadingItem[] = post.body
    .filter((block: any) => block._type === 'block' && ['h2', 'h3'].includes(block.style))
    .map((block: any) => {
      const text = block?.children?.map((child: any) => child.text).join('') || ''
      return {
        text,
        id: text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
      }
    })

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8">
      {post.imageUrl && (
        <img src={post.imageUrl} className="w-full rounded mb-8" alt={post.title} />
      )}
      <DebugClient data={{ post }} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-150px)]">
        <aside className="lg:col-span-3 hidden lg:block sticky top-24 self-start h-fit border-r pr-4">
          <h2 className="font-semibold text-lg mb-4 font-grotesque">Table of Contents</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">{item.text}</a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="lg:col-span-6 col-span-12 overflow-y-auto pr-2">
          <h1 className="text-3xl font-bold mb-2 font-grotesque">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">{new Date(post.publishedAt).toLocaleDateString()}</p>
          <div className="prose max-w-none space-y-10">
            <PortableText value={post.body} components={components} />
          </div>
        </main>

        <aside className="lg:col-span-3 hidden lg:block sticky top-24 self-start h-fit pl-4 space-y-6">
          <div className="bg-blue-50 rounded p-4 shadow">
            {/* <h3 className="font-semibold text-base mb-2">📅 Free Webinar</h3> */}
                   <img
                  src="/Website_Ad_Image.png"
                  alt="Advertisement image"
                  className="rounded-lg w-full object-contain max-h-[600px]"
                />
            <h2 className="mb-3  text-lg font-semibold font-grotesque">Get your business on WhatsApp with Bizmagnets</h2>
            <button className="bg-secondary text-white px-4 py-2 rounded"><a href="https://bizmagnets.ai/book-a-demo">Register Now</a></button>
          </div>
        </aside>
        
      </div>
    <section className="container mx-auto px-4 py-10 max-w-3xl">
      {post.faq?.length > 0 && (
        <>
          <FAQ title={"Frequently Asked Questions"} items={post.faq} />
        </>
      )}
</section>
</div>      
  )
}