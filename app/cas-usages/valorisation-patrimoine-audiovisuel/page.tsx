import { Bookmark, Captions, Database, FileText, Tag, Tv, Users } from 'lucide-react'
import UseCasePage from '../../../components/UseCasePage'
import { getUseCaseSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'
import centralisationImage from '../../../public/img/centralisation-securisee-des-videos.png'
import chapitrageImage from '../../../public/img/chapitre.png'
import webTVImage from '../../../public/img/creation-de-web-tv-et-de-playlist-engageantes.png'
import gestionImage from '../../../public/img/gestion-avancee-des-acces-et-de-la-confidentialite.png'
import tagImage from '../../../public/img/tag.png'
import transcriptionImage from '../../../public/img/transcription-et-sous-titrage-automatiques.png'
import usersImage from '../../../public/img/users.png'

// Enhanced metadata for audiovisual heritage use case page
export const metadata = generatePageMetadata({
  title: 'Valorisation du patrimoine audiovisuel - StreamFizz | Numérisation patrimoine',
  description: 'Valorisez votre patrimoine audiovisuel : numérisation, indexation, recherche avancée. Solution complète pour archives et médiathèques.',
  keywords: 'patrimoine audiovisuel, numérisation archives, médiathèque, indexation vidéo, valorisation contenu historique',
  path: '/cas-usages/valorisation-patrimoine-audiovisuel',
})

export default function ValorisationPatrimoineAudiovisuelPage() {
  // Generate structured data
  const useCaseSchema = getUseCaseSchema(
    'Valorisation patrimoine audiovisuel - StreamFizz',
    'Centralisez et valorisez vos archives audiovisuelles : numérisation, organisation, accès facilité. Solution complète pour musées, institutions.',
    'valorisation-patrimoine-audiovisuel'
  )

  return (
    <>
      <PageStructuredData schema={useCaseSchema} id="patrimoine-use-case-structured-data" />
      
      <UseCasePage
      title="Valorisez et faites vivre votre patrimoine audiovisuel"
      introductionBold="Centralisez, organisez et diffusez l'ensemble de vos contenus vidéo en toute sécurité."
      introduction="Avec Streamfizz, transformez vos archives audiovisuelles en véritables ressources pédagogiques ou de communication. Offrez à vos publics une expérience enrichie grâce à des fonctionnalités avancées : WebTV, playlists thématiques, chapitrage interactif, sous-titrage multilingue, contrôle des accès… Tout est réuni pour tirer le meilleur parti de vos contenus existants, les rendre accessibles, engageants et durables."
      features={[
        {
          icon: <Database />,
          iconColor: 'green',
          title: 'Centralisation sécurisée des vidéos en France',
          description:
            "Regroupez l'ensemble de vos archives audiovisuelles sur une seule plateforme, avec un hébergement sécurisé en France conforme au RGPD, garantissant la pérennité, la confidentialité et la protection de vos contenus selon les exigences légales françaises et européennes.",
          imageSrc: centralisationImage,
          imageAlt: 'Centralisation sécurisée des vidéos en France',
        },
        {
          icon: <Tag />,
          iconColor: 'blue',
          title: 'Organisation par catégories et tags',
          description:
            "Classez et indexez vos vidéos par thématiques et mots-clés pour une navigation simple, rapide et intuitive. Facilitez l'accès aux bons contenus, au bon moment. Ajoutez des métadonnées descriptives pour enrichir la contextualisation de vos contenus.",
          imageSrc: tagImage,
          imageAlt: 'Organisation par catégories et tags',
        },
        {
          icon: <FileText />,
          iconColor: 'orange',
          title: 'Gestion avancée des accès et de la confidentialité',
          description:
            "Choisissez précisément qui peut consulter vos contenus : accès public, restreint ou privé, avec options comme l'inscription, l'invitation ou la protection par mot de passe.",
          imageSrc: gestionImage,
          imageAlt: 'Gestion avancée des accès et de la confidentialité',
        },
        {
          icon: <Captions />,
          iconColor: 'green',
          title: 'Transcription et sous-titrage automatiques',
          description:
            'Rendez vos vidéos accessibles à tous grâce à la transcription et au sous-titrage automatique, avec possibilité de traduction en plusieurs langues pour élargir votre audience.',
          imageSrc: transcriptionImage,
          imageAlt: 'Transcription et sous-titrage automatiques',
        },
        {
          icon: <Tv />,
          iconColor: 'red',
          title: 'Création de WebTV et de playlists engageantes',
          description:
            'Donnez une nouvelle vie à vos archives en les organisant dans une WebTV ou des playlists thématiques. Idéal pour créer des collections thématiques, des événements temporaires, des expositions,  des portails de consultation simples, engageants et adaptés à différents publics.',
          imageSrc: webTVImage,
          imageAlt: 'Création de WebTV et de playlists engageantes',
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
      ctaTitle="Prêt à valoriser votre"
      ctaHighlightWord="patrimoine audiovisuel"
      ctaColor="green"
    />
    </>
  )
}
