import React, { ReactNode, SyntheticEvent } from 'react'
import { StyledButton, HamburgerButton } from './StyledComponents'

export type ButtonType = 'primary' | 'secondary' | 'hamburger'

export interface ButtonProps {
  /** Sets the visual type */
  buttonType: ButtonType
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
