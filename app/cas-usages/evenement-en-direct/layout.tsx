// Enhanced metadata for use case page - Événement en direct
export const metadata = {
  title: 'Diffusion d\'événements en direct - StreamFizz | Solution professionnelle',
  description: 'Diffusez vos événements en direct en toute fiabilité : conférences, salons, assemblées générales. Interaction temps réel, replay instantané, simulcast vers réseaux sociaux.',
  keywords: 'diffusion événement direct, streaming conférence, webinaire professionnel, assemblée générale live, plateforme événementiel',
  alternates: {
    canonical: '/cas-usages/evenement-en-direct',
  },
  openGraph: {
    type: 'article',
    title: 'Diffusion d\'événements en direct - StreamFizz',
    description: 'Solution complète pour diffuser vos événements en direct : conférences, salons, assemblées générales avec interaction temps réel.',
    url: 'https://streamfizz.fr/cas-usages/evenement-en-direct',
    siteName: 'StreamFizz',
    locale: 'fr_FR',
    images: [{
      url: 'https://streamfizz.fr/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'StreamFizz - Diffusion d\'événements en direct',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diffusion d\'événements en direct - StreamFizz',
    description: 'Solution complète pour diffuser vos événements en direct avec interaction temps réel.',
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

export default function EvenementEnDirectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}