// studio/schemas/types.ts
export interface Post {
  _type: 'post'
  _id: string
  title: string
  slug: {current: string}
  publishedAt: string
  author?: Author
  body: any[]
}

export interface Author {
  _type: 'author'
  _id: string
  name: string
  bio?: string
  picture?: {asset: {_ref: string}}
}

