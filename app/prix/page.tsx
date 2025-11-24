// app/prix/page.tsx
import { generatePageMetadata } from '@/lib/metadata'
import { getPricingSchema } from '@/lib/structured-data'
import { PageStructuredData } from '@/components/SEO/StructuredData'
import PrixPageClient from './PrixPageClient'

// Metadata for pricing page
export const metadata = generatePageMetadata({
  title: 'Prix et Tarifs StreamFizz | Solutions de streaming vidéo',
  description: 'Découvrez nos offres de streaming vidéo : hébergement média et diffusion en direct. Plans flexibles pour entreprises, essai gratuit 15 jours.',
  keywords: 'tarifs streaming, prix plateforme vidéo, hébergement média, diffusion en direct, streaming professionnel',
  path: '/prix',
})

export default function PrixPage() {
  // Generate structured data
  const pricingSchema = getPricingSchema()

  return (
    <>
      <PageStructuredData 
        schema={pricingSchema}
        id="pricing-structured-data"
      />
      <PrixPageClient />
    </>
  )
}
