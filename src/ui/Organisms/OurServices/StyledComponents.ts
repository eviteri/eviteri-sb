import styled, { css } from 'styled-components'
import query from '../../../const/mediaQueries'
import { fadeInRight } from '../../../helpers/animations'

interface StyledProps {
  shouldAnimate?: boolean
  shouldTriggerAnimation?: boolean
}

export const OurServicesOutterWrapper = styled.div<StyledProps>`
  position: relative;
  z-index: 1;
  overflow-y: hidden;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 64px;
    left: 0;
    background-image: ${({ theme }) =>
      css`url(${theme.ourServices.backgroundOverlay})`};
    background-position: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
`

export const OurServicesWrapper = styled.div`
  background-image: url(${({ theme }) => theme.ourServices.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 86%;
  padding-top: 64px;
  padding-bottom: 111px;
  margin: 0 auto;
  @media ${query.lessThanRegular} {
    padding-top: unset;
  }
`

export const InnerContentWrapper = styled.div<StyledProps>`
  opacity: ${({ shouldAnimate }) => (shouldAnimate ? 0 : 1)};
  ${({ shouldTriggerAnimation }) =>
    shouldTriggerAnimation &&
    css`
      animation: ${fadeInRight} 0.6s ease-in forwards;
    `}
`

export const OurServicesHeaderWrapper = styled.div`
  max-width: 490px;
  text-align: center;
  margin: 159px auto 0 auto;
  @media ${query.lessThanRegular} {
    margin: 0 auto;
  }
`

export const OurServicesFooterWrapper = styled.div`
  margin-top: 64px;
`

export const SlideWrapper = styled.div`
  .card {
    max-height: 350px;
    min-height: 350px;
    overflow-y: hidden;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  @media ${query.lessThanRegular} {
    .card {
      box-shadow: none;
    }
  }
  @media ${query.lessThanMedium} {
    .card {
      width: 285px !important;
    }
  }
`

export const CardInnerContent = styled.div`
  text-align: center;
`
