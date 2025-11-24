'use client'

import { useCallback, useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    const scrollableHeight = documentHeight - windowHeight
    const progress = scrollableHeight > 0 ? Math.min((scrollTop / scrollableHeight) * 100, 100) : 0

    setScrollProgress(progress)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-100/30">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-red-500 will-change-[width]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  )
}
