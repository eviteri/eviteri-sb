import React, { ReactNode, ReactNodeArray } from 'react'
import styled from 'styled-components'

export type LinkLook = 'default' | 'button'
export type LinkType = 'primary' | 'secondary'

export interface LinkProps {
  linkLook?: LinkLook
  linkType?: LinkType
  to?: string
  href?: string
  target?: string
  isDisabled?: boolean
  children?: ReactNode | ReactNodeArray
  alt?: string
  className?: string
  isInline?: boolean
  id?: string
}

const getBackgroundAndColor = (
  linkLook: LinkLook = 'default',
  linkType: LinkType = 'primary',
  theme: any
) => {
  let backgroundColor = 'inherit'
  let hoverBackgroundColor = 'inherit'
  let color = ''

  if (linkLook === 'button') {
    if (linkType === 'primary') {
      backgroundColor = theme.button.primary.background
      color = theme.button.primary.text
      hoverBackgroundColor = theme.button.primary.hover
    } else {
      backgroundColor = theme.button.secondary.background
      color = theme.button.secondary.text
      hoverBackgroundColor = theme.button.secondary.hover
    }
  }

  return `
    background-color: ${backgroundColor};
    color: ${color};
    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `
}

const StyledLink = styled.a<LinkProps>`
  display: ${({ isInline }) => (isInline ? 'inline' : 'block')};
  text-decoration: none;
  text-align: center;
  font-family: niveau-grotesk, sans-serif;
  padding: 15px 24px 14px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-display: fallback;

  ${({ linkLook, linkType, theme }) =>
    getBackgroundAndColor(linkLook, linkType, theme)}
`

const Link = ({
  linkLook = 'default',
  linkType = 'primary',
  to,
  href,
  target,
  isDisabled = false,
  children,
  alt,
  className,
  isInline = true,
  id,
  ...props
}: LinkProps) => {
  return (
    <StyledLink
      {...props}
      id={id}
      linkLook={linkLook}
      linkType={linkType}
      className={className}
      href={href}
      target={target}
      isDisabled={isDisabled}
      alt={alt}
      isInline={isInline}
    >
      {children}
    </StyledLink>
  )
}

export default React.memo(Link)
