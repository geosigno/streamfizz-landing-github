import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  metadataBase: new URL('https://streamfizz.fr'),
  alternates: {
    canonical: '/legal/cgu',
  },
  title: 'Politique de Confidentialité – Streamfizz',
  description:
    'Consultez notre politique de confidentialité pour comprendre comment nous traitons vos données personnelles.',
  openGraph: {
    title: 'Politique de Confidentialité – Streamfizz',
    description:
      'Informations sur la manière dont Streamfizz protège et utilise vos données personnelles',
    type: 'website',
    url: 'https://streamfizz.fr/legal/politique-de-confidentialite',
    siteName: 'Streamfizz',
    locale: 'fr_FR',
  },
}

export default function PolitiqueConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
