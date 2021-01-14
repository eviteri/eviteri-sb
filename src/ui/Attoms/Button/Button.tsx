import React, { ReactNode, SyntheticEvent } from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  /** Sets the visual type */
  buttonType: 'primary' | 'secondary'
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
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ buttonType, theme }) =>
    buttonType === 'primary'
      ? theme.button.primary.background
      : theme.button.secondary.background};
  color: ${({ buttonType, theme }) =>
    buttonType === 'primary'
      ? theme.button.primary.text
      : theme.button.secondary.text};
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
  font-display: fallback; /* <- this can be added to each @font-face definition */
  &:hover {
    background-color: ${({ buttonType, theme }) =>
      buttonType === 'primary'
        ? theme.button.primary.hover
        : theme.button.secondary.hover};
  }
`

const Button = ({
  buttonType = 'primary',
  disabled = false,
  alt,
  type = 'button',
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      className={className}
      buttonType={buttonType}
      disabled={disabled}
      alt={alt}
      onClick={onClick}
      data-object="button"
    >
      {children}
    </StyledButton>
  )
}

export default Button
