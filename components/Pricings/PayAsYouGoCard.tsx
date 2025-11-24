// components/PricingPayAsYouGoCard.tsx
'use client'
import { useState } from 'react'
import { calculateLivePrice, formatPrice, hoursStepsLabels, viewerStepsLabels } from './_utils'
import PricingCard from './PricingCard'
import PricingRange from './PricingRange'

const PayAsYouGoCard = () => {
  const [viewerIndex, setViewerIndex] = useState(1)
  const [hoursIndex, setHoursIndex] = useState(1)

  const livePrice = calculateLivePrice(viewerIndex, hoursIndex)
  const formattedPrice = formatPrice(livePrice)

  return (
    <PricingCard
      title="Live Pay as you go"
      price={formattedPrice}
      period="HT"
      features={[]}
      asterixPrice="  Estimation du prix de la diffusion de votre événement en direct hors
            abonnement VOD, facturation sur la base de votre consommation
            mensuelle"
      isHighlighted={true}
      isInverted={true}
      contactUs={livePrice === -1}
      customContent={
        <>
          <p className="text-gray-500 mb-8">
            Profitez d'une offre de live adaptable à vos besoins, sans engagement sur le volume.
          </p>

          <p className="font-medium mb-8">Estimer le prix de votre direct</p>

          <div className="space-y-6">
            <PricingRange
              label="Nombre d'heures de live :"
              value={hoursIndex}
              steps={hoursStepsLabels}
              onChange={setHoursIndex}
            />

            <PricingRange
              label="Nombre de spectateurs :"
              value={viewerIndex}
              steps={viewerStepsLabels}
              onChange={setViewerIndex}
            />
          </div>
        </>
      }
    />
  )
}

export default PayAsYouGoCard
