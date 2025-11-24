'use client'

import { useState, useEffect, useRef } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

interface VideoPlayerProps {
  className?: string
}

export default function VideoPlayer({ className = '' }: VideoPlayerProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const desktopAspectRatio = (523 / 1351) * 100 // 38.71%
  const mobileAspectRatio = 130

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect() // Stop observing once loaded
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={`py-8 md:py-10 ${className}`} ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="w-full max-w-none mx-auto">
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: `${isMobile ? mobileAspectRatio : desktopAspectRatio}%` }}
          >
            {shouldLoad ? (
              <iframe
                src="https://player.streamfizz.live/embed/playlist/cmcx13ugf00jjp701042baiod"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 'none' }}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Streamfizz Player démonstration"
                loading="lazy"
              />
            ) : (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-50 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm">Lecteur vidéo</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
