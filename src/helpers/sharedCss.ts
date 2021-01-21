import { css } from 'styled-components'
import ThemeProps from '../typings/themeProps'
import { labelAnimation, reverseLabelAnimation } from '../helpers/animations'

export const buttonDefaultCss = css`
  padding: 15px 24px 14px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.5px;
  cursor: pointer;
  text-transform: uppercase;
  border-style: none;
  font-display: fallback;
`

export const labelAnimationCss = css`
  animation: ${labelAnimation} 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
`

export const reverseLabelAnimationCss = css`
  animation: ${reverseLabelAnimation} 0.6s cubic-bezier(0, 0.9, 0.3, 1.2)
    forwards;
`

export const getButtonBackgroundAndColor = (
  buttonType: string,
  theme: ThemeProps
) => {
  let backgroundColor = theme.button.secondary.background
  let color = theme.button.secondary.text
  let hoverBackgroundColor = theme.button.secondary.hover

  if (buttonType === 'primary') {
    backgroundColor = theme.button.primary.background
    color = theme.button.primary.text
    hoverBackgroundColor = theme.button.primary.hover
  }

  return css`
    background-color: ${backgroundColor};
    color: ${color};
    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `
}

export const getLabelAnimation = (
  shouldAnimateLabel: boolean = false,
  hasBeenAnimated: boolean = false
) => {
  if (hasBeenAnimated && !shouldAnimateLabel) {
    return reverseLabelAnimationCss
  }
  if (shouldAnimateLabel) {
    return labelAnimationCss
  }
  return ''
}

export const getLabelDefaultCss = (
  hasError: boolean = false,
  shouldAnimateLabel: boolean = false,
  hasBeenAnimated: boolean = false
) => {
  return css`
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 14px;
    position: absolute;
    left: 16px;
    color: ${({ theme }) =>
      hasError ? theme.form.errorColor : theme.form.labelColor};
    transform: translate(0px, 11px);
    span {
      color: ${({ theme }) => theme.form.errorColor};
    }
    ${getLabelAnimation(shouldAnimateLabel, hasBeenAnimated)}
  `
}

export const getInputDefaultCss = (
  hasError: boolean = false,
  hasFocus: boolean = false
) => {
  return css`
    box-sizing: border-box;
    padding: 16px;
    border-radius: 10px;
    display: block;
    background-color: ${({ theme }) => theme.form.inputBackground};
    width: 100%;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${({ theme }) => theme.form.inputColor};
    border: ${({ theme }) =>
      hasError ? `1px solid ${theme.form.errorColor}` : 'none'};
    &::placeholder {
      opacity: ${() => (hasFocus ? 1 : 0)};
      transition: opacity 0.6s linear;
    }
  `
}
