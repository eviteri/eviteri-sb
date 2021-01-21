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

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`

export const Label = styled.label<StyledProps>`
  ${({ hasError, shouldAnimateLabel, hasBeenAnimated }) =>
    getLabelDefaultCss(hasError, shouldAnimateLabel, hasBeenAnimated)}
`

export const InputElement = styled.input<StyledProps>`
  ${({ hasError, hasFocus }) => getInputDefaultCss(hasError, hasFocus)}
  height: 48px;
`
