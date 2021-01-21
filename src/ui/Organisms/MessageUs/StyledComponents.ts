import styled, { css } from 'styled-components'
import query from '../../../const/mediaQueries'
import { fadeInUp } from '../../../helpers/animations'

interface StyledProps {
  shouldAnimate: boolean
  shouldTriggerAnimation: boolean
}

export const MessageUsWrapper = styled.div<StyledProps>`
  position: relative;
  display: flex;
  width: 75%;
  margin: 43px auto 60px auto;
  justify-content: space-between;
  opacity: ${({ shouldAnimate }) => (shouldAnimate ? 0 : 1)};
  ${({ shouldTriggerAnimation }) =>
    shouldTriggerAnimation
      ? css`
          animation: ${fadeInUp} 0.6s ease-in forwards;
        `
      : ''}
  @media ${query.lessThanRegular} {
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-bottom: 148px;
  }
`

export const ClientLogosWrapper = styled.div`
  width: 50%;
  max-width: 430px;
  @media ${query.lessThanRegular} {
    width: 100%;
    max-width: unset;
    order: 2;
    margin-top: 48px;
  }
`

export const ContactFormWrapper = styled.div`
  width: 50%;
  max-width: 465px;
  @media ${query.greaterThanRegular} {
    position: absolute;
    right: 0;
    top: -120%;
  }
  @media ${query.lessThanRegular} {
    width: 100%;
    order: 1;
  }
`
