// Enhanced metadata for use case page - Valorisation patrimoine audiovisuel
export const metadata = {
  title: 'Valorisation patrimoine audiovisuel - StreamFizz | Archives et musées',
  description: 'Centralisez et valorisez vos archives audiovisuelles : numérisation, organisation, accès facilité. Solution complète pour musées, institutions culturelles et archives.',
  keywords: 'patrimoine audiovisuel, archives vidéo, numérisation, musée numérique, valorisation archives, gestion patrimoine culturel',
  alternates: {
    canonical: '/cas-usages/valorisation-patrimoine-audiovisuel',
  },
  openGraph: {
    type: 'article',
    title: 'Valorisation patrimoine audiovisuel - StreamFizz',
    description: 'Centralisez et valorisez vos archives audiovisuelles : numérisation, organisation, accès facilité. Solution pour musées et institutions.',
    url: 'https://streamfizz.fr/cas-usages/valorisation-patrimoine-audiovisuel',
    siteName: 'StreamFizz',
    locale: 'fr_FR',
    images: [{
      url: 'https://streamfizz.fr/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'StreamFizz - Valorisation patrimoine audiovisuel',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valorisation patrimoine audiovisuel - StreamFizz',
    description: 'Centralisez et valorisez vos archives audiovisuelles : numérisation, organisation, accès facilité.',
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

export default function ValorisationPatrimoineAudiovisuelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}