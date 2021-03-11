import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import {
  OurWorkGallery,
  OurWorkGalleryDetail
} from '../../../typings/ourWorkGallery'
import {
  ModalWrapper,
  ModalContentWrapper,
  ModalInnerContentWrapper,
  ModalHeaderWrapper,
  ModalTitle,
  ModalCloseButton,
  ModalBoddyWrapper,
  SlideWrapper,
  Slide,
  ModalFooterWrapper,
  ModalCounter,
  ModalNavigationWrapper,
  ModalArrowButton
} from './StyledComponents'

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
  const [shouldClose, setShouldClose] = useState(false)
  const [hasAnimationEnded, setHasAnimationEnded] = useState(false)
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

  const onCloseButtonHandler = () => {
    setShouldClose(true)
    setTimeout(() => {
      closeModalHandler()
    }, 200)
  }

  const sliderSettings = {
    className: 'gallery-slider',
    centerMode: true,
    infinite: true,
    arrows: false,
    centerPadding: '100px',
    slidesToShow: 1,
    speed: 500,
    onSwipe: (swipeDirection: string) => {
      if (swipeDirection === 'left') {
        onNextButtonHandler()
      } else {
        onBackButtonHandler()
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          infinite: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          infinite: true,
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  }

  useEffect(() => {
    if (currentImageIndex > 0 && sliderRef.current) {
      sliderRef.current.slickGoTo(currentImageIndex)
    }
  }, [currentImageIndex])

  return (
    <ModalWrapper>
      <ModalContentWrapper
        data-test="modal-content-wrapper"
        triggerCloseAnimation={shouldClose}
        onAnimationEnd={() => setHasAnimationEnded(true)}
      >
        <ModalInnerContentWrapper
          data-test="modal-inner-content-wrapper"
          hasModalContentWrapperFineshedAnimating={hasAnimationEnded}
        >
          <ModalHeaderWrapper>
            <ModalTitle data-test="modal-title">{title}</ModalTitle>
            <ModalCloseButton
              data-test="modal-close-button"
              onClick={onCloseButtonHandler}
            >
              <FontAwesomeIcon icon={faTimes} />
            </ModalCloseButton>
          </ModalHeaderWrapper>
          <ModalBoddyWrapper>
            <Slider {...sliderSettings} ref={sliderRef}>
              {gallery.map((image: OurWorkGalleryDetail) => {
                const { large, small, id, url } = image
                const ImageSlide = (
                  <Slide
                    backgroundImage={large}
                    mobileBackgroundImage={small}
                  />
                )
                return (
                  <SlideWrapper
                    key={id}
                    className="SlideWrapper"
                    data-test="modal-slide-wrapper"
                  >
                    {url ? (
                      <a href={url} target="_blank" rel="noreferrer">
                        {ImageSlide}
                      </a>
                    ) : (
                      ImageSlide
                    )}
                  </SlideWrapper>
                )
              })}
            </Slider>
          </ModalBoddyWrapper>
          <ModalFooterWrapper>
            <ModalCounter data-test="modal-counter">{`${currentIndex + 1} / ${
              gallery.length
            }`}</ModalCounter>
            <ModalNavigationWrapper>
              <ModalArrowButton
                data-test="modal-back-button"
                onClick={onBackButtonHandler}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </ModalArrowButton>
              <ModalArrowButton
                data-test="modal-next-button"
                onClick={onNextButtonHandler}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </ModalArrowButton>
            </ModalNavigationWrapper>
          </ModalFooterWrapper>
        </ModalInnerContentWrapper>
      </ModalContentWrapper>
    </ModalWrapper>
  )
}

export default React.memo(Modal)
