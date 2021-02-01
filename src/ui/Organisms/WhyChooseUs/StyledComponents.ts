import styled, { css } from 'styled-components'
import { H2, H3, P } from '../../typography'
import query from '../../../const/mediaQueries'
import { fadeInRight } from '../../../helpers/animations'

interface SytledProps {
  shouldAnimate?: boolean
  shouldTriggerAnimation?: boolean
  backgroundImage?: string
}

export const WhyChooseUsWrapper = styled.div<SytledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 74%;
  margin: 60px auto 150px auto;
  opacity: ${({ shouldAnimate }) => (shouldAnimate ? 0 : 1)};
  ${({ shouldTriggerAnimation }) =>
    shouldTriggerAnimation &&
    css`
      animation: ${fadeInRight} 0.6s ease-in forwards;
    `}
  @media ${query.lessThanRegular} {
    text-align: center;
    flex-direction: column;
  }
  @media ${query.lessThanMedium} {
    max-width: 83%;
  }
`

export const LeftSectionWrapper = styled.div<SytledProps>`
  width: 50%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  img {
    width: 100%;
    max-width: 477px;
  }
  @media ${query.lessThanRegular} {
    width: 100%;
  }
`

export const RightSectionWrapper = styled.div`
  width: 41%;
  @media ${query.lessThanRegular} {
    width: 100%;
  }
`

export const CutomTitle = styled(H2)``

export const ItemTitle = styled(H3)``

export const IconWrapper = styled.span`
  margin-right: 13px;
`

export const CutomParagraph = styled(P)``
