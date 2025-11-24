'use client'

import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu, User, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/img/logo.svg'
import { useContactModal } from '../store/contactModal'
import Container from './Container'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const { open } = useContactModal()

  const headerConfig = {
    navigation: [
      {
        title: 'Découvrir Streamfizz',
        type: 'special',
        href: '/#features-section',
        scrollToId: 'features-section',
      },
      {
        title: "Cas d'usages",
        type: 'dropdown',
        items: [
          {
            title: "Communication d'entreprises & marques",
            href: '/cas-usages/communication-entreprises',
            description:
              'Valorisez votre image de marque et dynamisez vos communications avec la vidéo',
          },
          {
            title: 'Événement en direct',
            href: '/cas-usages/evenement-en-direct',
            description:
              'Diffusez vos événements en direct en toute fiabilité, avec une plateforme robuste et éprouvée',
          },
          {
            title: 'E-learning & Formation',
            href: '/cas-usages/e-learning-formation',
            description:
              "Créez des parcours d'apprentissage vidéo puissants, accessibles et sécurisés",
          },
          {
            title: 'Valorisation de patrimoine audiovisuel',
            href: '/cas-usages/valorisation-patrimoine-audiovisuel',
            description: 'Valorisez et faites vivre votre patrimoine audiovisuel',
          },
        ],
      },
      {
        title: 'Prix',
        type: 'link',
        href: '/prix',
      },

      {
        title: 'Ressources',
        type: 'dropdown',
        items: [
          {
            title: 'Release Notes',
            href: 'https://help.streamfizz.com/fr/category/release-notes-xin4sf/',
            description: 'Découvrez toutes les nouveautés de Streamfizz',
          },
          {
            title: "Centres d'aides",
            href: 'https://help.streamfizz.com/fr/',
            description: 'Retrouvez toutes les réponses à vos questions',
          },
        ],
      },
      {
        title: 'Blog',
        href: '/blog',
        description: 'Retrouvez toutes nos actualités et conseils',
      },
    ],
    callToAction: {
      title: 'Nous contacter',
      href: '#contact',
      callback: () => {
        open('contact')
      },
    },
  }

  const handleSpecialNavigation = (item: any) => {
    if (isHomePage && item.scrollToId) {
      const section = document.getElementById(item.scrollToId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
      return true
    }
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background">
      <Container classNames="py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href={'/'} className="flex items-center">
              <Image src={logo} alt="Streamfizz" className="h-14 w-auto" loading="eager" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {headerConfig.navigation.map((item, index) => {
                  if (item.type === 'special') {
                    return (
                      <NavigationMenuItem key={index}>
                        {isHomePage ? (
                          <Button
                            variant="ghost"
                            className="text-sm font-medium hover:text-primary"
                            onClick={() => handleSpecialNavigation(item)}
                          >
                            {item.title}
                          </Button>
                        ) : (
                          <Link href={item.href || '#'} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                'text-sm font-medium hover:text-primary'
                              )}
                            >
                              {item.title}
                            </NavigationMenuLink>
                          </Link>
                        )}
                      </NavigationMenuItem>
                    )
                  } else if (item.type === 'dropdown') {
                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger className="text-sm font-medium hover:text-primary data-[state=open]:text-primary">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                            {item?.items?.length &&
                              item.items.map((subItem, subIndex) => (
                                <ListItem
                                  key={subIndex}
                                  href={subItem.href}
                                  title={subItem.title}
                                  //disabled={subItem.disabled}
                                >
                                  {subItem?.description}
                                </ListItem>
                              ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )
                  } else {
                    return (
                      <NavigationMenuItem key={index}>
                        <Link href={item.href || '#'} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              'text-sm font-medium hover:text-primary'
                            )}
                          >
                            {item.title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="primary" onClick={headerConfig.callToAction.callback}>
              {headerConfig.callToAction.title}
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
              title="Se connecter"
            >
              <Link href="https://app.streamfizz.live" target="_blank" rel="noopener noreferrer">
                <User className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="pt-6 px-4 h-[85vh] max-h-[85vh] overflow-hidden block"
              >
                <div className="flex flex-col h-full overflow-hidden">
                  <SheetHeader className="flex flex-row items-center justify-between pb-4">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                  </SheetHeader>

                  {/* Scrollable content area */}
                  <div className="flex-1 overflow-y-auto no-scrollbar">
                    <div className="space-y-1">
                      <Accordion type="single" collapsible className="w-full">
                        {headerConfig.navigation.map((item, index) => {
                          if (item.type === 'special') {
                            return (
                              <div key={index} className="py-3">
                                {isHomePage ? (
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-start p-0 text-base font-medium hover:text-primary hover:bg-transparent"
                                    onClick={() => {
                                      handleSpecialNavigation(item)
                                      setIsMenuOpen(false)
                                    }}
                                  >
                                    {item.title}
                                  </Button>
                                ) : (
                                  <Button
                                    variant="ghost"
                                    asChild
                                    className="w-full justify-start p-0 text-base font-medium hover:text-primary hover:bg-transparent"
                                  >
                                    <Link
                                      href={item.href || '#'}
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {item.title}
                                    </Link>
                                  </Button>
                                )}
                              </div>
                            )
                          } else if (item.type === 'dropdown') {
                            return (
                              <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-0"
                              >
                                <AccordionTrigger className="py-3 text-base font-medium hover:text-primary">
                                  {item.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="space-y-2 pl-4">
                                    {item?.items?.length &&
                                      item.items.map((subItem, subIndex) => (
                                        <div key={subIndex} className="py-1">
                                          {/*  {subItem.disabled ? (
                                            <div className="flex items-center gap-2 text-base font-medium opacity-70 cursor-not-allowed">
                                              {subItem.title}
                                              <span className="bg-muted text-muted-foreground text-xs py-0.5 px-1.5 rounded-full">
                                                Prochainement
                                              </span>
                                            </div>
                                          ) : ( */}
                                          <Link
                                            href={subItem.href}
                                            className="block text-base font-medium hover:text-primary"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            {subItem.title}
                                          </Link>
                                          {/*  )} */}
                                          {subItem.description && (
                                            <p className="text-xs text-muted-foreground mt-1">
                                              {subItem.description}
                                            </p>
                                          )}
                                        </div>
                                      ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            )
                          } else {
                            return (
                              <div key={index} className="py-3">
                                <Button
                                  variant="ghost"
                                  asChild
                                  className="w-full justify-start p-0 text-base font-medium hover:text-primary hover:bg-transparent"
                                >
                                  <Link
                                    href={item.href || '#'}
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {item.title}
                                  </Link>
                                </Button>
                              </div>
                            )
                          }
                        })}
                      </Accordion>
                    </div>
                  </div>

                  {/* Fixed buttons at bottom */}
                  <div className="pt-4 mt-auto border-t space-y-3">
                    <Button variant="outline" className="w-full" asChild>
                      <Link
                        href="https://app.streamfizz.live"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Se connecter
                      </Link>
                    </Button>

                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={() => {
                        headerConfig.callToAction.callback()
                        setIsMenuOpen(false)
                      }}
                    >
                      {headerConfig.callToAction.title}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { title: string; disabled?: boolean }
>(({ className, title, children, disabled, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            disabled
              ? 'cursor-default opacity-70'
              : 'hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary',
            className
          )}
          onClick={disabled ? (e) => e.preventDefault() : undefined}
          {...props}
        >
          <div
            className={cn(
              'text-sm font-medium leading-none  flex items-center gap-2',
              !disabled && 'group-hover:text-primary'
            )}
          >
            {title}
            {disabled && (
              <span className="bg-muted text-muted-foreground text-xs py-0.5 px-1.5 rounded-full">
                Prochainement
              </span>
            )}
          </div>
          {children && (
            <p className="line-clamp-3 text-xs leading-snug text-muted-foreground">{children}</p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
