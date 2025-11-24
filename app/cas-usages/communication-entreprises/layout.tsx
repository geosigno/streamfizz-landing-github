// Enhanced metadata for use case page - Communication d'entreprise
export const metadata = {
  title: 'Communication d\'entreprise vidéo - StreamFizz | Marketing & Communication interne',
  description: 'Valorisez votre image de marque avec la vidéo : communication interne, marketing vidéo, témoignages clients, webinars. Plateforme complète pour vos communications d\'entreprise.',
  keywords: 'communication entreprise vidéo, marketing vidéo, webinaire entreprise, témoignage client vidéo, communication interne',
  alternates: {
    canonical: '/cas-usages/communication-entreprises',
  },
  openGraph: {
    type: 'article',
    title: 'Communication d\'entreprise avec la vidéo - StreamFizz',
    description: 'Valorisez votre image de marque avec la vidéo : communication interne, marketing vidéo, témoignages clients, webinars d\'entreprise.',
    url: 'https://streamfizz.fr/cas-usages/communication-entreprises',
    siteName: 'StreamFizz',
    locale: 'fr_FR',
    images: [{
      url: 'https://streamfizz.fr/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'StreamFizz - Communication d\'entreprise vidéo',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Communication d\'entreprise avec la vidéo - StreamFizz',
    description: 'Valorisez votre image de marque avec la vidéo : communication interne, marketing vidéo, témoignages clients.',
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

export default function CommunicationEntreprisesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}