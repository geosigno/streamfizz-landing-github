import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { useContactModal } from '../../store/contactModal'
import { Button } from '../ui/button'

type PricingFeature = {
  text: string
}

type PricingCardProps = {
  title: string
  price: string
  asterixPrice?: string
  period: string
  annualPrice?: string
  monthlyPrice?: string
  features: PricingFeature[]
  isHighlighted?: boolean
  customContent?: React.ReactNode
  contactUs?: boolean
  isInverted?: boolean
}

export default function PricingCard({
  title,
  price,
  asterixPrice,
  period,
  annualPrice,
  monthlyPrice,
  features,
  isHighlighted = false,
  customContent,
  contactUs = false,
  isInverted = false,
}: PricingCardProps) {
  const { open } = useContactModal()

  const renderPriceHeader = () => {
    if (contactUs) {
      return (
        <div className="flex flex-col items-start mt-16">
          <span className="text-3xl font-bold tracking-tight">Contactez-nous</span>
          <Button variant="primary" className="mt-4" onClick={() => open('contact')}>
            Contactez-nous
          </Button>
        </div>
      )
    }

    return (
      <>
        <div className="mt-6 flex items-baseline gap-x-1">
          <span className="text-5xl font-bold tracking-tight">{price}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {annualPrice && (
            <>
              soit <span className="font-medium">{annualPrice}</span> facturé annuellement{' '}
              <br />{' '}
            </>
          )}
          {monthlyPrice && (
            <>
              soit <span className="font-medium">{monthlyPrice}</span> facturé mensuellement{' '}
              <br />{' '}
            </>
          )}
        </p>
        {asterixPrice && <p className="mt-2 text-sm text-muted-foreground">{asterixPrice}</p>}
      </>
    )
  }

  const renderFeatures = () => {
    if (customContent) {
      return <div className={cn(isInverted ? 'mb-6' : 'mt-6')}>{customContent}</div>
    }

    return (
      <ul role="list" className={cn(isInverted ? 'mb-6' : 'mt-6', 'space-y-3 text-sm')}>
        {features.map((feature, index) => (
          <li key={index} className="flex gap-x-3 items-center group">
            <div
              className={cn(
                'rounded-full p-1 flex-none mt-0.5 transition-colors',
                isHighlighted ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
              )}
            >
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <span className="group-hover transition-colors">{feature.text}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div
      className={cn(
        'relative rounded-2xl bg-background-muted shadow',
        isHighlighted ? 'border-2 border-primary p-8 scale-[1.02]' : 'border border-gray-200 p-6'
      )}
    >
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-white text-xs font-medium">
          Populaire
        </div>
      )}

      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {isInverted ? (
        <>
          {renderFeatures()}
          {renderPriceHeader()}
        </>
      ) : (
        <>
          {renderPriceHeader()}
          {renderFeatures()}
        </>
      )}
    </div>
  )
}
