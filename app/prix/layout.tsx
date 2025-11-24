import Script from 'next/script'
import { getPricingSchema, getOrganizationSchema } from '@/lib/structured-data'

// Enhanced metadata for pricing page
export const metadata = {
  title: 'Tarifs StreamFizz - Solutions de streaming vidéo adaptées à vos besoins',
  description: 'Découvrez nos tarifs flexibles pour l\'hébergement média et la diffusion en direct. Essai gratuit 15 jours, support technique inclus. Solutions françaises RGPD.',
  keywords: 'tarifs streaming vidéo, prix diffusion en direct, hébergement média, plateforme vidéo France, RGPD',
  alternates: {
    canonical: '/prix',
  },
  openGraph: {
    type: 'website',
    title: 'Tarifs StreamFizz - Solutions de streaming vidéo adaptées à vos besoins',
    description: 'Découvrez nos tarifs flexibles pour l\'hébergement média et la diffusion en direct. Essai gratuit 15 jours, support technique inclus.',
    url: 'https://streamfizz.fr/prix',
    siteName: 'StreamFizz',
    locale: 'fr_FR',
    images: [{
      url: 'https://streamfizz.fr/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'StreamFizz - Tarifs et solutions de streaming vidéo',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarifs StreamFizz - Solutions de streaming vidéo',
    description: 'Découvrez nos tarifs flexibles pour l\'hébergement média et la diffusion en direct. Essai gratuit 15 jours.',
    creator: '@streamfizz',
    site: '@streamfizz',
    images: ['https://streamfizz.fr/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PrixLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate structured data
  const pricingSchema = getPricingSchema()
  const organizationSchema = getOrganizationSchema()

  return (
    <>
      {/* JSON-LD structured data using Next.js recommended approach */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([pricingSchema, organizationSchema])
        }}
      />
      {children}
    </>
  )
}