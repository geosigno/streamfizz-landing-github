import { Service, WithContext } from 'schema-dts'

export const evenementDirectJsonLd: WithContext<Service> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Événement en Direct - Streamfizz',
  description:
    'Diffusez vos événements en direct avec une solution clé en main. Offrez une expérience interactive à votre audience en ligne.',
  provider: {
    '@type': 'Organization',
    name: 'Streamfizz',
    url: 'https://streamfizz.fr',
  },
  url: 'https://streamfizz.fr/cas-usages/evenement-en-direct',
  serviceType: "Diffusion d'événements en direct",
}
