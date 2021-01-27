import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import {
  OurWorkGallery,
  OurWorkGalleryDetail
} from '../../../typings/ourWorkGallery'
import { H2 } from '../../typography'
import {
  ModalWrapper,
  ModalContentWrapper,
  ModalHeaderWrapper,
  ModalCloseButton,
  ModalBoddyWrapper,
  SlideWrapper,
  Slide,
  ModalFooterWrapper,
  ModalNavigationWrapper,
  ModalArrowButton
} from './StyledComponents'

const sliderSettings = {
  className: 'gallery-slider',
  centerMode: true,
  infinite: true,
  arrows: false,
  centerPadding: '100px',
  slidesToShow: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        infinite: true,
        slidesToShow: 1
      }
    }
  ]
}

export interface ModalProps {
  title: string
  currentImageIndex?: number
  gallery: OurWorkGallery
  closeModalHandler: () => void
}

const Modal = ({
  title,
  gallery,
  currentImageIndex = 0,
  closeModalHandler
}: ModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex)
  const sliderRef = useRef<Slider>(null)

  const onNextButtonHandler = () => {
    sliderRef?.current?.slickNext()

    if (currentIndex < gallery.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const onBackButtonHandler = () => {
    sliderRef?.current?.slickPrev()

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(gallery.length - 1)
    }
  }

  useEffect(() => {
    if (currentImageIndex > 0 && sliderRef.current) {
      sliderRef.current.slickGoTo(currentImageIndex)
    }
  }, [currentImageIndex])

  return (
    <ModalWrapper>
      <ModalContentWrapper>
        <ModalHeaderWrapper>
          <H2>{title}</H2>
          <ModalCloseButton onClick={closeModalHandler}>x</ModalCloseButton>
        </ModalHeaderWrapper>
        <ModalBoddyWrapper>
          <Slider {...sliderSettings} ref={sliderRef}>
            {gallery.map((cardIcon: OurWorkGalleryDetail) => {
              const { large, id } = cardIcon
              return (
                <SlideWrapper key={id} className="SlideWrapper">
                  <Slide backgroundImage={large} />
                </SlideWrapper>
              )
            })}
          </Slider>
        </ModalBoddyWrapper>
        <ModalFooterWrapper>
          <div>{`${currentIndex + 1} / ${gallery.length}`}</div>
          <ModalNavigationWrapper>
            <ModalArrowButton onClick={onNextButtonHandler}>
              Next
            </ModalArrowButton>
            <ModalArrowButton onClick={onBackButtonHandler}>
              Back
            </ModalArrowButton>
          </ModalNavigationWrapper>
        </ModalFooterWrapper>
      </ModalContentWrapper>
    </ModalWrapper>
  )
}

export default React.memo(Modal)
