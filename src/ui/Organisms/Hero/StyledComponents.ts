import styled, { css, Keyframes, keyframes } from 'styled-components'
import { H1, P } from '../../../ui/typography'
import query from '../../../const/mediaQueries'

interface StyledProps {
  themeMode?: string
  shouldAnimate?: boolean
  hasRightSection?: boolean
  shouldTriggerAnimation?: boolean
}

export const popIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-4rem) scale(.8);
    }
    100% {
        opacity: 1;
        transform: none;
    }
`

export const fadeInRight = keyframes`
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

const handleShouldAnimate = (
  shouldAnimate: boolean = false,
  animationName: Keyframes,
  animationDelay: string = ''
) => {
  if (shouldAnimate) {
    return css`
      animation: ${animationName} 0.6s cubic-bezier(0, 0.9, 0.3, 1.2)
        ${animationDelay} forwards;
    `
  }
}

/****************************** 
       Hero Section
******************************/

export const HeroWrapper = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme, themeMode }) =>
    themeMode === 'dark' ? theme.hero.background : theme.hero.backgroundAlt};
  * div,
  * h1,
  * p {
    color: ${({ theme, themeMode }) =>
      themeMode === 'dark' ? theme.hero.color : theme.hero.colorAlt};
  }

  @media ${query.lessThanRegular} {
    min-height: 50vh;
  }
`

/****************************** 
       Hero Left Section
******************************/

export const HeroLeftWrapper = styled.div<StyledProps>`
  opacity: ${({ shouldAnimate }) => (shouldAnimate ? 0 : 1)};
  ${({ hasRightSection }) => {
    if (hasRightSection) {
      return css`
        margin-top: 56px;
        margin-left: 13%;
        margin-bottom: 194px;
        width: 35%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        @media ${query.lessThanRegular} {
          text-align: center;
          width: 90%;
          max-width: unset;
          margin: 56px auto;
        }
      `
    }

    return css`
      text-align: center;
      max-width: 50%;
      margin: 56px auto 100px auto;
      @media ${query.lessThanLarge} {
        max-width: 80%;
      }
    `
  }}
  ${({ shouldAnimate }) => handleShouldAnimate(shouldAnimate, popIn, '0.2s')}
`

export const LinkWrapper = styled.div`
  margin-top: 64px;
`

export const Heading = styled(H1)`
  @media ${query.lessThanMedium} {
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
  }
`

export const TagLine = styled(P)`
  text-transform: uppercase;
`

/****************************** 
       Hero Right Section
******************************/

/* Right Image*/

export const HeroImageWrapper = styled.div<StyledProps>`
  margin-top: 56px;
  margin-right: 120px;
  width: 42%;
  max-width: 600px;
  opacity: ${({ shouldAnimate }) => (shouldAnimate ? 0 : 1)};
  @media ${query.greaterThanRegular} {
    ${({ shouldAnimate }) =>
      handleShouldAnimate(shouldAnimate, fadeInRight, '0.8s')}
  }

  @media ${query.lessThanRegular} {
    margin: 64px auto 110px auto;
    width: 90%;
    ${({ shouldTriggerAnimation }) =>
      handleShouldAnimate(shouldTriggerAnimation, fadeInRight)}
  }
`

export const HeroImage = styled.img`
  width: 100%;
`

/* Right Video*/

export const HeroVideoWrapper = styled.div<StyledProps>`
  margin-top: 56px;
  height: 508px;
  width: 50%;
  display: flex;
  background: transparent;
  z-index: 1;
  opacity: ${({ shouldAnimate }) => (shouldAnimate ? 0 : 1)};
  div {
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 18px 0 rgba(0, 0, 0, 0.08),
      0 6px 10px 0 rgba(0, 0, 0, 0.04);
  }

  @media ${query.greaterThanMedium} {
    ${({ shouldAnimate }) =>
      handleShouldAnimate(shouldAnimate, fadeInRight, '0.8s')}
  }

  @media ${query.lessThanRegular} {
    margin: 0 auto 20px auto;
    width: 90%;
  }

  @media ${query.lessThanSmall} {
    height: 242px;
    ${({ shouldTriggerAnimation }) =>
      handleShouldAnimate(shouldTriggerAnimation, fadeInRight)}
  }
`
