'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Container from './Container'
import Title from './Title'

type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  return (
    <Container classNames="max-w-3xl">
      <Title level={2} text="Foire aux questions" />

      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-none overflow-hidden"
          >
            <AccordionTrigger className="flex py-3 text-left">
              <h3 className="md:text-lg font-semibold leading-7">{item.question}</h3>
            </AccordionTrigger>
            <AccordionContent className="pl-7">
              <p className="py-3 text-base leading-7 text-muted-foreground">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  )
}
