import React, { ReactNode } from 'react'
import {
  CardWrapper,
  CardHeader,
  CardThumbnailWrapper,
  CardIconWrapper,
  CardFooter
} from './StyledComponents'

export interface CardProps {
  iconImage?: string
  thumbnailIamge?: string
  withBoxShadow?: boolean
  children: ReactNode
}

const Card = ({
  thumbnailIamge,
  iconImage,
  withBoxShadow = false,
  children
}: CardProps) => {
  return (
    <CardWrapper className="card" withBoxShadow={withBoxShadow}>
      {(thumbnailIamge || iconImage) && (
        <CardHeader>
          {thumbnailIamge && !iconImage && (
            <CardThumbnailWrapper backgroundImage={thumbnailIamge} />
          )}
          {iconImage && !thumbnailIamge && (
            <CardIconWrapper>
              <img src={iconImage} alt="icon" height="24px" />
            </CardIconWrapper>
          )}
        </CardHeader>
      )}
      <CardFooter>{children}</CardFooter>
    </CardWrapper>
  )
}

export default React.memo(Card)
