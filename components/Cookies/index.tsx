'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import { cn } from '../../lib/utils'
import cookie from '../../public/img/cookie.png'
import { Button } from '../ui/button'
import pluginConfig, { loadMatomo } from './config'

declare global {
  interface Window {
    _paq: any[]
    $crisp: any[]
    CRISP_WEBSITE_ID: string
  }
}

export default function Cookie() {
  useEffect(() => {
    CookieConsent.run(pluginConfig)
    const { rejectedCategories } = CookieConsent.getUserPreferences()
    if (!rejectedCategories.includes('analytics')) {
      loadMatomo()
    }
  }, [])

  return (
    <Button
      variant="ghost"
      className={cn(
        'p-2 fixed left-4 z-50 bg-zinc-200/80 backdrop-blur-sm hover:bg-zinc-300/80 transition-all duration-300 ease-in-out',
        process.env.NODE_ENV === 'production' ? 'bottom-4' : 'bottom-16'
      )}
      size="icon"
      onClick={CookieConsent.showPreferences}
      style={{
        width: 54,
        height: 54,
      }}
    >
      <Image src={cookie} alt="Cookie Icon" />
    </Button>
  )
}
