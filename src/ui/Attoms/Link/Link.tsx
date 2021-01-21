import React, { ReactNode, ReactNodeArray } from 'react'
import { StyledLink } from './StyledComponents'

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
