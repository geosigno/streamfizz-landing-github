'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import Title from '../components/Title'
import logoAura from '../public/logo/white_aura.png'
import logoGlEvents from '../public/logo/white_gl-events-logo.png'
import logoSeb from '../public/logo/white_groupe-seb.png'
import logoArchive from '../public/logo/white_Logo-archives94-1.png'
import logoLyfe from '../public/logo/white_logo-header.png'
import logoInfopro from '../public/logo/white_LOGO_INFOPRO_DIGITAL_2022.png'
import logoInsa from '../public/logo/white_Logo_INSA_Lyon.png'
import logoOccitanie from '../public/logo/white_occitanie.png'

type Client = {
  name: string
  logo: any
}

const clients: Client[] = [
  { name: 'INSA', logo: logoInsa },
  {
    name: 'Région Occitanie',
    logo: logoOccitanie,
  },
  { name: 'Lyfe', logo: logoLyfe },
  {
    name: 'GL Events',
    logo: logoGlEvents,
  },
  {
    name: 'infopro',
    logo: logoInfopro,
  },
  { name: 'aura', logo: logoAura },
  { name: 'archive', logo: logoArchive },
  { name: 'seb', logo: logoSeb },
]

export default function Trust() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 50,
        damping: 10,
      },
    },
  }

  return (
    <HeroSection containerClassName="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Title
          level={2}
          text="Ils nous font confiance"
          subtitle="Et vous, prêt à nous rejoindre ?"
          invertColor={true}
          isSmall
        />
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="col-span-1 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative h-16 w-full flex items-center justify-center">
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src={client.logo || '/placeholder.svg'}
                    alt={`Logo ${client.name}`}
                    className="max-h-12 h-full w-auto object-contain"
                    style={{ opacity: 1 }}
                    sizes="(max-width: 768px) 120px, 120px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </HeroSection>
  )
}
