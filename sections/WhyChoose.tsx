import { Award, Shield, ThumbsUp, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import Container from '../components/Container'
import FeatureItem from '../components/FeatureItem'
import Testimonial from '../components/Testimonial'
import Title from '../components/Title'
import image from '../public/img/why1.png'

export default function WhyChoose() {
  const benefits: {
    title: string
    description: string
    icon: React.ReactNode
    size: 'default' | 'large'
    color: 'blue' | 'red' | 'green' | 'orange'
  }[] = [
    {
      title: 'Gérez facilement vos vidéos, sans contraintes techniques',
      description:
        "Streamfizz simplifie toute la gestion technique des vidéos grâce à une plateforme intuitive et tout-en-un. Fini les complications liées à l'utilisation simultanée de plusieurs outils : avec Streamfizz, vous centralisez toutes vos actions vidéo sur une seule et même plateforme.",
      icon: <Zap />,
      size: 'large',
      color: 'orange',
    },
    {
      title: 'Un accompagnement humain personnalisé par des experts',
      description:
        "Contrairement à d'autres solutions du marché, Streamfizz met à votre disposition une équipe d'experts pour vous conseiller. Vous obtenez rapidement les réponses et l'accompagnement dont vous avez besoin.",
      icon: <Users />,
      size: 'large',
      color: 'orange',
    },
    {
      title: 'Une alternative éthique et responsable',
      description:
        "Streamfizz est une solution française qui respecte votre vie privée. Contrairement à certaines plateformes, nous ne revendons ni n'exploitons vos données personnelles. Vous êtes et restez pleinement propriétaire de vos contenus.",
      icon: <Shield />,
      size: 'large',
      color: 'blue',
    },
    {
      title: 'Sans publicité, sans distraction',
      description:
        "Votre audience est au cœur de l'expérience : aucune publicité ne vient perturber la diffusion de vos vidéos. Vous gardez le contrôle total sur ce que vous partagez.",
      icon: <ThumbsUp />,
      size: 'large',
      color: 'blue',
    },
    {
      title: 'Qualité et sérénité',
      description:
        'Grâce à une infrastructure performante sur des serveurs hébergés en France, Streamfizz garantit à vos contenus une qualité optimale, une diffusion fluide et une gestion simplifiée de votre stratégie vidéo.',
      icon: <Award />,
      size: 'large',
      color: 'green',
    },
  ]

  return (
    <Container>
      <Title level={2} text="Pourquoi choisir Streamfizz ?" />

      {/* Mobile image (shows only on mobile) */}
      <div className="mb-10 lg:hidden">
        <div className="p-6 sm:p-12">
          <Image
            src={image}
            alt="Centralisation sécurisée des vidéos en France"
            className="w-full"
          />
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 lg:gap-x-20">
        {/* Left column - Title and Benefits list */}
        <div>
          <div className="space-y-10">
            {benefits.map((benefit, index) => (
              <FeatureItem
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                size="large"
                iconColor={benefit.color}
              />
            ))}
          </div>
        </div>

        {/* Right column - Sticky content (only visible on desktop) */}
        <div className="relative hidden lg:block">
          <div className="sticky top-24 space-y-8">
            <div className="p-24">
              <Image
                src={image}
                sizes="(max-width: 768px) 100vw, 384px"
                alt="Centralisation sécurisée des vidéos en France"
                className="w-full"
              />
            </div>

            <Testimonial
              content={
                "Depuis près de 4 ans, Scaleway accompagne Streamfizz avec une infrastructure cloud souveraine, sécurisée et performante, dédiée à l'hébergement de leurs applications et données vidéo."
              }
              author={{
                name: 'Simon JAMELIN',
                role: ' Head of Sales',
                companyLogo: '/img/scaleway.png',
                company: 'Scaleway',
                companyUrl: 'https://scaleway.com/fr/a-propos/',
                companyColor: '#7545ae',
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile testimonial at the end (shows only on mobile) */}
      <div className="mt-10 lg:hidden">
        <Testimonial
          content={
            "Depuis près de 4 ans, Scaleway accompagne Streamfizz avec une infrastructure cloud souveraine, sécurisée et performante, dédiée à l'hébergement de leurs applications et données vidéo."
          }
          author={{
            name: 'Simon JAMELIN',
            role: ' Head of Sales',
            companyLogo: '/img/scaleway.png',
            company: 'Scaleway',
            companyUrl: 'https://scaleway.com/fr/a-propos/',
            companyColor: '#7545ae',
          }}
        />
      </div>
    </Container>
  )
}
