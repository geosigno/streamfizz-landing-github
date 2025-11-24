declare module 'react-syntax-highlighter' {
  import { ComponentType } from 'react'
  
  interface SyntaxHighlighterProps {
    style?: any
    language?: string
    PreTag?: string | ComponentType<any>
    className?: string
    customStyle?: React.CSSProperties
    children: React.ReactNode
    [key: string]: any
  }
  
  export const Prism: ComponentType<SyntaxHighlighterProps>
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
  export const oneDark: any
}