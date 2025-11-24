// app/blog/category/[slug]/page/[page]/page.tsx
import { getArticles, getCategories, getCategory } from '@/lib/strapi'
import { ARTICLES_PER_PAGE } from '@/lib/constants'
import BlogPage from '../../../../../../components/Blog/BlogPage'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/metadata'

interface PageProps {
  params: Promise<{
    slug: string
    page: string
  }>
}

export default async function CategoryPageWrapper({ params }: PageProps) {
  const resolvedParams = await params
  const { slug, page: pageParam } = resolvedParams
  const page = parseInt(pageParam)

  if (isNaN(page) || page < 1) {
    notFound()
  }

  // Redirect page 1 to /blog/category/[slug]
  if (page === 1) {
    notFound()
  }

  try {
    // Get category to verify it exists
    const categoryData = await getCategory(slug)
    
    if (!categoryData.data || categoryData.data.length === 0) {
      notFound()
    }

    const category = categoryData.data[0]

    // Get articles with category filter and pagination
    const articlesData = await getArticles({
      sort: ['publishDate:desc'],
      filters: {
        categories: {
          slug: {
            $eq: slug,
          },
        },
      },
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

    const categoriesData = await getCategories({
      sort: ['order:asc'],
    })

    return (
      <BlogPage
        articles={articlesData.data || []}
        categories={categoriesData.data || []}
        selectedCategory={slug}
        pagination={{
          currentPage: page,
          totalPages,
          totalArticles,
          articlesPerPage: ARTICLES_PER_PAGE,
        }}
      />
    )
  } catch (error) {
    console.error('Error fetching category blog data:', error)
    notFound()
  }
}

// Enable ISR with 60 seconds revalidation
// Static generation at build time only - no ISR
// Content updates via /api/revalidate webhook only

// Generate static params for all category pages (excluding page 1)
export async function generateStaticParams() {
  try {
    const categoriesData = await getCategories()
    const params = []

    for (const category of categoriesData.data) {
      // Get total articles for this category
      const articlesData = await getArticles({
        filters: {
          categories: {
            slug: {
              $eq: category.slug,
            },
          },
        },
        pagination: { pageSize: 1 },
      })

      const totalArticles = articlesData.meta?.pagination?.total || 0
      const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)

      // Generate pages 2+ for this category
      for (let i = 2; i <= totalPages; i++) {
        params.push({
          slug: category.slug,
          page: i.toString(),
        })
      }
    }

    return params
  } catch (error) {
    console.error('Error generating static params for category pages:', error)
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const { slug, page } = resolvedParams
  
  try {
    const categoryData = await getCategory(slug)
    const category = categoryData.data?.[0]
    
    const title = `Blog StreamFizz - ${category?.name || 'Catégorie'} - Page ${page}`
    const description = `Découvrez tous les articles de la catégorie ${category?.name || 'cette catégorie'} sur StreamFizz - Page ${page}`
    const keywords = `streaming vidéo, ${category?.name?.toLowerCase() || 'catégorie'}, StreamFizz, blog, articles, page ${page}`
    
    return generatePageMetadata({
      title,
      description,
      keywords,
      path: `/blog/category/${slug}/page/${page}`,
      image: {
        url: '/opengraph-image.png',
        alt: `${category?.name || 'Catégorie'} - StreamFizz Blog - Page ${page}`,
      },
    })
  } catch (error) {
    return generatePageMetadata({
      title: `Blog StreamFizz - Catégorie - Page ${page}`,
      description: `Découvrez tous les articles de cette catégorie sur StreamFizz - Page ${page}`,
      path: `/blog/category/${slug}/page/${page}`,
      keywords: `streaming vidéo, blog, articles, page ${page}`,
    })
  }
}