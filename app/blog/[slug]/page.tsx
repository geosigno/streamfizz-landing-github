// app/blog/[slug]/page.tsx

import Article from '@/components/Blog/Article'
import { getArticle, getArticles } from '@/lib/strapi'
import { notFound } from 'next/navigation'
import { Article as ArticleType, Category } from '../../../components/Blog/_types'
import { getArticleSchema, calculateReadingTime, getWordCount } from '@/lib/structured-data'
import { generateArticleMetadata, BASE_URL } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'

export async function generateStaticParams() {
  try {
    const articlesData = await getArticles({
      fields: ['slug'],
      pagination: {
        pageSize: 100, // Use a large page size instead of limit: -1
      },
    })

    return articlesData.data.map((article: ArticleType) => ({
      slug: article.slug,
    }))
  } catch (error) {
    console.error('Error generating static params for blog articles:', JSON.stringify(error))
    return []
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  try {
    const articleData = await getArticle(slug, {
      populate: {
        thumbnail: {
          populate: '*',
        },
        author: {
          populate: ['avatar'],
        },
        categories: {
          populate: '*',
        },
      },
    })

    // Check if article exists
    if (!articleData.data || articleData.data.length === 0) {
      return notFound()
    }

    const article = articleData.data[0]

    // Fetch related articles based on categories
    const categorySlugs = article.categories.map((cat: Category) => cat.slug)

    let relatedArticles = []
    if (categorySlugs.length > 0) {
      const relatedArticlesData = await getArticles({
        filters: {
          categories: {
            slug: {
              $in: categorySlugs,
            },
          },
          id: {
            $ne: article.id,
          },
        },
        pagination: {
          limit: 2,
        },
        populate: {
          thumbnail: true,
          author: {
            populate: ['avatar'],
          },
          categories: true,
        },
      })

      if (relatedArticlesData.data) {
        relatedArticles = relatedArticlesData.data
      }
    }

    // Generate structured data for the article
    const structuredData = getArticleSchema({
      title: article.title,
      slug: article.slug,
      content: article.content,
      excerpt: article.excerpt,
      publishedAt: article.publishedAt,
      publishDate: article.publishDate,
      updatedAt: article.updatedAt,
      author: article.author,
      categories: article.categories,
      thumbnail: article.thumbnail,
    })

    return (
      <>
        <PageStructuredData 
          schema={structuredData}
          id="article-structured-data"
          includeOrganization={false}
        />
        
        <Article
          title={article.title}
          slug={article.slug}
          content={article.content}
          excerpt={article.excerpt}
          publishedAt={article.publishedAt}
          publishDate={article.publishDate}
          updatedAt={article.updatedAt}
          image={article.image}
          author={article.author}
          categories={article.categories}
          thumbnail={article.thumbnail}
          relatedArticles={relatedArticles}
          readingTime={calculateReadingTime(article.content)}
          wordCount={getWordCount(article.content)}
        />
      </>
    )
  } catch (error) {
    console.error('Error fetching article:', error)
    return notFound()
  }
}

// Enable ISR with 60 seconds revalidation
// Static generation at build time only - no ISR
// Content updates via /api/revalidate webhook only

// Enhanced metadata generation for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  try {
    const articleData = await getArticle(slug, {
      populate: {
        thumbnail: true,
        author: {
          populate: ['avatar'],
        },
        categories: true,
      },
    })

    if (!articleData.data || articleData.data.length === 0) {
      return {
        title: 'Article non trouvé | StreamFizz Blog',
        description: "L'article que vous recherchez n'existe pas.",
        robots: {
          index: false,
          follow: false,
        },
      }
    }

    const article = articleData.data[0]
    
    // Optimize meta description
    const metaDescription = article.excerpt && article.excerpt.length > 0 
      ? article.excerpt.length > 160 
        ? `${article.excerpt.substring(0, 157)}...`
        : article.excerpt
      : `Découvrez l'article "${article.title}" sur StreamFizz - Votre plateforme de streaming vidéo française.`

    return generateArticleMetadata({
      title: `${article.title} | StreamFizz Blog`,
      description: metaDescription,
      keywords: article.categories?.map((cat: Category) => cat.name).join(', '),
      path: `/blog/${article.slug}`,
      publishedTime: article.publishedAt || article.publishDate,
      modifiedTime: article.updatedAt || article.publishedAt || article.publishDate,
      authors: [`${article.author.firstName} ${article.author.lastName}`] as any,
      section: article.categories?.[0]?.name,
      tags: article.categories?.map((cat: Category) => cat.name),
      image: article.thumbnail ? {
        url: `${BASE_URL}/cms-images${article.thumbnail.url}`,
        alt: article.thumbnail.alternativeText || article.title,
        type: 'image/jpeg',
      } : undefined,
    })
  } catch (error) {
    return {
      title: 'StreamFizz Blog',
      description: 'Découvrez nos derniers articles sur le streaming',
    }
  }
}
