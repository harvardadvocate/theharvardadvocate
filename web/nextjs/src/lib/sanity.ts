import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: "sierqf4e",
  dataset: "production",
  useCdn: true,
  apiVersion: '2024-01-01', // Use current date
})

// Image URL builder for Sanity images
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Re-export commonly used types
export type SanityImage = {
  asset: {
    _id: string
    url: string
  }
}

export type Author = {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: SanityImage
  bio?: string
}

export type Section = {
  _id: string
  title: string
  slug: {
    current: string
  }
}

export type Issue = {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  description?: string
  frontCover: SanityImage
  backCover?: SanityImage
  toc?: SanityImage
}

export type ContentItem = {
  _id: string
  title: string
  slug: {
    current: string
  }
  body: any
  publishedAt: string
  authors: Author[]
  issue: Issue
  sections: Section[]
  mainImage?: SanityImage
  images?: SanityImage[]
  vimeoLink?: string
  featuredOptions?: string[]
} 