import styled from 'styled-components'
import {
  buttonDefaultCss,
  getButtonBackgroundAndColor
} from '../../../helpers/sharedCss'
import { ThemeModeType } from '../../../typings/themeProps'
import { ButtonType } from './Button'

interface StyledProps {
  buttonType: ButtonType
  isMenuOpen?: boolean
  themeMode?: ThemeModeType
  alt?: string
}

export const StyledButton = styled.button<StyledProps>`
  ${buttonDefaultCss}
  ${({ buttonType, theme }) => getButtonBackgroundAndColor(buttonType, theme)}
`

export const HamburgerButton = styled.button<StyledProps>`
  padding: 0;
  border: none;
  background-color: transparent;
  position: relative;
  top: 5px;

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;

    background-color: ${({ isMenuOpen, theme, themeMode }) => {
      if (themeMode === 'light' && !isMenuOpen) {
        return isMenuOpen
          ? theme.hamburger.background
          : theme.hamburger.backgroundAlt
      }
      if (isMenuOpen) {
        return theme.hamburger.backgroundAlt
      }

      return theme.hamburger.background
    }};
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: rotate(45deg) translate(-8px, -8px);
  }
`
