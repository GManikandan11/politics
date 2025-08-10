import { client } from '@/sanity/client'
import { ALL_BLOGS_QUERY } from '@/lib/blog/queries'
import BlogCard from '@/components/blog/BlogCard'
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage'; // Adjust path as needed

export const generateMetadata = generateLandingPageMetadata


export default async function BlogPage() {
  const blogs = await client.fetch(ALL_BLOGS_QUERY)

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <h1 className="text-4xl text-center font-bold mb-10 font-grotesque">Blogs & Articles</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-3 px-4">
        {blogs.map((blog: any) => (
          <BlogCard key={blog.slug.current} {...blog} slug={blog.slug.current} />
        ))}
      </div>
    </div>
  )
}
