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
  children: ReactNode
}

const Card = ({ thumbnailIamge, iconImage, children }: CardProps) => {
  return (
    <CardWrapper className="card">
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
      <CardFooter>{children}</CardFooter>
    </CardWrapper>
  )
}

export default React.memo(Card)
