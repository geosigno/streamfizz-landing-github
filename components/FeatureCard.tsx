'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Crown } from 'lucide-react'
import React from 'react'
import Title from './Title'

type CardFeature = {
  text: string
}

type CardProps = {
  title: string
  features: CardFeature[]
  variant: 'hero' | 'basic'
  cardType: 'expert' | 'trial'
  buttonText?: string
  onButtonClick?: () => void
  className?: string
  gradientColors?: string[]
  animationDuration?: number
}

export default function FeatureCard({
  title,
  features,
  variant = 'basic',
  cardType = 'trial',
  buttonText,
  onButtonClick,
  className = '',
  gradientColors = ['#00B0F0', '#FB9B5D', '#EF4444', '#6FC78A'],
  animationDuration = 20,
}: CardProps) {
  const gradientId = React.useId()
  const animationName = `gradientMorph-${gradientId.replace(/:/g, '')}`

  // Determine background class based on variant
  const getBgClass = () => {
    if (variant === 'basic') {
      return 'bg-background-muted'
    }
    return 'bg-gray-800 dark:bg-gray-900'
  }

  // Determine text color based on variant
  const getTextClass = () => {
    if (variant === 'hero') {
      return 'text-white dark:text-default'
    }
    return 'text-default'
  }

  // Get the appropriate icon color and background
  const getIconStyles = () => {
    if (variant === 'hero') {
      return {
        iconBg: 'bg-white/90',
        iconColor: 'text-white',
        icon: <Check className="h-4 w-4" />,
      }
    } else {
      return {
        iconBg: 'bg-orange-100',
        iconColor: 'text-gray-900',
        icon: <Check className=" text-orange-600 h-4 w-4" />,
      }
    }
  }

  const iconStyles = getIconStyles()

  return (
    <div
      className={`relative h-full border rounded-3xl shadow-lg overflow-hidden ${
        variant === 'hero' ? 'isolate' : ''
      } ${className}`}
    >
      {variant === 'hero' && (
        <div className={`absolute inset-0 -z-10 ${getBgClass()}`}>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill={`url(#${gradientId})`} fillOpacity="0.7" />
            <defs>
              <radialGradient id={gradientId}>
                <stop stopColor={gradientColors[0]} className={`animate-${animationName}-stop1`} />
                <stop
                  offset="1"
                  stopColor={gradientColors[1]}
                  className={`animate-${animationName}-stop2`}
                />
              </radialGradient>
            </defs>
          </svg>
        </div>
      )}

      <Card
        className={`h-full border-none ${
          variant === 'basic' ? getBgClass() : 'bg-transparent'
        } relative z-10 flex flex-col`}
      >
        <CardHeader className="pb-4 md:pb-2">
          <CardTitle
            className={`flex items-center flex-col md:flex-row text-2xl text-center md:text-left font-bold ${getTextClass()}`}
          >
            {variant === 'hero' && (
              <Crown className="inline-block mb-4 md:mr-4 md:mb-0 h-12 w-12 md:h-16 md:w-16" />
            )}
            <Title level={3} text={title} invertColor={variant === 'hero'} />
          </CardTitle>
          <div
            className={`h-px hidden md:block w-full max-w-xs bg-gradient-to-r ${
              variant === 'hero' ? 'from-gray-500 to-transparent' : 'from-gray-200 to-transparent'
            } mt-2`}
          ></div>
        </CardHeader>
        <CardContent className="flex-grow pb-0">
          <ul className="space-y-0">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-x-2 py-1">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${iconStyles.iconBg}`}
                >
                  {iconStyles.icon}
                </div>
                <span className={`text-xs sm:text-sm min-w-[210px] inline-block ${getTextClass()}`}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        {buttonText && (
          <CardFooter className="mt-auto pt-4">
            <Button
              variant={variant === 'hero' ? 'secondary' : 'primary'}
              className="w-full"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </CardFooter>
        )}
      </Card>

      {/* Dynamic keyframe animation styles */}
      {variant === 'hero' && (
        <style jsx global>{`
          @keyframes ${animationName}-stop1 {
            0%,
            100% {
              stop-color: ${gradientColors[0]};
            }
            25% {
              stop-color: ${gradientColors[1]};
            }
            50% {
              stop-color: ${gradientColors[2]};
            }
            75% {
              stop-color: ${gradientColors[3]};
            }
          }

          @keyframes ${animationName}-stop2 {
            0%,
            100% {
              stop-color: ${gradientColors[1]};
            }
            25% {
              stop-color: ${gradientColors[2]};
            }
            50% {
              stop-color: ${gradientColors[3]};
            }
            75% {
              stop-color: ${gradientColors[0]};
            }
          }

          .animate-${animationName}-stop1 {
            animation: ${animationName}-stop1 ${animationDuration}s ease-in-out infinite;
          }

          .animate-${animationName}-stop2 {
            animation: ${animationName}-stop2 ${animationDuration}s ease-in-out infinite;
          }
        `}</style>
      )}
    </div>
  )
}
