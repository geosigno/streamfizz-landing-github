'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, type HTMLMotionProps } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        primary:
          'bg-gradient-to-r from-[#EF4A5F]/90 to-[#FB9B5D]/90 text-white hover:from-[#EF4A5F] hover:to-[#FB9B5D] transition-colors',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-14 px-14 text-lg',
        icon: 'h-10 w-10',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

// Motion variants for the button
const buttonMotionVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.98 },
}

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'animate' | 'initial' | 'transition' | 'variants'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disableAnimation?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disableAnimation = false, ...props }, ref) => {
    // Create the base component
    const Comp = asChild ? Slot : 'button'

    // Create the motion component
    const MotionComp = asChild ? motion(Comp) : motion.button

    // If animations are disabled, just render the regular component
    if (disableAnimation) {
      return (
        //@ts-ignore
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
      )
    }

    // Otherwise, render the motion component with animations
    return (
      <MotionComp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonMotionVariants}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
