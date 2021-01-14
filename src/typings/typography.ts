import { ReactNode } from 'react'

export type WeightType =
  | 'light'
  | 'regular'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | number

export interface TypographyProps {
  weight?: WeightType
  className?: string
  children?: ReactNode
  color?: string
}
