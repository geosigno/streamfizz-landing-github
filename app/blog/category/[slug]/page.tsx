// app/blog/category/[slug]/page.tsx
import { getArticles, getCategories, getCategory } from '@/lib/strapi'
import { ARTICLES_PER_PAGE } from '@/lib/constants'
import BlogPage from '../../../../components/Blog/BlogPage'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'
import { getCategorySchema } from '@/lib/structured-data'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryPageWrapper({ params }: PageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  try {
    // Get category to verify it exists (with retry logic)
    const categoryData = await getCategory(slug)
    
    if (!categoryData.data || categoryData.data.length === 0) {
      notFound()
    }

    const category = categoryData.data[0]

    // Get articles with category filter (page 1)
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

    // Get categories with fallback
    let categoriesData
    try {
      categoriesData = await getCategories({
        sort: ['order:asc'],
      })
    } catch (error) {
      console.error('Error fetching categories for category page:', error)
      categoriesData = { data: [] } // Fallback to empty array
    }

    // Generate structured data
    const categorySchema = getCategorySchema(category, articlesData.data || [])

    return (
      <>
        {/* JSON-LD structured data using Next.js recommended approach */}
        <PageStructuredData schema={categorySchema} id="category-structured-data" />
        
        <BlogPage
          articles={articlesData.data || []}
          categories={categoriesData.data || []}
          selectedCategory={slug}
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
    console.error('Error fetching category blog data:', error)
    // Instead of notFound(), show a fallback page with basic category info
    return (
      <BlogPage
        articles={[]}
        categories={[]}
        selectedCategory={slug}
        pagination={{
          currentPage: 1,
          totalPages: 1,
          totalArticles: 0,
          articlesPerPage: ARTICLES_PER_PAGE,
        }}
      />
    )
  }
}

// Generate static params for all categories
export async function generateStaticParams() {
  try {
    const categoriesData = await getCategories()
    
    return categoriesData.data.map((category: any) => ({
      slug: category.slug,
    }))
  } catch (error) {
    console.error('Error generating static params for categories:', error)
    // Return known categories as fallback
    return [
      { slug: 'actualites' },
      { slug: 'conseils-et-astuces' },
      { slug: 'marketing' },
      { slug: 'technique' },
    ]
  }
}

// Enable ISR with 60 seconds revalidation
// Static generation at build time only - no ISR
// Content updates via /api/revalidate webhook only

// Enhanced metadata generation for category pages
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  
  try {
    const categoryData = await getCategory(slug)
    const category = categoryData.data?.[0]
    
    if (!category) {
      return generatePageMetadata({
        title: 'Catégorie non trouvée | StreamFizz Blog',
        description: 'La catégorie que vous recherchez n\'existe pas.',
        path: `/blog/category/${slug}`,
        robots: { index: false, follow: false },
      })
    }

    const title = `Articles ${category.name} | StreamFizz Blog`
    const description = `Découvrez tous les articles de la catégorie ${category.name} sur StreamFizz. Conseils, guides et actualités sur le streaming vidéo.`
    const keywords = `streaming vidéo, ${category.name.toLowerCase()}, StreamFizz, blog, articles`
    
    return generatePageMetadata({
      title,
      description,
      keywords,
      path: `/blog/category/${slug}`,
      image: {
        url: '/opengraph-image.png',
        alt: `Articles ${category.name} - StreamFizz Blog`,
      },
    })
  } catch (error) {
    return generatePageMetadata({
      title: 'StreamFizz Blog - Catégorie',
      description: 'Découvrez nos articles sur le streaming vidéo.',
      path: `/blog/category/${slug}`,
      robots: { index: false, follow: true },
    })
  }
}