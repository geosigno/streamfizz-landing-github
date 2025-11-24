'use client'

import { cn } from '../lib/utils'

const Container = ({
  children,
  size = 'default',
  classNames,
}: {
  children: React.ReactNode
  size?: 'default' | 'small'
  classNames?: string
}) => {
  return (
    <div
      className={cn(
        'mx-auto px-6 py-12 relative',
        size === 'default' ? ' max-w-7xl' : 'max-w-4xl',
        classNames
      )}
    >
      {children}
    </div>
  )
}

export default Container
