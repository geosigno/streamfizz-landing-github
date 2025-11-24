'use client'

import React from 'react'
import { cn } from '../lib/utils'
import Container from './Container'

type HeroSectionProps = {
  children: React.ReactNode
  size?: 'default' | 'small'
  backgroundColor?: string
  gradientColors?: string[]
  containerClassName?: string
  animationDuration?: number
}

export default function HeroSection({
  children,
  size = 'default',
  backgroundColor = 'bg-gray-800 dark:bg-gray-900',
  gradientColors = ['#00B0F0', '#FB9B5D', '#EF4444', '#6FC78A'],
  containerClassName = '',
  animationDuration = 20, // Duration in seconds
}: HeroSectionProps) {
  const gradientId = React.useId()
  const animationName = `gradientMorph-${gradientId.replace(/:/g, '')}`

  return (
    <div className="relative">
      <div className={`relative isolate overflow-hidden ${backgroundColor}`}>
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
        <Container
          classNames={cn(
            'text-center',
            containerClassName ? containerClassName : size === 'default' ? 'md:py-32' : 'md:py-16'
          )}
        >
          {children}
        </Container>
      </div>

      {/* Dynamic keyframe animation styles */}
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
    </div>
  )
}
