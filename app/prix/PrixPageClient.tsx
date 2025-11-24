'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Container from '../../components/Container'
import Title from '../../components/Title'
import { cn } from '../../lib/utils'
import { useContactModal } from '../../store/contactModal'
import { bibliothequeData, diffusionData, faqItems } from './_utils'
import PricingCard from '@/components/Pricings/PricingCard'

// Dynamic imports for optimization
const CtaSection = dynamic(() => import('../../components/CtaSection'))
const FeatureCard = dynamic(() => import('../../components/FeatureCard'))
const LiveCustomCard = dynamic(() => import('../../components/Pricings/LiveCustomCard'))
const PayAsYouGoCard = dynamic(() => import('../../components/Pricings/PayAsYouGoCard'))
const FAQ = dynamic(() => import('../../components/FAQ'))

export default function PrixPageClient() {
  const [activeTab, setActiveTab] = useState('bibliotheque')
  const { open } = useContactModal()

  const handleTryFreeClick = () => {
    open('try')
  }

  const handleCustomOfferClick = () => {
    open('contact')
  }

  return (
    <>
      <Container>
        <Title level={1} text=" Nos offres s'adaptent à vos besoins" />
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <Button
              disableAnimation
              variant={activeTab === 'bibliotheque' ? 'primary' : 'outline'}
              className={cn(
                'rounded-r-none',
                activeTab === 'bibliotheque'
                  ? 'text-white'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              )}
              onClick={() => setActiveTab('bibliotheque')}
            >
              Hébergement média
            </Button>
            <Button
              disableAnimation
              variant={activeTab === 'diffusion' ? 'primary' : 'outline'}
              className={cn(
                'rounded-l-none border-l-0',
                activeTab === 'diffusion' ? 'text-white' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              )}
              onClick={() => setActiveTab('diffusion')}
            >
              Diffusion en direct
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 mx-auto max-w-7xl pt-6">
          {activeTab === 'bibliotheque' ? (
            bibliothequeData.map((card, index) => (
              <PricingCard
                key={index}
                title={card.title}
                price={card.price}
                period={card.period}
                annualPrice={card.annualPrice}
                monthlyPrice={card.monthlyPrice}
                features={card.features}
                isHighlighted={card.isHighlighted}
              />
            ))
          ) : (
            <>
              {diffusionData.map((card, index) => (
                <PricingCard
                  key={index}
                  title={card.title}
                  price={card.price}
                  period={card.period}
                  annualPrice={card.annualPrice}
                  monthlyPrice={card.monthlyPrice}
                  features={card.features}
                  isHighlighted={card.isHighlighted}
                />
              ))}

              <PayAsYouGoCard />
              <LiveCustomCard />
            </>
          )}
        </div>
      </Container>

      <div className="mt-8 mb-12 flex items-center justify-center gap-x-6">
        <Button variant="primary" size="lg" onClick={() => open('contact')}>
          Nous contacter
        </Button>
      </div>

      <Container>
        <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Custom Offer Card */}
          <FeatureCard
            title="Des besoins spécifiques ? Une offre sur mesure est possible, à la carte."
            features={[
              { text: 'Capacité de stockage' },
              { text: 'Bande passante VOD' },
              { text: 'Durée de live' },
              { text: 'Nombre de spectateurs' },
              { text: 'Heure de transcription' },
              { text: 'Caractères de traduction' },
              { text: 'Page dédiée personnalisée' },
            ]}
            variant="hero"
            cardType="expert"
            buttonText="Demander un devis"
            onButtonClick={handleCustomOfferClick}
            gradientColors={['#FB9B5D', '#EF4444', '#00B0F0', '#6FC78A']}
          />

          {/* Trial Card */}
          <FeatureCard
            title="Vous débutez ? Testez gratuitement la plateforme pendant 15 jours, sans engagement."
            features={[
              { text: '5 vidéos hébergées incluses' },
              { text: 'Bibliothèque média' },
              { text: 'Diffusion en direct sur demande' },
              { text: '1 Utilisateur' },
              { text: '1 transcription automatique de 5 minutes' },
            ]}
            variant="basic"
            cardType="trial"
            buttonText="Essayer gratuitement"
            onButtonClick={handleTryFreeClick}
          />
        </div>
      </Container>

      <FAQ items={faqItems} />

      <CtaSection />
    </>
  )
}