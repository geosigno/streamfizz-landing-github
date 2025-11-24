import Title from './Title'

export type FeatureItemProps = {
  title: string
  description: string
  icon?: React.ReactNode
  emoji?: string
  iconColor?: 'blue' | 'red' | 'green' | 'orange'
  size?: 'default' | 'large'
  align?: 'left' | 'right'
}

function FeatureItem({
  title,
  description,
  icon,
  emoji,
  iconColor = 'orange',
  size = 'default',
  align = 'left',
}: FeatureItemProps) {
  const isLarge = size === 'large'
  const isRightAligned = align === 'right'

  // Map color names to hex values
  const colorMap = {
    orange: '#FB9B5D',
    red: '#EF4444',
    green: '#6FC78A',
    blue: '#00B0F0',
  }

  // Get the hex color value
  const hexColor = colorMap[iconColor]

  return (
    <div className="relative">
      {/* Mobile layout (column with centered elements) */}
      <div className="md:hidden flex flex-col items-center text-center">
        {/* Icon or Emoji */}
        <div
          className={`flex-shrink-0 flex items-center justify-center rounded-full shadow mb-4 
            ${isLarge ? 'w-16 h-16' : 'w-12 h-12'} bg-white`}
        >
          {emoji ? (
            <span className={`${isLarge ? 'text-3xl' : 'text-2xl'}`}>{emoji}</span>
          ) : (
            <div style={{ color: hexColor }}>{icon}</div>
          )}
        </div>

        {/* Title */}
        <Title level={3} text={title} isSmall />

        {/* Description */}
        <p className={`font-light leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>
          {description}
        </p>
      </div>

      {/* Desktop layout (row with conditional alignment) */}
      <div className={`hidden md:block ${isRightAligned ? 'text-right' : 'text-left'}`}>
        {/* Title and icon container */}
        <div className={`flex items-center gap-4 mb-2 ${isRightAligned ? 'justify-end' : ''}`}>
          {/* Icon or Emoji - always to the left of the title */}
          <div
            className={`flex-shrink-0 flex items-center justify-center rounded-full shadow 
              ${isLarge ? 'w-12 h-12' : 'w-10 h-10'} bg-white`}
          >
            {emoji ? (
              <span className={`${isLarge ? 'text-2xl' : 'text-xl'}`}>{emoji}</span>
            ) : (
              <div style={{ color: hexColor }}>{icon}</div>
            )}
          </div>
          <Title level={3} text={title} isSmall />
        </div>

        {/* Description with proper alignment */}
        <p
          className={`font-light leading-relaxed ${isLarge ? 'text-base' : 'text-sm'} ${
            isRightAligned ? '' : 'pl-16'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureItem
