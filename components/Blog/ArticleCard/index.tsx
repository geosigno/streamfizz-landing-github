import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import { Card, CardContent } from '../../ui/card'

const endpoint = '/cms-images'

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
  return new Date(dateString).toLocaleDateString('fr-FR', options)
}

const ArticleCard = ({
  title,
  slug,
  excerpt,
  publishedAt,
  publishDate,
  author,
  categories,
  thumbnail,
  priority = false,
}: {
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  publishDate: string
  author: {
    firstName: string
    lastName: string
    avatar?: {
      alternativeText: string
      url: string
    }
  }
  categories: { id: number; name: string; slug: string; color: string }[]
  thumbnail?: {
    alternativeText: string
    url: string
  }
  priority?: boolean
}) => (
  <Link href={`/blog/${slug}`}>
    <Card className="h-full overflow-hidden bg-background-muted rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        {thumbnail?.url && (
          <Image
            src={`${endpoint}${thumbnail.url || '/placeholder.svg'}`}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        )}
        <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end">
          {categories.map((category) => (
            <Badge key={category.id} style={{ backgroundColor: category.color }}>
              {category.name}
            </Badge>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-white/50">
                <Image
                  src={`${endpoint}${author?.avatar?.url || '/placeholder.svg'}`}
                  alt={`${author?.firstName} ${author?.lastName}`}
                  width={30}
                  height={30}
                />
                <AvatarFallback className="text-xs">{author?.firstName.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-white">
                {author?.firstName} {author?.lastName}
              </span>
            </div>
            <div className="flex items-center text-sm text-white/90">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(publishDate)}</span>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-4 line-clamp-3 leading-[1.3]">{title}</h2>
        <p className="text-gray-600 line-clamp-3 mb-2 text-sm">{excerpt}</p>
        <div className="mt-auto pt-4">
          <Button
            variant="link"
            size={'sm'}
            className="text-sm text-center font-semibold p-0"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = `/blog/${slug}`
            }}
          >
            Lire l'article
          </Button>
        </div>
      </CardContent>
    </Card>
  </Link>
)

export default memo(ArticleCard)
