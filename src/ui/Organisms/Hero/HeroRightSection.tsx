import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import query from '../../../const/mediaQueries'
import ReactPlayer from 'react-player'

interface StyledProps {
  shouldAnimate: boolean
}

const fadeInRight = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0)
    }

    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
`

const HeroImageWrapper = styled.div<StyledProps>`
  margin-top: 56px;
  margin-right: 120px;
  width: 42%;
  max-width: 600px;

  ${({ shouldAnimate }) => {
    if (shouldAnimate) {
      return css`
        animation: ${fadeInRight} 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) 0.8s
          forwards;
        opacity: 0;
      `
    }
  }};

  @media ${query.lessThanRegular} {
    margin: 64px auto;
    width: 90%;
  }
`

const HeroImage = styled.img`
  width: 100%;
`

const HeroVideoWrapper = styled.div<StyledProps>`
  margin-top: 56px;
  width: 50%;
  display: flex;
  align-items: center;
  background: transparent;
  div {
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 18px 0 rgba(0, 0, 0, 0.08),
      0 6px 10px 0 rgba(0, 0, 0, 0.04);
  }

  ${({ shouldAnimate }) => {
    if (shouldAnimate) {
      return css`
        animation: ${fadeInRight} 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) 0.8s
          forwards;
        opacity: 0;
      `
    }
  }};

  @media ${query.lessThanRegular} {
    margin: 0 auto 20px auto;
    width: 90%;
  }
`

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
  if (imageUrl !== '') {
    return (
      <HeroImageWrapper shouldAnimate={shouldAnimate}>
        {imageUrl && <HeroImage src={imageUrl} alt="Hero Picture" />}
      </HeroImageWrapper>
    )
  }

  return (
    <HeroVideoWrapper shouldAnimate={shouldAnimate}>
      <ReactPlayer url={videoUrl} width="100%" />
    </HeroVideoWrapper>
  )
}

export default React.memo(HeroRightSection)
