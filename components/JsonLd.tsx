import { Thing, WithContext } from 'schema-dts'

interface JsonLdProps {
  jsonLd: WithContext<Thing>
}

export default function JsonLd({ jsonLd }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
