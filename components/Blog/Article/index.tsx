'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, Facebook, Linkedin, LinkIcon, Share2, Twitter } from 'lucide-react'
import Image from 'next/image'
import { memo, useEffect, useMemo, useState } from 'react'
import Markdown from 'react-markdown'

import { Skeleton } from '@/components/ui/skeleton'
import { useIsMobile } from '../../../hooks/use-mobile'
import Breadcrumb from '../../Breadcrumb'
import Container from '../../Container'
import CtaSection from '../../CtaSection'
import Title from '../../Title'
import ArticleCard from '../ArticleCard'
import StreamFizzPlayer from '../StreamFizzPlayer'
import { Author, Category, RelatedArticle } from '../_types'

// Simple code block component that loads syntax highlighter on demand
const CodeBlock = ({ language, children }: { language: string; children: string }) => {
  const [SyntaxHighlighter, setSyntaxHighlighter] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)

    const loadSyntaxHighlighter = async () => {
      try {
        const [{ Prism }, { oneDark }] = await Promise.all([
          import('react-syntax-highlighter'),
          import('react-syntax-highlighter/dist/cjs/styles/prism'),
        ])

        if (isMounted) {
          setSyntaxHighlighter(() => ({ Component: Prism, style: oneDark }))
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Failed to load syntax highlighter:', error)
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadSyntaxHighlighter()

    return () => {
      isMounted = false
    }
  }, [])

  if (isLoading || !SyntaxHighlighter) {
    return (
      <div className="bg-gray-900 rounded-xl p-6">
        <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
        <Skeleton className="h-4 w-3/4 mb-2 bg-gray-700" />
        <Skeleton className="h-4 w-1/2 bg-gray-700" />
      </div>
    )
  }

  const { Component, style } = SyntaxHighlighter

  return (
    <Component
      language={language}
      style={style}
      PreTag="div"
      className="rounded-xl shadow-lg text-sm"
      customStyle={{
        padding: '1.5rem',
        borderRadius: '0.75rem',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      }}
    >
      {children}
    </Component>
  )
}

const endpoint = '/cms-images'

// Props for the Article component
interface ArticleProps {
  title: string
  slug: string
  content: any // For BlocksRenderer from Strapi
  excerpt: string
  publishDate: string
  publishedAt: string
  updatedAt?: string
  image?: string
  author: Author
  categories: Category[]
  thumbnail?: {
    alternativeText: string
    url: string
  }
  relatedArticles?: RelatedArticle[] // Added for similar articles section
  readingTime: number
  wordCount: number
}

// Format date function (same as in ArticleCard)
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
  return new Date(dateString).toLocaleDateString('fr-FR', options)
}

// Memoized Markdown component to avoid re-rendering
const MemoizedMarkdown = memo(Markdown)

function Article({
  title,
  slug,
  content,
  excerpt,
  publishDate,
  publishedAt,
  updatedAt,
  author,
  categories,
  thumbnail,
  relatedArticles = [],
  readingTime,
  wordCount,
}: ArticleProps) {
  const [isShareAvailable, setIsShareAvailable] = useState(false)

  const isMobile = useIsMobile()

  // Memoize markdown components to prevent re-creation on every render
  const markdownComponents = useMemo(
    () => ({
      h1: ({ node, ...props }: any) => (
        <h2 className="text-3xl leading-tight font-bold mt-6 mb-4" {...props} />
      ),
      h2: ({ node, ...props }: any) => (
        <h3 className="text-2xl leading-tight font-bold mt-6 mb-4" {...props} />
      ),
      h3: ({ node, ...props }: any) => (
        <h4 className="text-xl leading-tight font-bold mt-6 mb-4" {...props} />
      ),
      p: ({ node, ...props }: any) => (
        <p className="mb-4 text-base leading-relaxed font-default text-gray-700" {...props} />
      ),
      a: ({ node, ...props }: any) => (
        <a
          className="text-primary underline underline-offset-2 decoration-1 hover:decoration-2"
          {...props}
        />
      ),
      ul: ({ node, ...props }: any) => (
        <ul className="list-disc pl-6 mb-4 md:mb-6 space-y-2" {...props} />
      ),
      ol: ({ node, ...props }: any) => (
        <ol className="list-decimal pl-6 mb-4 md:mb-6 space-y-2" {...props} />
      ),
      li: ({ node, ...props }: any) => (
        <li className="pl-2 mb-1 text-gray-700 text-base leading-relaxed font-default" {...props} />
      ),
      strong: ({ node, ...props }: any) => (
        <strong className="font-semibold text-gray-800" {...props} />
      ),
      blockquote: ({ node, ...props }: any) => (
        <blockquote
          className="pl-4 border-l-4 border-purple-300 italic text-gray-700 my-6 py-1"
          {...props}
        />
      ),
      code: ({ node, className, children, ...props }: any) => {
        const match = /language-(\w+)/.exec(className || '')
        const language = match ? match[1] : 'javascript'
        const inline = !match
        const codeContent = String(children).replace(/\n$/, '')

        // Check for StreamFizz Player tag
        const playerMatch = /<Player\s+mediaId=["']([^"']+)["']\s*\/>/.exec(codeContent)

        if (!inline && playerMatch) {
          const mediaId = playerMatch[1]
          return (
            <div className="not-prose w-full my-6">
              <StreamFizzPlayer mediaId={mediaId} />
            </div>
          )
        }

        return !inline ? (
          <div className="relative my-6">
            <CodeBlock language={language}>{codeContent}</CodeBlock>
          </div>
        ) : (
          <code
            className="bg-gray-100 rounded px-1.5 py-1 text-sm font-mono text-purple-700"
            {...props}
          >
            {children}
          </code>
        )
      },
      img: ({ node, ...props }: any) => (
        <Image
          src={typeof props.src === 'string' ? props.src : '/placeholder.svg'}
          alt={props.alt || ''}
          width={800}
          height={450}
          className="rounded-lg shadow-xl max-w-full"
        />
      ),
      hr: ({ node, ...props }: any) => <hr className="my-8 border-t border-gray-200" {...props} />,
    }),
    []
  )

  const copyArticleLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
  }

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: title,
        text: `Découvrez l'article "${title}" sur StreamFizz`,
        url: window.location.href,
      })
    } catch (error) {
      // If user cancels or there's an error, just continue
      console.log('Sharing failed or was cancelled', error)
    }
  }

  useEffect(() => {
    setIsShareAvailable(!!navigator.share)
  }, [])

  // Generate breadcrumb items with category
  const getBreadcrumbItems = () => {
    const items = [{ name: 'Blog', url: '/blog' }]

    // Add primary category if available
    if (categories && categories.length > 0) {
      const primaryCategory = categories[0] // Use first category as primary
      items.push({
        name: primaryCategory.name,
        url: `/blog/category/${primaryCategory.slug}`,
      })
    }

    // Add current article (not clickable as it's the current page)
    items.push({ name: title, url: `/blog/${slug}` })

    return items
  }

  return (
    <div className="relative">
      <Container size="small" classNames="relative">
        {/* Breadcrumb navigation */}
        <div className="mb-8">
          <Breadcrumb items={getBreadcrumbItems()} />
        </div>
        <div className="text-center mb-4 md:mb-6">
          <div className="flex items-center justify-center gap-3 text-gray-500 text-sm">
            <p className="uppercase tracking-wider">{formatDate(publishDate)}</p>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min de lecture</span>
            </div>
          </div>
        </div>

        <Title text={title} level={1} smallMargin />

        <div className="flex items-center justify-center mb-4 md:mb-6">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 border-2 border-purple-200 mr-3">
              <Image
                src={`${endpoint}${author?.avatar?.url || '/placeholder.svg'}`}
                alt={`${author?.firstName} ${author?.lastName}`}
                width={40}
                height={40}
              />
              <AvatarFallback>{author?.firstName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-gray-700 font-medium">
                {author?.firstName} {author?.lastName}
              </div>
              {author?.role && <div className="text-sm text-gray-500">{author.role}</div>}
            </div>
          </div>
        </div>

        {categories.length > 0 && (
          <div className="flex justify-center items-center mb-4 md:mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge key={category.id} style={{ backgroundColor: category.color }}>
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Thumbnail image */}
        {thumbnail?.url && (
          <div className="relative w-full aspect-[16/9] mb-4 md:mb-6 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={`${endpoint}${thumbnail.url || '/placeholder.svg'}`}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 848px"
              priority={true} // Hero image gets priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none mb-12">
          <MemoizedMarkdown components={markdownComponents}>{content}</MemoizedMarkdown>
        </div>

        <div className="flex items-center gap-4 my-12 p-6 bg-gray-50 rounded-xl shadow-sm border">
          <Avatar className="h-16 w-16 border-2 border-purple-200">
            <Image
              src={`${endpoint}${author?.avatar?.url || '/placeholder.svg'}`}
              alt={`${author?.firstName} ${author?.lastName}`}
              width={64}
              height={64}
            />
            <AvatarFallback>{author?.firstName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-gray-800 text-lg">
              {author?.firstName} {author?.lastName}
            </p>
            <p className="text-gray-500">{author?.role}</p>
            <div className="text-sm text-gray-500 mt-1 space-y-1">
              <p>Publié le {formatDate(publishDate)}</p>
              {updatedAt && updatedAt !== publishedAt && (
                <p>Mis à jour le {formatDate(updatedAt)}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12 py-6 border-t border-b">
          <span className="text-gray-600 font-medium">Partager cet article :</span>
          {isShareAvailable && isMobile ? (
            // If Web Share API is available (mainly on mobile), show a single Share button
            <Button
              variant="outline"
              className="rounded-full px-4 py-2 hover:bg-purple-100 hover:text-purple-600 hover:border-purple-300 transition-all"
              onClick={handleNativeShare}
            >
              <Share2 className="h-5 w-5 mr-2" />
              Partager
            </Button>
          ) : (
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-10 w-10 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300 transition-all"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                    '_blank'
                  )
                }
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Partager sur Facebook</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-10 w-10 hover:bg-sky-100 hover:text-sky-500 hover:border-sky-300 transition-all"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`,
                    '_blank'
                  )
                }
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Partager sur Twitter</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-10 w-10 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300 transition-all"
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                    '_blank'
                  )
                }
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">Partager sur LinkedIn</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-10 w-10 hover:bg-gray-100 transition-all"
                onClick={copyArticleLink}
              >
                <LinkIcon className="h-5 w-5" />
                <span className="sr-only">Copier le lien</span>
              </Button>
            </div>
          )}
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <CtaSection
            title="Prêt à simplifier votre usage de la"
            highlightWord="vidéo"
            size="small"
          />
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4 md:mb-6 text-gray-800">Articles similaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard
                  key={relatedArticle.slug}
                  title={relatedArticle.title}
                  slug={relatedArticle.slug}
                  excerpt={relatedArticle.excerpt}
                  publishedAt={relatedArticle.publishedAt}
                  publishDate={relatedArticle.publishDate}
                  author={relatedArticle.author}
                  categories={relatedArticle.categories}
                  thumbnail={relatedArticle.thumbnail}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

// Export memoized Article component
export default memo(Article)
