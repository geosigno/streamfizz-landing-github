import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  metadataBase: new URL('https://streamfizz.fr'),
  alternates: {
    canonical: '/legal/cgu',
  },
  title: 'Mentions Légales – Streamfizz',
  description: 'Consultez les mentions légales de Streamfizz',
  openGraph: {
    title: 'Mentions Légales – Streamfizz',
    description: "Informations légales concernant l'utilisation du site Streamfizz",
    type: 'website',
    url: 'https://streamfizz.fr/mentions-legales',
    siteName: 'Streamfizz',
    locale: 'fr_FR',
  },
}

export default function MentionsLegalesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
