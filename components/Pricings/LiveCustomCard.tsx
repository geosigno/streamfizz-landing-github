// components/LiveCustomCard.tsx
'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import {
  calculateTotalPrice,
  formatPrice,
  hoursStepsLabels,
  viewerStepsLabels,
  vodOffers,
} from './_utils'
import PricingCard from './PricingCard'
import PricingRange from './PricingRange'

const LiveCustomCard = () => {
  const [selectedVod, setSelectedVod] = useState(vodOffers[0].name)
  const [viewerIndex, setViewerIndex] = useState(1)
  const [hoursIndex, setHoursIndex] = useState(1)

  const totalPrice = calculateTotalPrice(selectedVod, viewerIndex, hoursIndex)

  const formattedPrice = totalPrice > -1 ? formatPrice(totalPrice) : 'Nous contacter'
  const annualPrice = formatPrice(totalPrice * 12)
  const monthlyPriceWithTax = formatPrice(Math.round(totalPrice * 1.2), false)

  return (
    <PricingCard
      title="Votre abonnement sur mesure"
      price={formattedPrice}
      period="HT"
      annualPrice={`${annualPrice} HT`}
      monthlyPrice={`${monthlyPriceWithTax} HT`}
      features={[]}
      isHighlighted={false}
      isInverted={true}
      contactUs={totalPrice === -1}
      customContent={
        <>
          <p className="text-gray-500 mb-8">
            Estimez facilement le tarif de votre abonnement adapté à vos besoins récurrents.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 max-w-full">
              <label className="block font-medium ">Choisissez votre offre hébergement média</label>
              <div className="w-full max-w-32">
                <Select value={selectedVod} onValueChange={setSelectedVod}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez une offre" />
                  </SelectTrigger>
                  <SelectContent>
                    {vodOffers.map((offer) => (
                      <SelectItem key={offer.name} value={offer.name}>
                        {offer.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

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

export default LiveCustomCard
