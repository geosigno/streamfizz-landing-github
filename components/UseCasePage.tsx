// components/UseCasePage.tsx

import { LucideIcon } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import Container from './Container'
import { FeatureItemProps } from './FeatureItem'
import { TestimonialAuthor } from './Testimonial'
const CtaSection = dynamic(() => import('./CtaSection'))
const FeatureCard = dynamic(() => import('./FeatureCard'))
const FeatureItem = dynamic(() => import('./FeatureItem'))
const Testimonial = dynamic(() => import('./Testimonial'))

// Types for our component props
type Feature = {
  icon: LucideIcon
  iconColor: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

type UseCaseFeature = FeatureItemProps & {
  imageSrc: any
  imageAlt: string
}

type UseCasePageProps = {
  title: string
  introduction: string
  introductionBold?: string
  features: UseCaseFeature[]
  testimonial?: {
    content: string
    author: TestimonialAuthor
  }
  ctaTitle: string
  ctaHighlightWord: string
  ctaColor: 'orange' | 'blue' | 'red' | 'green'
}

export default function UseCasePage({
  title,
  introduction,
  introductionBold,
  features,
  testimonial,
  ctaTitle,
  ctaHighlightWord,
  ctaColor = 'orange',
}: UseCasePageProps) {
  const midpoint = Math.ceil(features.length / 2)

  const handleClickCTA = () => {
    console.log('Try free button clicked')
  }

  return (
    <div>
      <div className="relative isolate">
        <div className="absolute inset-x-0 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 h-full w-full" />
        <Container classNames="md:px-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300  bg-clip-text text-transparent">
            {title}
          </h1>
        </Container>
      </div>
      <Container classNames="pb-0 md:px-24">
        {introductionBold && (
          <div className="mb-6 relative">
            {/* Orange rectangle blockquote style */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 rounded-full"></div>
            <p className="text-xl md:text-2xl leading-8  font-semibold pl-6">{introductionBold}</p>
          </div>
        )}
        <p className="text-lg md:text-xl font-light leading-8 text-muted-foreground">
          {introduction}
        </p>
      </Container>

      {/* Features */}
      <Container>
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          const isEven = index % 2 === 0

          // Render the feature
          const featureElement = (
            <div
              key={`feature-${index}`}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center"
            >
              {/* Image - alternating order on desktop */}
              <div
                className={`${isEven ? 'lg:order-1' : 'lg:order-2'} flex justify-center items-center`}
              >
                <div className="w-full max-w-[260px]">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                </div>
              </div>

              {/* Text - alternating order and alignment on desktop */}
              <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                <FeatureItem
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  iconColor={feature.iconColor}
                  size="large"
                />
              </div>
            </div>
          )

          // Check if we need to insert testimonial and feature card after this feature
          if (index === midpoint - 1 && testimonial) {
            return (
              <React.Fragment key={`feature-group-${index}`}>
                {featureElement}

                {/* Insert Testimonial and FeatureCard in the middle */}
                <div className="my-16 grid gap-8 md:grid-cols-2">
                  <FeatureCard
                    title="Des besoins spécifiques ? Une offre sur mesure est possible, à la carte."
                    features={[
                      { text: 'Capacité de stockage' },
                      { text: 'Bande passante VOD' },
                      { text: 'Durée de live' },
                      { text: 'Nombre de spectateurs' },
                      { text: 'Heure de transcription' },
                      { text: 'Page dédiée personnalisée' },
                    ]}
                    variant="hero" // Change to "basic" for the standard card
                    cardType="expert"
                    buttonText="Demander un devis"
                    onButtonClick={handleClickCTA}
                    gradientColors={['#FB9B5D', '#EF4444', '#00B0F0', '#6FC78A']}
                  />{' '}
                  <Testimonial content={testimonial.content} author={testimonial.author} />
                </div>
              </React.Fragment>
            )
          }

          return featureElement
        })}
      </Container>

      <CtaSection title={ctaTitle} highlightWord={ctaHighlightWord} />
    </div>
  )
}
