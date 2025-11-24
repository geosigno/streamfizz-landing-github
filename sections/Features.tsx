'use client'

import { BarChart3, FileVideo, Lock, Palette, Tv, Video } from 'lucide-react'
import Image from 'next/image'
import SimpleParallax from 'simple-parallax-js'
import Container from '../components/Container'
import FeatureItem, { FeatureItemProps } from '../components/FeatureItem'
import HeroSection from '../components/HeroSection'
import Title from '../components/Title'
import imageSolution1 from '../public/img/solution1.png'
import imageSolution2 from '../public/img/solution2.png'

interface FeatureBlockProps {
  imageUrl: any
  imageAlt: string
  features: FeatureItemProps[]
  imagePosition?: 'left' | 'right'
  className?: string
}

const features: FeatureItemProps[] = [
  {
    icon: <FileVideo />,
    title: 'Gestion unifiée de vos vidéos',
    iconColor: 'green',
    description:
      'Hébergez, organisez, catégorisez et enrichissez votre bibliothèque vidéo professionnelle depuis une interface intuitive.',
  },
  {
    icon: <Video />,
    iconColor: 'red',
    title: 'Diffusion en Live professionnel',
    description:
      'Diffusez en Live vos événements sur des pages personnalisées, vos sites et vos réseaux sociaux, avec une diffusion fluide, même à très forte audience.',
  },
  {
    icon: <Palette />,
    iconColor: 'blue',
    title: 'Personnalisation complète',
    description:
      'Adaptez les pages de lecture à votre charte graphique et intégrez le player vidéo facilement sur tous vos supports.',
  },
  {
    icon: <BarChart3 />,
    iconColor: 'orange',
    title: 'Statistiques détaillées',
    description: "Mesurez l'engagement sans compromettre la vie privée de vos spectateurs.",
  },
  {
    icon: <Tv />,
    iconColor: 'blue',
    title: 'Création de chaînes & WebTV',
    description:
      'Créez des WebTV ou chaînes en quelques minutes, offrant un accès centralisé à vos contenus vidéo.',
  },
  {
    icon: <Lock />,
    iconColor: 'orange',
    title: 'Contrôle des accès',
    description:
      'Définissez précisément qui peut voir vos contenus et comment ils peuvent être partagés.',
  },
]

function FeatureBlock({ imageUrl, imageAlt, features, imagePosition = 'left' }: FeatureBlockProps) {
  return (
    <div className={`mx-auto grid grid-cols-1 gap-x-40 lg:grid-cols-6 items-center `}>
      <div
        className={`p-8 md:p-20 lg:col-span-3 ${imagePosition === 'right' ? 'lg:order-last' : ''}`}
      >
        <SimpleParallax
          overflow
          scale={1.04}
          orientation={imagePosition === 'left' ? 'left' : 'right'}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            sizes="(max-width: 768px) 100vw, 376px"
            className="w-full h-auto"
          />
        </SimpleParallax>
      </div>

      <div className="leading-7 lg:col-span-3">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              iconColor={feature.iconColor}
              size="large"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <div
      id="features-section"
      style={{
        scrollMargin: 72,
      }}
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Title level={2} text=" Une solution complète pour gérer tous vos contenus !" />
        </div>

        <div className="mb-8 md:mb-0">
          <FeatureBlock
            imageUrl={imageSolution1}
            imageAlt="Centralisation sécurisée des vidéos en France"
            features={features.slice(0, 3)}
            imagePosition="left"
          />
        </div>

        <FeatureBlock
          imageUrl={imageSolution2}
          imageAlt="Centralisation sécurisée des vidéos en France"
          features={features.slice(3)}
          imagePosition="right"
          className="mt-24 lg:mt-32"
        />
      </Container>
      <div className="relative">
        <div className="absolute inset-x-0 bg-gradient-to-r from-orange-50 to-orange-100 h-full w-full" />

        <HeroSection containerClassName="py-12">
          <div className="mx-auto lg:max-w-4xl text-center">
            <p className="text-lg leading-8 text-white font-light">
              Que ce soit pour générer automatiquement des sous-titres, les traduire en plusieurs
              langues, créer des extraits de vos vidéos, regrouper vos contenus thématiques en
              playlists, et bien plus encore, avec Streamfizz, vous disposez de tous les outils pour
              valoriser et diffuser vos vidéos en toute simplicité.
            </p>
          </div>
        </HeroSection>
      </div>
    </div>
  )
}
