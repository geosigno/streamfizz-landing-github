import { Service, WithContext } from 'schema-dts'

export const elearningFormationJsonLd: WithContext<Service> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-learning et Formation - Streamfizz',
  description:
    'Plateforme de formation et e-learning sécurisée. Partagez vos formations en ligne et suivez la progression de vos apprenants.',
  provider: {
    '@type': 'Organization',
    name: 'Streamfizz',
    url: 'https://streamfizz.fr',
  },
  url: 'https://streamfizz.fr/cas-usages/e-learning-formation',
  serviceType: 'E-learning et Formation',
}
