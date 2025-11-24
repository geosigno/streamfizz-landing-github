import { MetadataRoute } from 'next'
import { Article } from '../components/Blog/_types'
import { getArticles, getCategories } from '../lib/strapi'
import { ARTICLES_PER_PAGE } from '../lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://streamfizz.fr'

  // Date de dernière modification
  const currentDate = new Date().toISOString()

  // Routes principales
  const mainRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/prix`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Cas d'usages
  const casUsagesRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/cas-usages/evenement-en-direct`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cas-usages/communication-entreprises`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cas-usages/e-learning-formation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cas-usages/valorisation-patrimoine-audiovisuel`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Pages légales
  const legalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/legal/mentions-legal`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/cgu`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/politique-de-confidentialite`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Blog main page
  const blogMainRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Blog articles - fetch all with pagination loop (restored full logic)
  let blogArticleRoutes: MetadataRoute.Sitemap = []
  try {
    let allArticles: Article[] = []
    let page = 1
    const pageSize = 100 // Strapi's maximum per request
    let hasMore = true

    while (hasMore) {
      const articlesData = await getArticles({
        fields: ['slug', 'publishedAt', 'updatedAt'],
        pagination: {
          page: page,
          pageSize: pageSize,
        },
      })

      if (articlesData.data && articlesData.data.length > 0) {
        allArticles.push(...articlesData.data)
        
        // Check if there are more pages
        const pagination = articlesData.meta?.pagination
        hasMore = page < (pagination?.pageCount || 0)
        page++
      } else {
        hasMore = false
      }
    }

    blogArticleRoutes = allArticles.map((article: Article) => {
      const lastModified = article.updatedAt || article.publishedAt
      
      // Higher priority for recent articles
      const articleDate = new Date(article.publishedAt)
      const monthsOld = (Date.now() - articleDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
      const priority = monthsOld < 1 ? 0.8 : monthsOld < 6 ? 0.7 : 0.6

      return {
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: new Date(lastModified).toISOString(),
        changeFrequency: monthsOld < 1 ? 'weekly' as const : 'monthly' as const,
        priority,
      }
    })
  } catch (error) {
    console.error('Error fetching blog articles for sitemap:', error)
  }

  // Blog categories
  let blogCategoryRoutes: MetadataRoute.Sitemap = []
  try {
    const categoriesData = await getCategories()
    
    if (categoriesData.data) {
      blogCategoryRoutes = categoriesData.data.map((category: any) => ({
        url: `${baseUrl}/blog/category/${category.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching blog categories for sitemap:', error)
  }

  // Blog pagination pages - restored full logic
  let blogPaginationRoutes: MetadataRoute.Sitemap = []
  try {
    // Get total articles count for main blog pagination
    const totalArticlesData = await getArticles({
      pagination: { pageSize: 1 },
    })
    const totalArticles = totalArticlesData.meta?.pagination?.total || 0
    const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)
    
    // Add main blog pagination pages (starting from page 2)
    for (let page = 2; page <= totalPages; page++) {
      blogPaginationRoutes.push({
        url: `${baseUrl}/blog/page/${page}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: Math.max(0.4, 0.7 - (page * 0.05)), // Decreasing priority but more gradual
      })
    }

    // Add category pagination pages - restored this logic
    const categoriesData = await getCategories()
    if (categoriesData.data) {
      for (const category of categoriesData.data) {
        const categoryArticlesData = await getArticles({
          filters: {
            categories: {
              slug: {
                $eq: category.slug,
              },
            },
          },
          pagination: { pageSize: 1 },
        })
        
        const categoryTotalArticles = categoryArticlesData.meta?.pagination?.total || 0
        const categoryTotalPages = Math.ceil(categoryTotalArticles / ARTICLES_PER_PAGE)
        
        // Add category pagination pages (starting from page 2)
        for (let page = 2; page <= categoryTotalPages; page++) {
          blogPaginationRoutes.push({
            url: `${baseUrl}/blog/category/${category.slug}/page/${page}`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: Math.max(0.3, 0.6 - (page * 0.05)), // Lower priority than main pagination
          })
        }
      }
    }
  } catch (error) {
    console.error('Error generating blog pagination routes for sitemap:', error)
  }

  return [
    ...mainRoutes,
    ...casUsagesRoutes,
    ...legalRoutes,
    ...blogMainRoutes,
    ...blogArticleRoutes,
    ...blogCategoryRoutes,
    ...blogPaginationRoutes,
  ]
}
