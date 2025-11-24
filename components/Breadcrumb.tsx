import Link from 'next/link'
import Script from 'next/script'
import { Home } from 'lucide-react'
import { getBreadcrumbSchema } from '@/lib/structured-data'
import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadcrumbItemType {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItemType[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Use the provided items directly without adding home
  const allItems: BreadcrumbItemType[] = items

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://streamfizz.fr'
  const fullItems = allItems.map(item => ({
    name: item.name,
    url: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
  }))

  return (
    <>
      {/* JSON-LD structured data for breadcrumbs using Next.js recommended approach */}
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(fullItems))
        }}
      />
      
      {/* Visual breadcrumb navigation using shadcn/ui components */}
      <div className={`flex justify-center ${className}`}>
        <ShadcnBreadcrumb>
          <BreadcrumbList>
            {allItems.map((item, index) => (
              <div key={item.url} className="flex items-center">
                <BreadcrumbItem>
                  {index === allItems.length - 1 ? (
                    // Current page (not clickable)
                    <BreadcrumbPage className="flex items-center max-w-md truncate" title={item.name}>
                      {index === 0 && <Home className="h-4 w-4 mr-1 flex-shrink-0" />}
                      <span className="truncate">{item.name}</span>
                    </BreadcrumbPage>
                  ) : (
                    // Clickable breadcrumb items
                    <BreadcrumbLink asChild>
                      <Link href={item.url} className="flex items-center">
                        {index === 0 && <Home className="h-4 w-4 mr-1 flex-shrink-0" />}
                        <span className="truncate">{item.name}</span>
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < allItems.length - 1 && <BreadcrumbSeparator />}
              </div>
            ))}
          </BreadcrumbList>
        </ShadcnBreadcrumb>
      </div>
    </>
  )
}