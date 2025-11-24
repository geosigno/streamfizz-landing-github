import { Service, WithContext } from 'schema-dts'

export const patrimoineAudiovisuelJsonLd: WithContext<Service> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Valorisation du Patrimoine Audiovisuel - Streamfizz',
  description:
    'Préservez et valorisez votre patrimoine audiovisuel avec Streamfizz. Archivez, organisez et partagez vos contenus vidéo historiques.',
  provider: {
    '@type': 'Organization',
    name: 'Streamfizz',
    url: 'https://streamfizz.fr',
  },
  url: 'https://streamfizz.fr/cas-usages/valorisation-patrimoine-audiovisuel',
  serviceType: 'Valorisation du patrimoine audiovisuel',
}
