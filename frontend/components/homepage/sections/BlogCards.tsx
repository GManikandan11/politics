// components/BlogCards.tsx
import Image from 'next/image'
import Link  from 'next/link'
import type { BlogCard } from '@/lib/types'


export default function BlogCards({posts}: {posts: BlogCard[]}) {
  return (
    <section className="grid gap-8 md:grid-cols-3">
      {posts.map((p:any) => (
        <article
          key={p._key}
          className="flex flex-col rounded-2xl border px-6 pb-6 pt-4 shadow-sm transition hover:shadow-md"
        >
          {p.imageUrl && (
            <div className="mb-4 aspect-video overflow-hidden rounded-lg">
              <Image
                src={p.imageUrl}
                alt={p.title}
                width={640}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <h3 className="mb-2 text-2xl font-extrabold">{p.title}</h3>

          {p.categories?.length && (
            <div className="mb-3 flex flex-wrap gap-2">
              {p.categories.map((tag:any) => (
                <span
                  key={tag}
                  className="rounded bg-zinc-900 px-2 py-0.5 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {p.excerpt && (
            <p className="mb-8 text-zinc-600 line-clamp-4">{p.excerpt}</p>
          )}

          {/* <Link
            href={`/blog/${p.slug.current}`}
            className="mt-auto ml-auto flex h-10 w-10 items-center justify-center rounded-full border text-xl text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
          >
            →
          </Link> */}
        </article>
      ))}
    </section>
  )
}
