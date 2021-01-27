import React, { useRef } from 'react'
import { useInViewPort } from '../../../customHooks'
import { H2, H3, P } from '../../typography'
import {
  OurServicesOutterWrapper,
  OurServicesWrapper,
  OurServicesHeaderWrapper,
  OurServicesFooterWrapper,
  SlideWrapper,
  CardInnerContent
} from './StyledComponents'
import Card from '../../Molecules/Card'
import Slider from 'react-slick'
import { CardIcons, CardIcon } from '../../../typings/cardIcons'

export interface OurServicesProps {
  shouldAnimate?: boolean
  title: string
  description: string
  cardIcons: CardIcons
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: false,
        infinite: true,
        slidesToShow: 2,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    }
  ]
}

const OurServices = ({
  shouldAnimate = false,
  title,
  description,
  cardIcons
}: OurServicesProps) => {
  const intersectionRation = 0.5
  const ourServicesSectionRef = useRef(null)

  const isInViewPort = useInViewPort(intersectionRation, ourServicesSectionRef)

  const shouldTriggerAnimation = isInViewPort && shouldAnimate

  return (
    <OurServicesOutterWrapper
      ref={ourServicesSectionRef}
      shouldAnimate={shouldAnimate}
      shouldTriggerAnimation={shouldTriggerAnimation}
    >
      <OurServicesWrapper>
        <OurServicesHeaderWrapper>
          <H2>{title}</H2>
          <P>{description}</P>
        </OurServicesHeaderWrapper>
        <OurServicesFooterWrapper>
          <Slider {...settings}>
            {cardIcons.map((cardIcon: CardIcon) => {
              const { iconImage, title, description } = cardIcon
              return (
                <SlideWrapper key={title} className="SlideWrapper">
                  <Card iconImage={iconImage}>
                    <CardInnerContent>
                      <H3>{title}</H3>
                      <P>{description}</P>
                    </CardInnerContent>
                  </Card>
                </SlideWrapper>
              )
            })}
          </Slider>
        </OurServicesFooterWrapper>
      </OurServicesWrapper>
    </OurServicesOutterWrapper>
  )
}

export default React.memo(OurServices)
