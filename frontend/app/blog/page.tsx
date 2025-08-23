import { client } from '@/sanity/client'
import { ALL_BLOGS_QUERY } from '@/lib/blog/queries'
import BlogCard from '@/components/blog/BlogCard'
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage';
import DebugClient from '@/components/DebugClient';

export const generateMetadata = generateLandingPageMetadata

export default async function BlogPage() {
  const blogs = await client.fetch(ALL_BLOGS_QUERY)

  // Just pass the raw data without language processing
  const processedBlogs = blogs.map((blog: any) => ({
    ...blog,
    slug: blog.slug?.current || '',
    // Ensure we have fallbacks for optional fields
    title: blog.title || 'Untitled',
    excerpt: blog.excerpt || '',
    imageUrl: blog.imageUrl || '/placeholder-image.jpg',
    altText: blog.altText || 'Blog image',
    publishedAt: blog.publishedAt || new Date().toISOString()
  }))

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <DebugClient data={{blogs: processedBlogs}} />
        <h1 className="text-4xl text-center font-bold mb-10 font-grotesque text-gray-900">
          Blogs & Articles
        </h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          {processedBlogs.map((blog: any) => (
            <BlogCard 
              key={blog.slug} 
              title={blog.title}
              slug={blog.slug}
              publishedAt={blog.publishedAt}
              excerpt={blog.excerpt}
              imageUrl={blog.imageUrl}
              altText={blog.altText}
            />
          ))}
        </div>
        
        {/* Empty state */}
        {processedBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">
              No blogs available
            </p>
          </div>
        )}
      </div>
    </div>
  )
}