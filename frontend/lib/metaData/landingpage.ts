import { client } from '@/sanity/client'
import { PAGE_QUERY } from '@/lib/SEO/queries'
import type { Metadata } from 'next'

export async function generateLandingPageMetadata({
  params,
}: {
  params?: { slug?: string }
}): Promise<Metadata> {
  const fallbackImage = '/BizMagnets_200x200.png' // lives in /public

  // No slug? Return default metadata
  if (!params?.slug) {
    return {
      title: 'BizMagnets',
      description: 'BizMagnets – ChatOps on WhatsApp for mid-market teams.',
      openGraph: {
        images: [{ url: fallbackImage }],
      },
      twitter: {
        card: 'summary_large_image',
        images: [fallbackImage],
      },
    }
  }

  try {
    const data = await client.fetch(PAGE_QUERY, { slug: params.slug })
    const seo = data?.seo

    const metaTitle = seo?.metaTitle || 'BizMagnets'
    const metaDescription =
      seo?.metaDescription || 'BizMagnets – ChatOps on WhatsApp for mid-market teams.'

    const ogImage = seo?.ogImage?.asset?.url || fallbackImage
    const twitterImage = seo?.twitterImage?.asset?.url || fallbackImage

    return {
      title: metaTitle,
      description: metaDescription,
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: seo?.canonicalUrl || undefined,
      },
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: 'website',
        url: seo?.canonicalUrl || `https://bizmagnets.ai/${params.slug}`,
        images: [{ url: ogImage }],
      },
      twitter: {
        card: 'summary_large_image',
        title: seo?.twitterTitle || metaTitle,
        description: seo?.twitterDescription || metaDescription,
        images: [twitterImage],
      },
    }
  } catch (error) {
    console.error('Failed to fetch SEO metadata:', error)

    return {
      title: 'BizMagnets',
      description: 'BizMagnets – ChatOps on WhatsApp for mid-market teams.',
      openGraph: {
        images: [{ url: fallbackImage }],
      },
      twitter: {
        card: 'summary_large_image',
        images: [fallbackImage],
      },
    }
  }
}
