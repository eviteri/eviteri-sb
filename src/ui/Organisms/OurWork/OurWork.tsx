import React from 'react'
import { H2, H3, P } from '../../typography'
import {
  OurWorkWrapper,
  OurWorkHeaderWrapper,
  OurWorkFooterWrapper,
  SlideWrapper,
  CardInnerContent
} from './StyledComponents'
import Card from '../../Molecules/Card'
import Slider from 'react-slick'
import {
  OurWorkGallery,
  OurWorkGalleryDetail
} from '../../../typings/ourWorkGallery'

export interface OurWorkProps {
  title: string
  description: string
  ourWorkGallery: OurWorkGallery
}

const OurWork = ({ title, description, ourWorkGallery }: OurWorkProps) => {
  return (
    <OurWorkWrapper>
      <OurWorkHeaderWrapper>
        <H2>{title}</H2>
        <P>{description}</P>
      </OurWorkHeaderWrapper>
      <OurWorkFooterWrapper>
        {ourWorkGallery.map((cardIcon: OurWorkGalleryDetail) => {
          const { small, title, description, id } = cardIcon
          return (
            <SlideWrapper key={id} className="SlideWrapper">
              <Card thumbnailIamge={small}>
                <CardInnerContent>
                  <H3>{title}</H3>
                  <P>{description}</P>
                </CardInnerContent>
              </Card>
            </SlideWrapper>
          )
        })}
      </OurWorkFooterWrapper>
    </OurWorkWrapper>
  )
}

export default React.memo(OurWork)
