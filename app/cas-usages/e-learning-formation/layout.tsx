// Enhanced metadata for use case page - E-learning et formation
export const metadata = {
  title: 'E-learning et formation vidéo - StreamFizz | Plateforme éducative sécurisée',
  description: 'Plateforme complète pour l\'e-learning : formations vidéo, WebTV éducative, chapitrage interactif, gestion d\'accès. Solution française sécurisée pour l\'éducation.',
  keywords: 'e-learning vidéo, formation en ligne, plateforme éducative, WebTV formation, chapitrage vidéo, LMS vidéo',
  alternates: {
    canonical: '/cas-usages/e-learning-formation',
  },
  openGraph: {
    type: 'article',
    title: 'E-learning et formation vidéo - StreamFizz',
    description: 'Plateforme complète pour l\'e-learning : formations vidéo, WebTV éducative, chapitrage interactif, gestion d\'accès sécurisée.',
    url: 'https://streamfizz.fr/cas-usages/e-learning-formation',
    siteName: 'StreamFizz',
    locale: 'fr_FR',
    images: [{
      url: 'https://streamfizz.fr/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'StreamFizz - E-learning et formation vidéo',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-learning et formation vidéo - StreamFizz',
    description: 'Plateforme complète pour l\'e-learning : formations vidéo, WebTV éducative, chapitrage interactif.',
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

export default function ELearningFormationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}