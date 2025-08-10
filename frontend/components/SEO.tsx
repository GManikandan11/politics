import Head from 'next/head'
import DebugClient from './DebugClient'

type ImageType = {
  asset?: {
    url?: string
  }
}

interface SEOProps {
  seo?: {
    metaTitle?: string
    metaDescription?: string
    canonicalUrl?: string
    noIndex?: boolean
    noFollow?: boolean
    ogTitle?: string
    ogDescription?: string
    ogImage?: ImageType
    twitterTitle?: string
    twitterDescription?: string
    twitterImage?: ImageType
    customHeadScript?: string
  }
}

export default function SEO({ seo }: SEOProps) {
  if (!seo) return null

  const {
    metaTitle,
    metaDescription,
    canonicalUrl,
    noIndex,
    noFollow,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    customHeadScript,
  } = seo

  const robots = `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`

  return (
    <>
        <DebugClient data={{seo,metaTitle}} />
    <Head>
      {metaTitle && <title>{metaTitle}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta name="robots" content={robots} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || metaTitle || ''} />
      <meta property="og:description" content={ogDescription || metaDescription || ''} />
      {ogImage?.asset?.url && <meta property="og:image" content={ogImage.asset.url} />}

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || metaTitle || ''} />
      <meta name="twitter:description" content={twitterDescription || metaDescription || ''} />
      {twitterImage?.asset?.url && (
        <meta name="twitter:image" content={twitterImage.asset.url} />
      )}

      {/* Optional Custom Script */}
      {customHeadScript && (
        <script dangerouslySetInnerHTML={{ __html: customHeadScript }} />
      )}
    </Head>
    </>
  )
}
