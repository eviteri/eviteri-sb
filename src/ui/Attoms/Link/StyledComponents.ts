import styled from 'styled-components'
import { LinkLook, LinkType } from './Link'
import {
  buttonDefaultCss,
  getButtonBackgroundAndColor
} from '../../../helpers/sharedCss'

interface StyledProps {
  linkLook?: LinkLook
  linkType?: LinkType
  isInline?: boolean
  isDisabled?: boolean
  alt?: string
}

export const StyledLink = styled.a<StyledProps>`
  display: ${({ isInline }) => (isInline ? 'inline' : 'block')};
  text-decoration: none;
  text-align: center;
  ${({ linkLook }) => (linkLook === 'button' ? buttonDefaultCss : '')}

  ${({ linkLook, linkType, theme }) =>
    linkLook === 'button' && linkType
      ? getButtonBackgroundAndColor(linkType, theme)
      : ''}
`
