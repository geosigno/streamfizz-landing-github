import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/img/logo.svg'
import Container from './Container'

const footerLinks = [
  {
    title: "Cas d'usages",
    links: [
      {
        label: "Communication d'entreprises & marques",
        href: '/cas-usages/communication-entreprises',
      },
      { label: 'E-learning & Formation', href: '/cas-usages/e-learning-formation' },
      { label: 'Événement en direct', href: '/cas-usages/evenement-en-direct' },
      {
        label: 'Valorisation de patrimoine audiovisuel',
        href: '/cas-usages/valorisation-patrimoine-audiovisuel',
      },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Blog', href: '/blog' },
      {
        label: 'Release Notes',
        href: 'https://help.streamfizz.com/fr/category/release-notes-xin4sf/',
      },
      { label: "Centre d'aide", href: 'https://help.streamfizz.com/fr/' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '/legal/mentions-legal' },
      { label: 'CGU', href: '/legal/cgu' },
      {
        label: 'Politique de confidentialité',
        href: '/legal/politique-de-confidentialite',
      },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-x-0 bg-background-muted h-full w-full" />

      <Container classNames="pb-4">
        <div className="flex flex-col md:flex-row md:gap-x-12">
          <div className="mb-8 md:mb-0 md:max-w-xs">
            <Link href="/" className="inline-block">
              <Image src={logo} alt="Streamfizz Logo" className="h-14 w-auto" />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              La plateforme française qui simplifie votre usage de la vidéo
            </p>
            <div className="mt-2 flex items-center text-sm">
              <a
                href="mailto:contact@streamfizz.com"
                className="flex items-center text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                title="Nous contacter par email"
              >
                <Mail className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Email</span>
              </a>
              <Link
                href="https://linkedin.com"
                className="ml-4 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold">{column.title}</h3>
                <ul className="mt-6 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {/*   {link.disabled ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground opacity-70 cursor-not-allowed">
                            {link.label}
                          </span>
                          <span className="bg-muted text-muted-foreground text-xs py-0.5 px-1.5 rounded-full">
                            Prochainement
                          </span>
                        </div>
                      ) : ( */}
                      <Link href={link.href} className="text-sm text-muted-foreground">
                        {link.label}
                      </Link>
                      {/*  )} */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-center text-xs ">Streamfizz© 2025. Made with ❤️ in Lyon.</p>
      </Container>
    </footer>
  )
}
