import dynamic from 'next/dynamic'
import { headers } from 'next/headers'
import Hero from '../sections/Hero'
import Trust from '../sections/Trust'
import { getHomepageSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'
const VideoPlayer = dynamic(() => import('../components/VideoPlayer'))
const Features = dynamic(() => import('../sections/Features'))
const WhyChoose = dynamic(() => import('../sections/WhyChoose'))
const Testimonials = dynamic(() => import('../sections/Testimonials'))
const Difference = dynamic(() => import('../sections/Difference'))
const CtaSection = dynamic(() => import('../components/CtaSection'))

function isMobileUserAgent(userAgent: string) {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
}

// Metadata for homepage
export const metadata = generatePageMetadata({
  title: 'StreamFizz - Plateforme française de streaming vidéo professionnel',
  description: 'Solution complète de streaming vidéo pour entreprises : diffusion en direct, hébergement média, transcription automatique. Plateforme française sécurisée et conforme RGPD.',
  keywords: 'streaming vidéo, diffusion en direct, hébergement média, plateforme vidéo, transcription automatique, France, RGPD',
  path: '/',
})

export default async function Home() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || ''

  const isMobile = isMobileUserAgent(userAgent)

  // Generate structured data for homepage
  const homepageSchema = getHomepageSchema()

  return (
    <>
      <PageStructuredData 
        schema={homepageSchema}
        id="homepage-structured-data"
      />
      
      <main>
        <Hero isMobile={isMobile} />
        <Trust />
        <VideoPlayer />
        <Features />
        <WhyChoose />
        <Testimonials />
        <Difference />
        <CtaSection title="Prêt à simplifier votre usage de la" highlightWord="vidéo" />
      </main>
    </>
  )
}
