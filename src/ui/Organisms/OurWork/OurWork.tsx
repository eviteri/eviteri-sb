import React, { useState, useCallback, useRef } from 'react'
import { useInViewPort } from '../../../customHooks'
import { useLockScreen } from '../../../customHooks'
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
import Modal from '../../Molecules/Modal'
import {
  OurWorkGallery,
  OurWorkGalleryDetail
} from '../../../typings/ourWorkGallery'

const settings = {
  rows: 2,
  dots: true,
  infinite: true,
  speed: 500,
  slidesPerRow: 3,
  slidesToScroll: 1,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        rows: 1,
        slidesPerRow: 2,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        rows: 1,
        slidesPerRow: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }
  ]
}

export interface OurWorkProps {
  shouldAnimate?: boolean
  title: string
  description: string
  ourWorkGallery: OurWorkGallery
}

const OurWork = ({
  shouldAnimate = false,
  title,
  description,
  ourWorkGallery
}: OurWorkProps) => {
  const intersectionRation = 0.2
  const ourWorkSectionRef = useRef(null)
  const isInViewPort = useInViewPort(intersectionRation, ourWorkSectionRef)
  const shouldTriggerAnimation = isInViewPort && shouldAnimate

  const [showModal, setShowModal] = useState(false)
  const [currentImageIndex, setCurrentImageId] = useState(-1)

  const openModalHandler = useCallback((index: number) => {
    setCurrentImageId(index)
    setShowModal(true)
  }, [])

  const closeModalHandler = useCallback(() => {
    setShowModal(false)
  }, [])

  useLockScreen(showModal)

  return (
    <>
      {showModal && (
        <Modal
          title="Gallery"
          gallery={ourWorkGallery}
          currentImageIndex={currentImageIndex}
          closeModalHandler={closeModalHandler}
        />
      )}
      <OurWorkWrapper
        ref={ourWorkSectionRef}
        shouldAnimate={shouldAnimate}
        shouldTriggerAnimation={shouldTriggerAnimation}
      >
        <OurWorkHeaderWrapper>
          <H2>{title}</H2>
          <P>{description}</P>
        </OurWorkHeaderWrapper>
        <OurWorkFooterWrapper>
          <Slider {...settings}>
            {ourWorkGallery.map((cardIcon: OurWorkGalleryDetail, index) => {
              const { small, title, description, id } = cardIcon
              return (
                <SlideWrapper
                  key={id}
                  className="SlideWrapper"
                  onClick={() => openModalHandler(index)}
                >
                  <Card thumbnailIamge={small}>
                    <CardInnerContent>
                      <H3>{title}</H3>
                      <P>{description}</P>
                    </CardInnerContent>
                  </Card>
                </SlideWrapper>
              )
            })}
          </Slider>
        </OurWorkFooterWrapper>
      </OurWorkWrapper>
    </>
  )
}

export default React.memo(OurWork)
