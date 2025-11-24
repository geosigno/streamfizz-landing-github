'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Container from '../components/Container'
import { ScrollCTA } from '../components/ScrollCTA'
import { gradientClass } from '../components/Title'
import { cn } from '../lib/utils'
import hero from '../public/img/Home9.png'
import { useContactModal } from '../store/contactModal'

export default function Hero({ isMobile }: { isMobile: boolean }) {
  const [textIndex, setTextIndex] = useState(0)
  const dynamicTexts = [
    { text: 'de la vidéo', color: '#FB9B5D' },
    { text: 'de diffusion en direct', color: '#EF4A5F' },
    { text: 'de chaînes WebTV', color: '#6FC78A' },
  ]

  const { open } = useContactModal()

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return isMobile === false ? (
    <MotionConfig reducedMotion={'user'}>
      <div className="relative isolate overflow-hidden">
        {/*  <div className="absolute inset-x-0 bg-gradient-to-r from-zinc-100 to-zinc-200 h-full w-full" /> */}
        <Container classNames="md:py-24">
          <motion.div
            className="mx-auto flex flex-col lg:flex-row items-center gap-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="max-w-3xl text-center ">
              <motion.h1
                className={cn('text-5xl font-bold tracking-tight sm:text-6xl', gradientClass)}
                variants={itemVariants}
              >
                <span className="block font-semibold">
                  La plateforme française <br />
                </span>
                <span className="block font-semibold">qui simplifie votre usage</span>
                <div className="h-[2em] md:h-[1.2em] relative mt-2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                      }}
                      className="absolute left-0 right-0"
                      style={{ color: dynamicTexts[textIndex].color }}
                    >
                      {dynamicTexts[textIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg font-light leading-8 text-muted-foreground"
                variants={itemVariants}
              >
                <motion.span
                  className="text-[#6FC78A] font-semibold"
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  Hébergez
                </motion.span>{' '}
                et{' '}
                <motion.span
                  className="text-[#00B0F0] font-semibold"
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  valorisez
                </motion.span>{' '}
                vos vidéos en France, <br />
                <motion.span
                  className="text-[#EF4A5F] font-semibold"
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  diffusez
                </motion.span>{' '}
                vos événements en direct partout dans le monde.
              </motion.p>

              <motion.div
                className="mt-8 flex items-center justify-center gap-x-6"
                variants={itemVariants}
              >
                <Button
                  variant="primary"
                  className="px-6 py-6 text-base"
                  onClick={() => open('demo')}
                >
                  Demander une démo
                </Button>
              </motion.div>
            </div>

            <div className="lg:flex-1 flex justify-center lg:justify-end">
              <Image
                src={hero}
                alt="Illustration d'un homme et d'une femme devant un écran d'ordinateur affichant une interface de live streaming en direct, VOD et WebTV, avec une icône de cloud sécurisé aux couleurs de la France symbolisant l'hébergement vidéo sécurisé et la protection des données en France."
                className="w-full max-w-md object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 448px"
                loading="eager"
              />
            </div>
          </motion.div>
          <ScrollCTA
            targetId="features-section"
            className="absolute left-1/2 -translate-x-1/2 bottom-8"
          />
        </Container>
      </div>
    </MotionConfig>
  ) : (
    <MotionConfig reducedMotion={'user'}>
      <div className="relative isolate overflow-hidden">
        {/*  <div className="absolute inset-x-0 bg-gradient-to-r from-zinc-100 to-zinc-200 h-full w-full" /> */}
        <Container classNames="md:py-24">
          <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="max-w-3xl text-center ">
              <h1 className={cn('text-5xl font-bold tracking-tight sm:text-6xl', gradientClass)}>
                <span className="block font-semibold">
                  La plateforme française <br />
                </span>
                <span className="block font-semibold">qui simplifie votre usage</span>
                <div className="h-[2em] md:h-[1.2em] relative mt-2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                      }}
                      className="absolute left-0 right-0"
                      style={{ color: dynamicTexts[textIndex].color }}
                    >
                      {dynamicTexts[textIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                <span className="text-[#6FC78A] font-semibold">Hébergez</span> et{' '}
                <span className="text-[#00B0F0] font-semibold">valorisez</span> vos vidéos en
                France, <br />
                <span className="text-[#EF4A5F] font-semibold">diffusez</span> vos événements en
                direct partout dans le monde.
              </p>

              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Button
                  variant="primary"
                  className="px-6 py-6 text-base"
                  onClick={() => open('demo')}
                >
                  Demander une démo
                </Button>
              </div>
            </div>

            <div className="lg:flex-1 flex justify-center lg:justify-end">
              <Image
                src={hero}
                alt="Streamfizz Platform Illustration"
                className="w-full max-w-md object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </div>
          <ScrollCTA
            targetId="features-section"
            className="absolute left-1/2 -translate-x-1/2 bottom-8"
          />
        </Container>
      </div>
    </MotionConfig>
  )
}
