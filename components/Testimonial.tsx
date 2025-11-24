// components/Testimonial.tsx
import Image from 'next/image'
import { ReactNode } from 'react'
import { Button } from './ui/button'

export interface TestimonialAuthor {
  name: string
  role: string
  image?: string
  companyLogo: string
  company?: string
  companyUrl?: string
  companyColor?: string
}

type TestimonialProps = {
  content: string | ReactNode
  author: TestimonialAuthor
}

export default function Testimonial({ content, author }: TestimonialProps) {
  return (
    <div className="bg-background-muted border border-gray-100 rounded-2xl p-6 pb-4 pt-8 shadow relative h-full flex flex-col justify-between">
      <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-6">
        <svg width="45" height="36" className="fill-current opacity-10">
          <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
        </svg>
      </div>

      {/* Content at the top */}
      <div>
        <p className="leading-relaxed mb-4">{content}</p>
      </div>

      {/* Author info at the bottom */}
      <div className="mt-auto">
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4">
            {author.image && (
              <div className="w-12 h-12 rounded-full overflow-hidden bg-background-foreground flex-shrink-0">
                <Image
                  src={author.image || '/placeholder.svg'}
                  alt={author.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {/* Author name and role */}
            <div>
              <h4 className="font-medium text-base">{author.name}</h4>
              <p className="text-muted-foreground text-sm">
                {author.role}
                {author.company && (
                  <span className="text-muted-foreground text-sm font-light">
                    {' '}
                    @{' '}
                    <Button
                      variant="ghost"
                      size={'sm'}
                      asChild
                      className="rounded-full"
                      style={{
                        color: author.companyColor || '#7545ae',
                      }}
                    >
                      <a href={author.companyUrl} target="_blank" rel="noopener noreferrer">
                        {author.company}
                      </a>
                    </Button>
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 hidden md:block">
            <Image
              src={author.companyLogo || '/placeholder.svg'}
              alt="Logo entreprise"
              width={80}
              height={40}
              className="h-10 w-auto object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
