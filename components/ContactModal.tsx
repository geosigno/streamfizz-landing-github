'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AtSign, Building, Loader2, MessageSquare, Send, User } from 'lucide-react'
import { z } from 'zod'
import { cn } from '../lib/utils'
import { useContactModal } from '../store/contactModal'

export const contactFormSchema = z.object({
  email: z.string().email({
    message: 'Veuillez entrer une adresse e-mail valide.',
  }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, {
    message: 'Veuillez entrer un message.',
  }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactModal() {
  const { isOpen, type, close } = useContactModal()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      message: '',
    },
  })

  const getTitleByType = () => {
    switch (type) {
      case 'demo':
        return 'Demander une démo'
      case 'contact':
        return 'Parlez à nos experts'
      case 'try':
        return 'Demander un essai gratuit'
      default:
        return 'Parlez à nos experts'
    }
  }

  const getDescriptionByType = () => {
    switch (type) {
      case 'demo':
        return 'Remplissez le formulaire ci-dessous pour demander une démonstration de notre produit.'
      case 'contact':
        return 'Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.'
      case 'try':
        return 'Remplissez le formulaire pour essayer notre solution.'
      default:
        return 'Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.'
    }
  }

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          type,
        }),
      })

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi du message.")
      }

      toast.success('Votre message a été envoyé avec succès !')
      form.reset()
      close()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Une erreur est survenue.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden rounded-xl">
        <div className={cn('p-6 pb-0')}>
          <DialogTitle className="text-3xl font-bold tracking-tight">
            {getTitleByType()}
          </DialogTitle>
          <DialogDescription>{getDescriptionByType()}</DialogDescription>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 px-6 py-6">
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Prénom</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Jean" className="pl-9" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Nom</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Dupont" className="pl-9" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="jean.dupont@example.com" className="pl-9" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Entreprise</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Building className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Entreprise SAS" className="pl-9" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        placeholder="Votre message..."
                        className="min-h-[120px] pl-9 resize-none"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-6 px-0 gap-2">
              <Button type="button" variant="outline" onClick={close} className="w-full sm:w-auto">
                Annuler
              </Button>
              <Button
                type="submit"
                variant={'primary'}
                disabled={isSubmitting}
                className={cn('w-full sm:w-auto transition-all', 'text-white hover:opacity-90')}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
