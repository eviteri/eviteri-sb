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
  children?: ReactNode
  onImageClickHanlder?: () => void
}

const Card = ({
  thumbnailIamge,
  iconImage,
  withBoxShadow = false,
  children,
  onImageClickHanlder
}: CardProps) => {
  return (
    <CardWrapper
      data-test="ev-card"
      className="card"
      withBoxShadow={withBoxShadow}
    >
      {(thumbnailIamge || iconImage) && (
        <CardHeader>
          {thumbnailIamge && !iconImage && (
            <CardThumbnailWrapper
              data-test="card-thumbnail"
              backgroundImage={thumbnailIamge}
              onClick={onImageClickHanlder}
            />
          )}
          {iconImage && !thumbnailIamge && (
            <CardIconWrapper data-test="card-icon">
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
