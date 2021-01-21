import styled from 'styled-components'
import {
  getInputDefaultCss,
  getLabelDefaultCss
} from '../../../helpers/sharedCss'

interface StyledProps {
  shouldAnimateLabel?: boolean
  hasBeenAnimated?: boolean
  hasFocus?: boolean
  hasError?: boolean
}

export const TextAreaWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`
export const TextAreaHeaderWrapper = styled.div``

export const LabelWrapper = styled.label<StyledProps>`
  ${({ hasError, shouldAnimateLabel, hasBeenAnimated }) =>
    getLabelDefaultCss(hasError, shouldAnimateLabel, hasBeenAnimated)}
`

export const CounterWrapper = styled.div`
  font-size: 8px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #2c3747;
  position: absolute;
  top: 8px;
  right: 16px;
`

export const TextAreaField = styled.textarea<StyledProps>`
  ${({ hasError, hasFocus }) => getInputDefaultCss(hasError, hasFocus)}
  height: 141px;
`
