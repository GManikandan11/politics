import '@sanity/client'

declare module '@sanity/client' {
  interface BaseQueryOptions {
    cache?: RequestCache
    next?: { revalidate?: number | false; tags?: string[] }
  }
}
