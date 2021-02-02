import styled, { css } from 'styled-components'
import query from '../../../const/mediaQueries'
import { fadeInLeft } from '../../../helpers/animations'

interface StyledProps {
  shouldAnimate: boolean
  shouldTriggerAnimation: boolean
}

export const OurWorkWrapper = styled.div<StyledProps>`
  width: 86%;
  padding-bottom: 111px;
  padding-top: 159px;
  margin: 0 auto;
  opacity: ${({ shouldAnimate }) => (shouldAnimate ? 0 : 1)};
  ${({ shouldTriggerAnimation }) =>
    shouldTriggerAnimation &&
    css`
      animation: ${fadeInLeft} 0.6s ease-in forwards;
    `}
  @media ${query.lessThanRegular} {
    padding-top: unset;
  }
`

export const OurWorkHeaderWrapper = styled.div`
  max-width: 490px;
  text-align: center;
  margin: 0 auto;
`

export const OurWorkFooterWrapper = styled.div`
  margin-top: 152px;
  @media ${query.lessThanMedium} {
    margin-top: 64px;
  }
`

export const SlideWrapper = styled.div`
  height: 592px;
  .card {
    max-width: 334px;
    max-height: 560px;
    min-height: 560px;
    overflow-y: hidden;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  @media ${query.lessThanRegular} {
    .card {
      box-shadow: none;
      max-width: 311px;
    }
  }
`

export const CardInnerContent = styled.div`
  text-align: left;
`
