import React from 'react'
import ReactPlayer from 'react-player'

import {
  HeroImageWrapper,
  HeroImage,
  HeroVideoWrapper
} from './StyledComponents'
import { useInViewPort } from '../../../customHooks'

interface HeroRightSectionProps {
  shouldAnimate: boolean
  imageUrl?: string
  videoUrl?: string
}

const HeroRightSection = ({
  shouldAnimate,
  imageUrl,
  videoUrl
}: HeroRightSectionProps) => {
  const intersectionRation = 1.0
  const heroRightWrapperRef = React.useRef(null)

  const isInViewPort = useInViewPort(intersectionRation, heroRightWrapperRef)
  const shouldTriggerAnimation = isInViewPort && shouldAnimate

  if (imageUrl !== '') {
    return (
      <HeroImageWrapper
        ref={heroRightWrapperRef}
        shouldAnimate={shouldAnimate}
        shouldTriggerAnimation={shouldTriggerAnimation}
      >
        {imageUrl && <HeroImage src={imageUrl} alt="Hero Picture" />}
      </HeroImageWrapper>
    )
  }

  return (
    <HeroVideoWrapper
      ref={heroRightWrapperRef}
      shouldAnimate={shouldAnimate}
      shouldTriggerAnimation={shouldTriggerAnimation}
    >
      <ReactPlayer url={videoUrl} width="100%" height="100%" />
    </HeroVideoWrapper>
  )
}

export default React.memo(HeroRightSection)
