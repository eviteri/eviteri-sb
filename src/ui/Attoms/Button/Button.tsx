import React, { ReactNode, SyntheticEvent } from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  /** Sets the visual type */
  buttonType: 'primary' | 'secondary' | 'hamburger'
  /** Toggles disabled state */
  disabled?: boolean
  /** Native HTML button type */
  type?: 'button' | 'submit' | 'reset'
  /** Triggers and action */
  onClick?: (e: Event | SyntheticEvent) => void
  /**  Usally text or icons*/
  children?: ReactNode
  /** Sets the alt attribute for screen readers */
  alt?: string
  /**  Allows consume to use styled(Button) to override styles*/
  className?: string
  /**  Native HTML id*/
  id?: string
  /**  Menu State*/
  isMenuOpen?: boolean
  /**  Theme Mode */
  themeMode?: 'dark' | 'light'
}

const getButtonBackgroundAndColor = (buttonType: string, theme: any) => {
  let backgroundColor = theme.button.secondary.background
  let color = theme.button.secondary.text
  let hoverBackgroundColor = theme.button.secondary.hover

  if (buttonType === 'primary') {
    backgroundColor = theme.button.primary.background
    color = theme.button.primary.text
    hoverBackgroundColor = theme.button.primary.hover
  }

  return `
    background-color: ${backgroundColor};
    color: ${color};
    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `
}

const StyledButton = styled.button<ButtonProps>`
  font-family: niveau-grotesk, sans-serif;
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
  ${({ buttonType, theme }) => getButtonBackgroundAndColor(buttonType, theme)}
`

const HamburgerButton = styled.button<ButtonProps>`
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

const Button = ({
  themeMode = 'dark',
  buttonType = 'primary',
  disabled = false,
  alt,
  type = 'button',
  children,
  onClick,
  className,
  isMenuOpen = false,
  ...props
}: ButtonProps) => {
  const ButtonComponent =
    buttonType === 'hamburger' ? HamburgerButton : StyledButton

  return (
    <ButtonComponent
      {...props}
      themeMode={themeMode}
      className={className}
      buttonType={buttonType}
      disabled={disabled}
      isMenuOpen={isMenuOpen}
      alt={alt}
      onClick={onClick}
      data-object="button"
    >
      {buttonType === 'hamburger' ? (
        <div className={isMenuOpen ? 'change' : ''}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      ) : (
        children
      )}
    </ButtonComponent>
  )
}

export default React.memo(Button)
