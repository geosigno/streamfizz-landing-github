import { Metadata } from 'next'

// Base configuration that's consistent across all pages
const BASE_URL = 'https://streamfizz.fr'
const SITE_NAME = 'StreamFizz'
const DEFAULT_IMAGE = `${BASE_URL}/opengraph-image.png`
const DEFAULT_IMAGE_ALT = 'StreamFizz - Plateforme de streaming vidéo française'
const TWITTER_HANDLE = '@streamfizz'

// Default robots configuration
const DEFAULT_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
  },
}

// Default OpenGraph image configuration
const DEFAULT_OG_IMAGE = {
  url: DEFAULT_IMAGE,
  width: 1200,
  height: 630,
  type: 'image/png' as const,
}

export interface MetadataConfig {
  title: string
  description: string
  keywords?: string
  path: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    type?: string
  }
  openGraph?: {
    type?: 'website' | 'article'
    publishedTime?: string
    modifiedTime?: string
    authors?: { name: string; url?: string }[]
    section?: string
    tags?: string[]
  }
  robots?: {
    index?: boolean
    follow?: boolean
  }
  authors?: Array<{
    name: string
    url?: string
  }>
}

export function generateMetadata(config: MetadataConfig): Metadata {
  const {
    title,
    description,
    keywords,
    path,
    image,
    openGraph = {},
    robots = {},
    authors,
  } = config

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const fullUrl = `${BASE_URL}${normalizedPath}`

  // Prepare image configuration
  const imageConfig = image ? {
    url: image.url.startsWith('http') ? image.url : `${BASE_URL}${image.url}`,
    width: image.width || DEFAULT_OG_IMAGE.width,
    height: image.height || DEFAULT_OG_IMAGE.height,
    alt: image.alt || DEFAULT_IMAGE_ALT,
    type: image.type || DEFAULT_OG_IMAGE.type,
  } : {
    ...DEFAULT_OG_IMAGE,
    alt: DEFAULT_IMAGE_ALT,
  }

  // Build metadata object
  const metadata: Metadata = {
    title,
    description,
    ...(keywords && { keywords }),
    ...(authors && { authors }),
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      type: openGraph.type || 'website',
      title,
      description,
      url: fullUrl,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      images: [imageConfig],
      ...(openGraph.publishedTime && { publishedTime: openGraph.publishedTime }),
      ...(openGraph.modifiedTime && { modifiedTime: openGraph.modifiedTime }),
      ...(openGraph.authors && { authors: openGraph.authors }),
      ...(openGraph.section && { section: openGraph.section }),
      ...(openGraph.tags && { tags: openGraph.tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [imageConfig.url],
    },
    robots: {
      ...DEFAULT_ROBOTS,
      ...robots,
      googleBot: {
        ...DEFAULT_ROBOTS.googleBot,
        ...(robots.index !== undefined && { index: robots.index }),
        ...(robots.follow !== undefined && { follow: robots.follow }),
      },
    },
  }

  return metadata
}

// Specific helpers for common page types
export function generatePageMetadata(config: Omit<MetadataConfig, 'openGraph'>) {
  return generateMetadata({
    ...config,
    openGraph: { type: 'website' },
  })
}

export function generateArticleMetadata(config: MetadataConfig & {
  publishedTime: string
  modifiedTime?: string
  authors: string[]
  section?: string
  tags?: string[]
}) {
  return generateMetadata({
    ...config,
    openGraph: {
      type: 'article',
      publishedTime: config.publishedTime,
      modifiedTime: config.modifiedTime,
      authors: config.authors.map(author => ({ name: author })),
      section: config.section,
      tags: config.tags,
    } as any,
  })
}

export function generateLegalMetadata(config: Omit<MetadataConfig, 'openGraph' | 'robots'>) {
  return generateMetadata({
    ...config,
    openGraph: { type: 'website' },
    robots: { index: true, follow: true },
  })
}

// Export constants for use in other files
export { BASE_URL, SITE_NAME, DEFAULT_IMAGE, TWITTER_HANDLE }