import DebugClient from '@/components/DebugClient'
import { client } from '@/sanity/client'
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage';
import BlogDetails from '@/components/blog/BlogDetails'
import FAQ from '@/components/faq/FAQ';

export const generateMetadata = generateLandingPageMetadata

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const slug = `${params.slug.replace(/^\/+/, '')}`
  
  const post = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      publishedAt,
      faq[]{
        question,
        answer
      },
      body,
      slug,
      "imageUrl": mainImage.asset->url,
      "altText": mainImage.alt
    }`,
    { slug }
  )

  if (!post) return <p className="p-10">Not found.</p>

  // Just use the raw data without language processing
  const processedPost = {
    ...post,
    // Ensure we have fallback values for optional fields
    title: post.title || 'Untitled',
    altText: post.altText || 'Blog image',
    body: post.body || [],
    excerpt: post.excerpt || '',
    faq: post.faq || []
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 bg-white">
      {processedPost.imageUrl && (
        <img 
          src={processedPost.imageUrl} 
          className="w-full rounded mb-8" 
          alt={processedPost.altText} 
        />
      )}
      <DebugClient data={{ post: processedPost }} />
      
      {/* Pass raw data to the child component */}
      <BlogDetails 
        post={processedPost} 
      />
      
      {/* <section className="container mx-auto px-4 py-10 max-w-3xl">
        {processedPost.faq.length > 0 && (
          <FAQ 
            title="Frequently Asked Questions" 
            items={processedPost.faq} 
          />
        )}
      </section> */}
    </div>      
  )
}