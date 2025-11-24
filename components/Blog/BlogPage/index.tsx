'use client'

import Link from 'next/link'
import Container from '../../Container'
import Title from '../../Title'
import { Article, Category } from '../_types'
import ArticleCard from '../ArticleCard'
import CategoryButtons from '../CategoryButtons'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

// Props for the BlogPage component
interface BlogPageProps {
  articles: Article[]
  categories: Category[]
  selectedCategory?: string | null
  pagination?: {
    currentPage: number
    totalPages: number
    totalArticles: number
    articlesPerPage: number
  }
}

export default function BlogPage({ articles, categories, selectedCategory, pagination }: BlogPageProps) {
  // No need for client-side filtering anymore - articles are already filtered server-side
  
  // Helper function to generate pagination URLs based on category context
  const getPaginationUrl = (page: number) => {
    if (selectedCategory) {
      return page === 1 ? `/blog/category/${selectedCategory}` : `/blog/category/${selectedCategory}/page/${page}`
    }
    return page === 1 ? '/blog' : `/blog/page/${page}`
  }


  return (
    <>
      <div className="relative isolate">
        <div className="absolute inset-x-0 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 h-full w-full" />
        <Container classNames="md:px-24 text-center">
          <Title text="Blog StreamFizz" level={1} smallMargin />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos derniers articles, conseils et actualités sur le monde du streaming
          </p>
        </Container>
      </div>
      <Container>
        <div className="text-center mb-12">
          {/* Use the new CategoryButtons component */}
          <CategoryButtons
            categories={categories}
            selectedCategory={selectedCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-16 gap-8">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                slug={article.slug}
                excerpt={article.excerpt}
                publishedAt={article.publishedAt}
                publishDate={article.publishDate}
                author={article.author}
                categories={article.categories}
                thumbnail={article.thumbnail}
                priority={index < 3} // First 3 articles get priority loading
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">Aucun article trouvé.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <Pagination>
              <PaginationContent>
                {/* Previous page */}
                {pagination.currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      href={getPaginationUrl(pagination.currentPage - 1)}
                    />
                  </PaginationItem>
                )}

                {/* Page numbers */}
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage = page === 1 || 
                                   page === pagination.totalPages || 
                                   Math.abs(page - pagination.currentPage) <= 1

                  if (!showPage) {
                    // Show ellipsis if there's a gap
                    if (page === 2 && pagination.currentPage > 4) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )
                    }
                    if (page === pagination.totalPages - 1 && pagination.currentPage < pagination.totalPages - 3) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )
                    }
                    return null
                  }

                  return (
                    <PaginationItem key={page}>
                      <PaginationLink 
                        href={getPaginationUrl(page)}
                        isActive={page === pagination.currentPage}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                })}

                {/* Next page */}
                {pagination.currentPage < pagination.totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      href={getPaginationUrl(pagination.currentPage + 1)}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </Container>
    </>
  )
}
