'use client'

import { motion } from 'framer-motion'
import { cn } from '../lib/utils'
import { useContactModal } from '../store/contactModal'
import HeroSection from './HeroSection'
import { gradientClassWhite } from './Title'
import { Button } from './ui/button'

interface CtaSectionProps {
  title?: string
  size?: 'default' | 'small'
  highlightWord?: string
  description?: string
  ctaText?: string
  color?: 'orange' | 'red' | 'green' | 'blue'
}

export default function CtaSection({
  title = 'Prêt à simplifier votre usage de la',
  size = 'default',
  highlightWord = 'vidéo',
  description = " Demandez une démonstration personnalisée dès aujourd'hui.",
  ctaText = 'Demander une démo',
  color = 'orange',
}: CtaSectionProps) {
  const colorMap = {
    orange: '#FB9B5D',
    red: '#EF4444',
    green: '#6FC78A',
    blue: '#00B0F0',
  }

  const { open } = useContactModal()

  const hexColor = colorMap[color]

  return (
    <HeroSection size={size}>
      <h2
        className={cn(
          'text-4xl md:text-5xl font-semibold tracking-tight text-balance text-white',
          gradientClassWhite
        )}
      >
        {title}{' '}
        <motion.span
          style={{
            color: hexColor,
          }}
          className="inline-block"
        >
          {highlightWord}
        </motion.span>{' '}
        ?
      </h2>
      <p className="mt-6 text-lg/8 text-pretty text-gray-300">{description}</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button variant="primary" onClick={() => open('demo')}>
          {ctaText}
        </Button>
      </div>
    </HeroSection>
  )
}
