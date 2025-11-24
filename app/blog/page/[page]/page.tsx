// app/blog/page/[page]/page.tsx
import { getArticles, getCategories } from '@/lib/strapi'
import { ARTICLES_PER_PAGE } from '@/lib/constants'
import { notFound } from 'next/navigation'
import BlogPage from '../../../../components/Blog/BlogPage'
import { generatePageMetadata } from '@/lib/metadata'

interface PageProps {
  params: Promise<{
    page: string
  }>
}

export default async function BlogPageWrapper({ params }: PageProps) {
  const resolvedParams = await params
  const page = parseInt(resolvedParams.page)

  if (isNaN(page) || page < 1) {
    notFound()
  }

  // Redirect page 1 to /blog
  if (page === 1) {
    notFound() // Or redirect, but since we're using static generation, 404 is better
  }

  try {
    // Get articles with pagination
    const articlesData = await getArticles({
      sort: ['publishDate:desc'],
      pagination: {
        page,
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

    // Check if page exists
    if (page > totalPages && totalPages > 0) {
      notFound()
    }

    // If no articles at all, show empty page
    if (totalArticles === 0 && page > 1) {
      notFound()
    }

    const categoriesData = await getCategories({
      sort: ['order:asc'],
    })

    return (
      <BlogPage
        articles={articlesData.data || []}
        categories={categoriesData.data || []}
        pagination={{
          currentPage: page,
          totalPages,
          totalArticles,
          articlesPerPage: ARTICLES_PER_PAGE,
        }}
      />
    )
  } catch (error) {
    console.error('Error fetching blog data:', error)
    notFound()
  }
}

// Enable ISR with 60 seconds revalidation
// Static generation at build time only - no ISR
// Content updates via /api/revalidate webhook only

// Generate static params for all pages at build time (excluding page 1)
export async function generateStaticParams() {
  try {
    const articlesData = await getArticles({
      pagination: { pageSize: 1 },
    })

    const totalArticles = articlesData.meta?.pagination?.total || 0
    const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)

    const params = []
    // Start from page 2 since page 1 is handled by /blog
    for (let i = 2; i <= totalPages; i++) {
      params.push({ page: i.toString() })
    }

    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    return [{ page: '2' }] // Fallback to page 2
  }
}

// Enhanced metadata for pagination pages
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const page = parseInt(resolvedParams.page)
  
  if (isNaN(page) || page < 1) {
    return generatePageMetadata({
      title: 'Page non trouvée | StreamFizz Blog',
      description: 'La page que vous recherchez n\'existe pas.',
      path: `/blog/page/${resolvedParams.page}`,
      robots: { index: false, follow: false },
    })
  }

  const title = `Blog StreamFizz - Page ${page}`
  const description = `Découvrez nos derniers articles, conseils et actualités sur le monde du streaming vidéo - Page ${page}`
  const keywords = 'streaming vidéo, blog, articles, conseils, actualités, StreamFizz'

  return generatePageMetadata({
    title,
    description,
    keywords,
    path: `/blog/page/${page}`,
    robots: {
      index: page <= 5, // Only index first 5 pagination pages
      follow: true,
    },
  })
}
