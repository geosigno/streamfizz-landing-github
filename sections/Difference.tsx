import Container from '../components/Container'
import FeatureItem, { FeatureItemProps } from '../components/FeatureItem'
import Title from '../components/Title'

export default function Difference() {
  const differentiators: FeatureItemProps[] = [
    {
      emoji: '🇫🇷',
      title: 'Hébergement 100% français',
      description:
        'Toutes vos données sont stockées en France sur une infrastructure à haute disponibilité.',
      iconColor: 'green',
    },
    {
      emoji: '🛡️',
      title: 'Aucun tracking publicitaire',
      description:
        'Pas de publicités, ni de suivi marketing, aucune revente de vos données personnelles.',
      iconColor: 'orange',
    },
    {
      emoji: '⚙️',
      title: 'Solution complète de gestion vidéo',
      description:
        "Bien plus qu'un simple hébergeur : une plateforme dédiée à la valorisation de vos contenus à la demande et en direct.",
      iconColor: 'red',
    },
    {
      emoji: '🔒',
      title: 'Sécurité et confidentialité',
      description:
        'Protection de vos données avec des standards de sécurité élevés et conformité RGPD.',
      iconColor: 'green',
    },
  ]

  return (
    <div className="relative">
      <div className="absolute inset-x-0 bg-background-muted from-zinc-100 to-zinc-200 h-full w-full" />

      <Container>
        <Title level={2} text=" Ce qui fait la différence" />
        <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
          {differentiators.map((diff, index) => (
            <FeatureItem
              key={index}
              title={diff.title}
              description={diff.description}
              emoji={diff.emoji}
              iconColor={diff.iconColor}
              size="large"
            />
          ))}
        </dl>
      </Container>
    </div>
  )
}
