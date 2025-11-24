export type Author = {
  firstName: string
  lastName: string
  role: string
  avatar?: {
    alternativeText: string
    url: string
  }
}

export type Category = {
  id: number
  name: string
  slug: string
  color: string
}

export type RelatedArticle = {
  id: number
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  publishDate: string
  image?: string
  author: Author
  categories: Category[]
  thumbnail?: {
    alternativeText: string
    url: string
  }
}

export type Article = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  publishDate: string
  publishedAt: string
  updatedAt: string
  image?: string // Direct image URL
  author: {
    firstName: string
    lastName: string
    avatar?: {
      alternativeText: string
      url: string
    }
  }
  thumbnail?: {
    alternativeText: string
    url: string
  }
  categories: Category[] // Array of categories
}
