import { Captions, MessageCircleMore, Palette, Tv, TvMinimalPlay } from 'lucide-react'
import UseCasePage from '../../../components/UseCasePage'
import { getUseCaseSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'
import webTVImage from '../../../public/img/creation-de-web-tv-et-de-playlist-engageantes.png'
import personalizationImage from '../../../public/img/personnalisation.png'
import playerImage from '../../../public/img/player.png'
import qAndAImage from '../../../public/img/question-reponse.png'
import transcriptionImage from '../../../public/img/transcription-et-sous-titrage-automatiques.png'

// Enhanced metadata for corporate communication use case page
export const metadata = generatePageMetadata({
  title: 'Communication d\'entreprise avec la vidéo - StreamFizz | Marketing vidéo',
  description: 'Valorisez votre image de marque avec la vidéo : communication interne, marketing vidéo, témoignages clients, webinars d\'entreprise.',
  keywords: 'communication entreprise, marketing vidéo, webinars, témoignages clients, communication interne, WebTV',
  path: '/cas-usages/communication-entreprises',
})

export default function CommunicationEntreprisesPage() {
  // Generate structured data
  const useCaseSchema = getUseCaseSchema(
    'Communication d\'entreprise avec la vidéo - StreamFizz',
    'Valorisez votre image de marque avec la vidéo : communication interne, marketing vidéo, témoignages clients, webinars d\'entreprise.',
    'communication-entreprises'
  )

  return (
    <>
      <PageStructuredData schema={useCaseSchema} id="communication-use-case-structured-data" />
      
      <UseCasePage
      title="Valorisez votre image de marque et dynamisez vos communications d'entreprises avec la vidéo"
      introductionBold="Communication interne, marketing vidéo, témoignages clients, annonces stratégiques, webinars, événements d'entreprise…"
      introduction="Streamfizz met à votre disposition une plateforme complète pour gérer, personnaliser et diffuser tous vos contenus vidéo, en interne comme en externe. Que ce soit pour renforcer l'engagement de vos équipes, promouvoir vos services ou couvrir vos temps forts en direct, notre solution vous accompagne à chaque étape avec fiabilité, simplicité et impact."
      features={[
        {
          icon: <TvMinimalPlay />,
          iconColor: 'red',
          title: 'Un lecteur vidéo performant, accessible partout',
          description:
            "Profitez d'un lecteur vidéo de dernière génération, fluide, réactif et optimisé pour tous les écrans : ordinateurs, tablettes ou smartphones. Il garantit une lecture optimale de vos contenus, quel que soit le terminal utilisé.",
          imageSrc: playerImage,
          imageAlt: 'Un lecteur vidéo performant',
        },
        {
          icon: <Palette />,
          iconColor: 'orange',
          title: 'Personnalisation des pages de lecture',
          description:
            "Adaptez l'apparence de vos pages de lecture à l'image de votre entreprise en personnalisant les logos, descriptions et couleurs, renforçant ainsi votre identité de marque.",
          imageSrc: personalizationImage,
          imageAlt: 'Personnalisation des pages de lecture',
        },
        {
          icon: <Tv />,
          iconColor: 'red',
          title: 'Création de WebTV engageantes',
          description:
            'Lancez votre propre WebTV en quelques clics, pour offrir à votre audience un accès centralisé à vos contenus vidéo, organisé selon vos préférences.',
          imageSrc: webTVImage,
          imageAlt: 'Création de WebTV engageantes',
        },
        {
          icon: <MessageCircleMore />,
          iconColor: 'blue',
          title: 'Module de questions-réponses (Q&A)',
          description:
            'Restez connecté à votre audience en intégrant un module de Q&A, permettant aux participants de poser des questions en temps réel et de leur fournir des réponses instantanées, tout en assurant la qualité des échanges via un outil de modération.',
          imageSrc: qAndAImage,
          imageAlt: 'Module de questions-réponses (Q&A)',
        },
        {
          icon: <Captions />,
          iconColor: 'green',
          title: 'Transcription et sous-titrage automatiques',
          description:
            "Améliorez l'accessibilité de vos vidéos grâce à la transcription automatique et à la génération de sous-titres. La traduction en plusieurs langues permet également d'atteindre une audience internationale sans effort supplémentaire.",
          imageSrc: transcriptionImage,
          imageAlt: 'Transcription et sous-titrage automatiques',
        },
      ]}
      ctaTitle="Prêt à dynamiser votre communication"
      ctaHighlightWord="d'entreprise"
      ctaColor="blue"
    />
    </>
  )
}
