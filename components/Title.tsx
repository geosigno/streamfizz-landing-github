import { cn } from '../lib/utils'

type TitleProps = {
  text: string
  subtitle?: string
  level: 1 | 2 | 3
  isSmall?: boolean
  invertColor?: boolean
  smallMargin?: boolean
}
export const gradientClass =
  'bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text py-2 text-transparent'
export const gradientClassWhite =
  'bg-gradient-to-r py-2 from-gray-100 to-gray-300 bg-clip-text text-transparent'

const Title = ({
  text,
  subtitle,
  level,
  invertColor = false,
  isSmall = false,
  smallMargin = false,
}: TitleProps) => {
  // Define text color classes based on invertColor prop
  const titleColorClass = invertColor
    ? 'text-white dark:text-black' // White in light mode, black in dark mode when inverted
    : '' // Default text color from theme

  const subtitleColorClass = invertColor
    ? 'text-white/80 dark:text-black/70' // Slightly transparent white/black when inverted
    : 'text-muted-foreground' // Default muted text

  // Common subtitle element to avoid duplication
  const subtitleElement = subtitle ? (
    <p className={`mt-4 text-lg ${subtitleColorClass} font-light max-w-3xl mx-auto`}>{subtitle}</p>
  ) : null

  if (level === 1) {
    return (
      <div className={cn('text-center', smallMargin ? 'mb-4 md:mb-6' : 'mb-16')}>
        <h1
          className={`text-4xl lg:text-5xl font-bold tracking-tight ${titleColorClass} ${gradientClass}`}
        >
          {text}
        </h1>
        {subtitleElement}
      </div>
    )
  } else if (level === 2) {
    return (
      <div className={cn('text-center', smallMargin ? 'mb-8' : 'mb-16')}>
        <h2
          className={`${isSmall ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-4xl'} font-bold tracking-tight ${titleColorClass} ${gradientClass}`}
        >
          {text}
        </h2>
        {subtitleElement}
      </div>
    )
  } else if (level === 3) {
    return (
      <div className="text-left">
        <h3
          className={`${isSmall ? 'text-center md:text-left text-xl' : 'text-2xl'} font-bold tracking-tight ${titleColorClass} ${gradientClass}`}
        >
          {text}
        </h3>
        {subtitleElement}
      </div>
    )
  }

  // Default fallback
  return (
    <div className="text-center mb-16">
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${titleColorClass} ${gradientClass}`}
      >
        {text}
      </h2>
      {subtitleElement}
    </div>
  )
}

export default Title
