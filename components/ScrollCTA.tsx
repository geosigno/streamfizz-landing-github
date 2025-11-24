'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ScrollCTAProps {
  targetId: string
  className?: string
}

export function ScrollCTA({ targetId, className }: ScrollCTAProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={scrollToTarget}
      className={cn(
        'transition-opacity duration-500 h-auto w-auto p-2',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className
      )}
      aria-label="Scroll down"
    >
      <div className="animate-simple-bounce text-primary">
        <ChevronDown size={40} strokeWidth={1.5} />
      </div>
    </Button>
  )
}
