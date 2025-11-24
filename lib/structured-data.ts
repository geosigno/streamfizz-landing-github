import { Article, Author, Category } from '@/components/Blog/_types'

// Organization schema for StreamFizz
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'StreamFizz',
  url: 'https://streamfizz.fr',
  logo: {
    '@type': 'ImageObject',
    url: 'https://streamfizz.fr/logo.png',
    width: 512,
    height: 512,
  },
  description: 'Plateforme française de streaming vidéo pour les entreprises et les créateurs',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '56 Avenue Henri Ginoux',
    addressLocality: 'Montrouge',
    postalCode: '92120',
    addressCountry: 'FR',
  },
  sameAs: [
    'https://www.linkedin.com/company/streamfizz',
    'https://twitter.com/streamfizz',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33-4-89-83-65-00',
    email: 'contact@streamfizz.fr',
    contactType: 'Customer Service',
    availableLanguage: 'French',
  },
  foundingDate: '2023',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 50,
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
})

// Person schema for article authors
export const getPersonSchema = (author: Author) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: `${author.firstName} ${author.lastName}`,
  jobTitle: author.role || 'Auteur',
  image: author.avatar?.url 
    ? `${process.env.NEXT_PUBLIC_URL}/cms-images${author.avatar.url}`
    : undefined,
  worksFor: {
    '@type': 'Organization',
    name: 'StreamFizz',
  },
})

// Calculate reading time based on content
export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Get word count from content
export const getWordCount = (content: string): number => {
  return content.split(/\s+/).length
}

// Article schema with full SEO optimization
export const getArticleSchema = (article: {
  title: string
  slug: string
  content: string
  excerpt: string
  publishedAt: string
  publishDate: string
  updatedAt?: string
  author: Author
  categories: Category[]
  thumbnail?: {
    alternativeText: string
    url: string
    width?: number
    height?: number
  }
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://streamfizz.fr'
  const articleUrl = `${baseUrl}/blog/${article.slug}`
  const readingTime = calculateReadingTime(article.content)
  const wordCount = getWordCount(article.content)

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    url: articleUrl,
    datePublished: new Date(article.publishedAt || article.publishDate).toISOString(),
    dateModified: article.updatedAt 
      ? new Date(article.updatedAt).toISOString()
      : new Date(article.publishedAt || article.publishDate).toISOString(),
    author: {
      '@type': 'Person',
      name: `${article.author.firstName} ${article.author.lastName}`,
      jobTitle: article.author.role || 'Auteur',
      image: article.author.avatar?.url 
        ? `${baseUrl}/cms-images${article.author.avatar.url}`
        : undefined,
    },
    publisher: {
      '@type': 'Organization',
      name: 'StreamFizz',
      url: 'https://streamfizz.fr',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    image: article.thumbnail?.url ? {
      '@type': 'ImageObject',
      url: `${baseUrl}/cms-images${article.thumbnail.url}`,
      width: article.thumbnail.width || 1200,
      height: article.thumbnail.height || 630,
      alt: article.thumbnail.alternativeText || article.title,
    } : undefined,
    articleSection: article.categories.map(cat => cat.name),
    keywords: article.categories.map(cat => cat.name).join(', '),
    wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: 'fr-FR',
    isAccessibleForFree: true,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  }
}

// Breadcrumb schema for navigation
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

// Blog listing page schema
export const getBlogListingSchema = (articles: Article[], currentPage: number = 1) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://streamfizz.fr'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog StreamFizz',
    description: 'Découvrez nos derniers articles, conseils et actualités sur le monde du streaming',
    url: `${baseUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'StreamFizz',
    },
    blogPost: articles.map(article => ({
      '@type': 'BlogPosting',
      headline: article.title,
      url: `${baseUrl}/blog/${article.slug}`,
      datePublished: new Date(article.publishedAt || article.publishDate).toISOString(),
      author: {
        '@type': 'Person',
        name: `${article.author.firstName} ${article.author.lastName}`,
      },
      image: article.thumbnail?.url 
        ? `${baseUrl}/cms-images${article.thumbnail.url}`
        : undefined,
    })),
  }
}

// Category page schema
export const getCategorySchema = (category: Category, articles: Article[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://streamfizz.fr'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Articles de la catégorie ${category.name}`,
    description: `Tous les articles de la catégorie ${category.name} sur StreamFizz`,
    url: `${baseUrl}/blog/category/${category.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: article.title,
          url: `${baseUrl}/blog/${article.slug}`,
          datePublished: new Date(article.publishedAt || article.publishDate).toISOString(),
        },
      })),
    },
  }
}

// Homepage schema with services and company info
export const getHomepageSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://streamfizz.fr'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StreamFizz',
    url: baseUrl,
    description: 'Plateforme française de streaming vidéo pour les entreprises et les créateurs. Solutions professionnelles de diffusion en direct et d\'hébergement média.',
    publisher: getOrganizationSchema(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    mainEntity: {
      '@type': 'Service',
      name: 'Solutions de streaming vidéo professionnel',
      description: 'Services complets de diffusion en direct, hébergement média et plateforme vidéo pour entreprises',
      provider: getOrganizationSchema(),
      serviceType: 'Streaming Video Platform',
      areaServed: {
        '@type': 'Country',
        name: 'France',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Solutions StreamFizz',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Hébergement média',
            description: 'Solution d\'hébergement et de gestion de bibliothèque vidéo',
            category: 'Video Hosting',
          },
          {
            '@type': 'Offer', 
            name: 'Diffusion en direct',
            description: 'Plateforme de streaming en direct haute qualité',
            category: 'Live Streaming',
          },
        ],
      },
    },
  }
}

// Pricing page schema
export const getPricingSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://streamfizz.fr'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Tarifs StreamFizz - Solutions de streaming vidéo',
    description: 'Découvrez nos tarifs pour l\'hébergement média et la diffusion en direct. Solutions flexibles adaptées à vos besoins.',
    url: `${baseUrl}/prix`,
    mainEntity: {
      '@type': 'PriceSpecification',
      name: 'Tarifs StreamFizz',
      description: 'Grille tarifaire complète pour les solutions de streaming vidéo',
      priceCurrency: 'EUR',
      eligibleRegion: {
        '@type': 'Country',
        name: 'France',
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tarifs',
          item: `${baseUrl}/prix`,
        },
      ],
    },
  }
}

// Use case page schema
export const getUseCaseSchema = (title: string, description: string, slug: string, publishedDate?: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://streamfizz.fr'
  const currentDate = new Date().toISOString()
  const pubDate = publishedDate || '2023-01-01T00:00:00Z' // StreamFizz founding year
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `${baseUrl}/cas-usages/${slug}`,
    mainEntity: {
      '@type': 'Article',
      headline: title,
      description: description,
      url: `${baseUrl}/cas-usages/${slug}`,
      author: getOrganizationSchema(),
      publisher: getOrganizationSchema(),
      datePublished: pubDate,
      dateModified: currentDate,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Cas d\'usage',
          item: `${baseUrl}/cas-usages`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: `${baseUrl}/cas-usages/${slug}`,
        },
      ],
    },
  }
}

// Legal page schema
export const getLegalPageSchema = (title: string, description: string, slug: string, publishedDate?: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://streamfizz.fr'
  const currentDate = new Date().toISOString()
  const pubDate = publishedDate || '2023-06-01T00:00:00Z' // Realistic legal documents date
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: `${baseUrl}/legal/${slug}`,
    mainEntity: {
      '@type': 'Article',
      headline: title,
      description: description,
      url: `${baseUrl}/legal/${slug}`,
      author: getOrganizationSchema(),
      publisher: getOrganizationSchema(),
      datePublished: pubDate,
      dateModified: currentDate,
      articleSection: 'Legal',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Mentions légales',
          item: `${baseUrl}/legal/${slug}`,
        },
      ],
    },
  }
}