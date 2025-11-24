import { Service, WithContext } from 'schema-dts'

export const pricingJsonLd: WithContext<Service> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Streamfizz - Services de vidéo en ligne',
  description:
    'Des offres flexibles pour tous vos besoins vidéo : bibliothèque média, diffusion en direct et formules personnalisées.',
  provider: {
    '@type': 'Organization',
    name: 'Streamfizz',
    url: 'https://streamfizz.fr',
  },
  url: 'https://streamfizz.fr/prix',
  serviceType: 'Service de vidéo en ligne',
}
