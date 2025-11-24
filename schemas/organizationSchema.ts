import { Organization, WithContext } from 'schema-dts'

export const organizationJsonLd: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Streamfizz',
  url: 'https://streamfizz.fr',
  logo: 'https://streamfizz.fr/img/logo.svg',
  sameAs: ['https://www.linkedin.com/company/streamfizz'],
}
