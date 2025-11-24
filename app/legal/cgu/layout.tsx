import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  metadataBase: new URL('https://streamfizz.fr'),
  alternates: {
    canonical: '/legal/cgu',
  },
  title: "Conditions Générales d'Utilisations – Streamfizz",
  description:
    "Conditions Générales d'Utilisations (CGU) de Streamfizz. Découvrez les modalités d'utilisation de notre plateforme de gestion et diffusion de contenus audiovisuels.",
  openGraph: {
    title: "Conditions Générales d'Utilisations – Streamfizz",
    description: "Consultez les Conditions Générales d'Utilisations de Streamfizz",
    type: 'website',
    url: 'https://streamfizz.fr/mentions-legales',
    siteName: 'Streamfizz',
    locale: 'fr_FR',
  },
}

export default function CguLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
