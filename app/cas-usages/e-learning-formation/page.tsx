import { Bookmark, Captions, Database, Lock, Tv, Users } from 'lucide-react'
import UseCasePage from '../../../components/UseCasePage'
import { getUseCaseSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'
import centralisationImage from '../../../public/img/centralisation-securisee-des-videos.png'
import chapitrageImage from '../../../public/img/chapitre.png'
import webTVImage from '../../../public/img/creation-de-web-tv-et-de-playlist-engageantes.png'
import gestionImage from '../../../public/img/gestion-avancee-des-acces-et-de-la-confidentialite.png'
import playerImage from '../../../public/img/player.png'
import transcriptionImage from '../../../public/img/transcription-et-sous-titrage-automatiques.png'
import usersImage from '../../../public/img/users.png'

// Enhanced metadata for e-learning use case page
export const metadata = generatePageMetadata({
  title: 'E-learning et Formation - StreamFizz | Plateforme de formation vidéo',
  description: 'Solution complète pour l\'e-learning : hébergement sécurisé, gestion des accès, transcription automatique. Idéal pour formations d\'entreprise.',
  keywords: 'e-learning, formation vidéo, LMS, formation entreprise, vidéo pédagogique, apprentissage en ligne',
  path: '/cas-usages/e-learning-formation',
})

export default function ELearningFormationPage() {
  // Generate structured data
  const useCaseSchema = getUseCaseSchema(
    'E-learning et formation vidéo - StreamFizz',
    'Plateforme complète pour l\'e-learning : formations vidéo, WebTV éducative, chapitrage interactif, gestion d\'accès. Solution sécurisée.',
    'e-learning-formation'
  )

  return (
    <>
      <PageStructuredData schema={useCaseSchema} id="elearning-use-case-structured-data" />
      
      <UseCasePage
      title="E-Learning & Formation : créez des parcours d'apprentissage vidéo puissants, accessibles et sécurisés"
      introduction="Que ce soit pour des cours en ligne, des modules de formation interne et onboarding d'employés, des webinaires ou des conférences, Streamfizz vous offre une plateforme complète pour centraliser, diffuser et valoriser tous vos contenus pédagogiques. Offrez à vos apprenants une expérience fluide, interactive et multilingue, tout en gardant un contrôle total sur l'accès et la confidentialité de vos ressources."
      features={[
        {
          icon: <Tv />,
          iconColor: 'red',
          title: 'Un lecteur vidéo performant, accessible partout',
          description:
            "Profitez d'un lecteur vidéo de dernière génération, fluide, réactif et optimisé pour tous les écrans : ordinateurs, tablettes ou smartphones. Il garantit une lecture optimale de vos contenus pédagogiques, quel que soit le terminal utilisé.",
          imageSrc: playerImage,
          imageAlt: 'Un lecteur vidéo performant',
        },
        {
          icon: <Database />,
          iconColor: 'green',
          title: 'Centralisation sécurisée des vidéos',
          description:
            'Stockez tous vos contenus éducatifs en un seul endroit, avec une gestion sécurisée garantissant la protection de vos ressources.',
          imageSrc: centralisationImage,
          imageAlt: 'Centralisation sécurisée des vidéos',
        },
        {
          icon: <Lock />,
          iconColor: 'orange',
          title: 'Gestion avancée des accès et de la confidentialité',
          description:
            "Définissez précisément qui peut accéder à vos contenus grâce à diverses options de confidentialité, telles que la sécurisation par mot de passe, l'invitation spécifique ou l'inscription préalable.",
          imageSrc: gestionImage,
          imageAlt: 'Gestion avancée des accès et de la confidentialité',
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
        {
          icon: <Tv />,
          iconColor: 'red',
          title: 'Création de WebTV et de Playlist engageantes',
          description:
            'Lancez votre propre WebTV en quelques clics, pour offrir à vos apprenants un accès centralisé à vos contenus vidéo, organisé selon vos préférences. Élaborez un parcours pédagogique en structurant vos contenus sous forme de playlists thématiques',
          imageSrc: webTVImage,
          imageAlt: 'Création de WebTV et de Playlist engageantes',
        },
        {
          icon: <Bookmark />,
          iconColor: 'orange',
          title: 'Chapitrage interactif',
          description:
            'Structurez vos vidéos en segments clairs et navigables. Le chapitrage permet à vos apprenants de retrouver facilement les moments clés et de progresser à leur rythme.',
          imageSrc: chapitrageImage,
          imageAlt: 'Chapitrage interactif',
        },
        {
          icon: <Users />,
          iconColor: 'blue',
          title: 'Gestion multi-utilisateurs',
          description:
            "Travaillez en équipe en toute sécurité grâce à une gestion fine des rôles et des autorisations. Définissez des droits d'accès adaptés aux différents intervenants.",
          imageSrc: usersImage,
          imageAlt: 'Gestion multi-utilisateurs',
        },
      ]}
      ctaTitle="Prêt à transformer votre"
      ctaHighlightWord="formation"
      ctaColor="blue"
    />
    </>
  )
}
