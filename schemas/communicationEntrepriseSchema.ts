import { Service, WithContext } from 'schema-dts'

export const communicationEntrepriseJsonLd: WithContext<Service> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Communication d'entreprise - Streamfizz",
  description:
    'Dynamisez la communication au sein de votre organisation avec une plateforme vidéo dédiée à votre entreprise.',
  provider: {
    '@type': 'Organization',
    name: 'Streamfizz',
    url: 'https://streamfizz.fr',
  },
  url: 'https://streamfizz.fr/cas-usages/communication-entreprises',
  serviceType: "Communication d'entreprise",
}
