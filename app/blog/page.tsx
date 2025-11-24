// app/blog/page.tsx
import { getArticles, getCategories } from '@/lib/strapi'
import { ARTICLES_PER_PAGE } from '@/lib/constants'
import { notFound } from 'next/navigation'
import BlogPage from '../../components/Blog/BlogPage'
import { getBlogListingSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'

export default async function BlogPageWrapper() {
  try {
    // Get articles with pagination (page 1)
    const articlesData = await getArticles({
      sort: ['publishDate:desc'],
      pagination: {
        page: 1,
        pageSize: ARTICLES_PER_PAGE,
      },
      populate: {
        author: {
          populate: ['avatar'],
        },
        categories: true,
        thumbnail: true,
      },
    })

    const totalArticles = articlesData.meta?.pagination?.total || 0
    const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)

    const categoriesData = await getCategories({
      sort: ['order:asc'],
    })

    // Generate structured data
    const blogSchema = getBlogListingSchema(articlesData.data || [], 1)

    return (
      <>
        <PageStructuredData 
          schema={blogSchema}
          id="blog-listing-structured-data"
        />
        
        <BlogPage
          articles={articlesData.data || []}
          categories={categoriesData.data || []}
          pagination={{
            currentPage: 1,
            totalPages,
            totalArticles,
            articlesPerPage: ARTICLES_PER_PAGE,
          }}
        />
      </>
    )
  } catch (error) {
    console.error('Error fetching blog data:', error)
    
    // Return empty state instead of 404 - let static generation handle it    
    return (
      <>
        <PageStructuredData 
          schema={{}}
          id="blog-listing-error-structured-data"
          includeOrganization={true}
        />
        
        <BlogPage
          articles={[]}
          categories={[]}
          pagination={{
            currentPage: 1,
            totalPages: 0,
            totalArticles: 0,
            articlesPerPage: ARTICLES_PER_PAGE,
          }}
        />
      </>
    )
  }
}

// Static generation at build time only - no ISR
// Content updates via /api/revalidate webhook only

// Metadata for blog listing page
export const metadata = generatePageMetadata({
  title: 'Blog StreamFizz | Articles sur le streaming vidéo',
  description: 'Découvrez nos derniers articles, conseils et actualités sur le monde du streaming vidéo. Guides techniques, bonnes pratiques et tendances du secteur.',
  keywords: 'streaming vidéo, blog, articles, conseils, guides, plateforme vidéo, diffusion en direct',
  path: '/blog',
})
