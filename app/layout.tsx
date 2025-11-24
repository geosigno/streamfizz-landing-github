// app/layout.tsx
//import { Analytics } from '@vercel/analytics/next'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Poppins } from 'next/font/google'
import type React from 'react'

import Header from '../components/Header'
import JsonLd from '../components/JsonLd'

const Cookie = dynamic(() => import('../components/Cookies'))
const Footer = dynamic(() => import('../components/Footer'))
const ScrollIndicator = dynamic(() => import('../components/ScrollIndicator'))
const ContactModal = dynamic(() => import('../components/ContactModal'))

import { organizationJsonLd } from '../schemas/organizationSchema'

import './globals.css'

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://streamfizz.fr'),
  alternates: {
    canonical: '/',
  },
  title: 'Streamfizz – La plateforme française qui simplifie votre usage de la vidéo',
  description:
    'Streamfizz est la plateforme française qui simplifie votre usage de la vidéo. Hébergez, gérez et diffusez facilement vos contenus en toute sécurité.',
  openGraph: {
    title: 'Streamfizz – La plateforme française qui simplifie votre usage de la vidéo',
    description:
      'Streamfizz est la solution française qui simplifie votre usage de la vidéo, en vous offrant toutes les fonctionnalités nécessaires pour héberger, gérer, partager et analyser vos contenus audiovisuels.',
    type: 'website',
    url: 'https://streamfizz.fr',
    siteName: 'Streamfizz',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={poppins.className}>
        <Header />
        <div className="pt-[72px]">{children}</div>
        <Footer />
        <ScrollIndicator />
        <ContactModal />
        <Cookie />
        <JsonLd jsonLd={organizationJsonLd} />

      </body>
    </html>
  )
}
