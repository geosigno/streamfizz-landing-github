import {
  Bookmark,
  MessageCircleMore,
  RadioTower,
  RotateCcw,
  TvMinimalPlay,
  Webhook,
} from 'lucide-react'
import UseCasePage from '../../../components/UseCasePage'
import { getUseCaseSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'
import chapitreImage from '../../../public/img/chapitre.png'
import chatImage from '../../../public/img/chat.png'
import directImage from '../../../public/img/direct.png'
import playerImage from '../../../public/img/player.png'
import replayImage from '../../../public/img/replay.png'
import simulcastImage from '../../../public/img/simulcast.png'

// Metadata for event use case page
export const metadata = generatePageMetadata({
  title: 'Diffusion d\'événements en direct - StreamFizz | Streaming professionnel',
  description: 'Diffusez vos événements en direct : conférences, salons, lancements produits. Plateforme robuste avec interaction temps réel et simulcast.',
  keywords: 'diffusion événement, streaming direct, conférences en ligne, salons virtuels, événement entreprise',
  path: '/cas-usages/evenement-en-direct',
})

export default function EvenementEnDirectPage() {
  // Generate structured data
  const useCaseSchema = getUseCaseSchema(
    'Diffusez vos événements en direct en toute fiabilité',
    'Diffusion d\'événements en direct avec StreamFizz : conférences, salons, lancements de produits. Plateforme robuste avec interaction en temps réel.',
    'evenement-en-direct'
  )

  return (
    <>
      <PageStructuredData 
        schema={useCaseSchema}
        id="use-case-structured-data"
      />
      
      <UseCasePage
      title="Diffusez vos événements en direct en toute fiabilité, avec une plateforme robuste et éprouvée"
      introductionBold="Qu'il s'agisse de conférences, salons, de lancements de produits, assemblées générales, plénières institutionnelles, concerts ou de tables rondes, …"
      introduction=" Streamfizz vous accompagne pour offrir une expérience de diffusion fluide, interactive et professionnelle. Grâce à notre plateforme, interagissez avec votre audience en direct, optimisez la visibilité de vos contenus, et offrez un accès instantané au replay et aux moments forts de votre événement."
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
          icon: <RadioTower />,
          iconColor: 'red',
          title: 'Diffusion en direct de haute qualité',
          description:
            'Diffusez vos événements en direct avec une qualité optimale, assurant une expérience fluide et professionnelle pour vos spectateurs que votre audience soit restreinte ou massive.',
          imageSrc: directImage,
          imageAlt: 'Diffusion en direct de haute qualité',
        },
        {
          icon: <RotateCcw />,
          iconColor: 'blue',
          title: 'Accès au replay pendant le direct',
          description:
            'Permettez à votre audience de revenir en arrière pendant le direct grâce à la fonction de replay instantané, offrant une flexibilité accrue lors du visionnage.',
          imageSrc: replayImage,
          imageAlt: 'Accès au replay pendant le direct',
        },
        {
          icon: <Webhook />,
          iconColor: 'red',
          title: 'Diffusion simultanée sur vos réseaux sociaux',
          description:
            'Diffusez en direct depuis Streamfizz vers vos plateformes préférées en un seul clic. Que ce soit Facebook, YouTube, Twitch, X (Twitter) ou toute autre plateforme compatible RTMP, touchez un public plus large sans efforts grâce à la puissance du simulcast.',
          imageSrc: simulcastImage,
          imageAlt: 'Disponibilité immédiate du replay après le direct',
        },
        {
          icon: <MessageCircleMore />,
          iconColor: 'orange',
          title: 'Module de chat interactif avec modération',
          description:
            "Encouragez l'interaction en temps réel grâce à un module de chat intégré, offrant aux modérateurs et animateurs des outils dédiés pour gérer les discussions, répondre aux questions et maintenir une connexion constante avec les spectateurs tout au long de l'événement.",
          imageSrc: chatImage,
          imageAlt: 'Module de chat interactif avec modération et interface animateur',
        },
        {
          icon: <Bookmark />,
          iconColor: 'orange',
          title: 'Chapitrage interactif en direct',
          description:
            "Structurez votre diffusion en segments clairs pendant l'événement en direct. Grâce au chapitrage en temps réel, les spectateurs peuvent repérer et revenir facilement aux moments clés dès qu'ils sont disponibles, même pendant la diffusion. Cela améliore l'engagement et permet une navigation fluide à travers les temps forts de l'événement.",
          imageSrc: chapitreImage,
          imageAlt: 'Chapitrage interactif en direct',
        },
      ]}
      ctaTitle="Prêt à diffuser votre prochain"
      ctaHighlightWord="événement"
      ctaColor="red"
    />
    </>
  )
}
