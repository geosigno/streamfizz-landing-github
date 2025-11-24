'use client'

import { Button } from '@/components/ui/button'
import { CSSProperties } from 'react'
import Link from 'next/link'
import { Category } from '../_types'

interface CategoryButtonsProps {
  categories: Category[]
  selectedCategory?: string | null
}

export default function CategoryButtons({
  categories,
  selectedCategory,
}: CategoryButtonsProps) {
  const getButtonGradientStyle = (color?: string): CSSProperties => {
    if (!color) return {}

    try {
      // Convert hex to RGB
      const r = parseInt(color.slice(1, 3), 16)
      const g = parseInt(color.slice(3, 5), 16)
      const b = parseInt(color.slice(5, 7), 16)

      // Create lighter version (120% of original)
      const darkenFactor = 1.2
      const darkR = Math.floor(r * darkenFactor)
      const darkG = Math.floor(g * darkenFactor)
      const darkB = Math.floor(b * darkenFactor)

      // Return inline gradient style
      return {
        background: `linear-gradient(to right, rgb(${darkR}, ${darkG}, ${darkB}), ${color})`,
      }
    } catch (e) {
      return {}
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {/* "All articles" button with default gradient */}
      <Button
        variant={selectedCategory === null || selectedCategory === undefined ? 'default' : 'outline'}
        asChild
        className={selectedCategory === null || selectedCategory === undefined ? 'bg-gradient-to-r from-purple-600 to-blue-500' : ''}
      >
        <Link href="/blog">
          Tous les articles
        </Link>
      </Button>

      {categories.map((category) => {
        const isSelected = selectedCategory === category.slug

        return (
          <Button
            key={category.id}
            variant={isSelected ? 'default' : 'outline'}
            asChild
            style={isSelected && category.color ? getButtonGradientStyle(category.color) : {}}
            className={
              isSelected && !category.color ? 'bg-gradient-to-r from-purple-600 to-blue-500' : ''
            }
          >
            <Link href={`/blog/category/${category.slug}`}>
              {category.name}
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
