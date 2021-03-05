import React, { SyntheticEvent } from 'react'
import { NavigationLinks, NavLink } from '../../../typings/navigation'
import { NavigationLinksList } from './StyledComponents'

interface NavigationProps {
  navigationLinks: NavigationLinks
  backgroundColor?: string
  linksColor?: string
  themeMode: 'dark' | 'light'
  handleInlineLink?: (e: SyntheticEvent, id: string) => void
}

const Navigation = ({
  navigationLinks,
  themeMode,
  backgroundColor,
  linksColor,
  handleInlineLink
}: NavigationProps) => {
  return (
    <NavigationLinksList
      data-test="navigation-list"
      themeMode={themeMode}
      backgroundColor={backgroundColor}
      linksColor={linksColor}
    >
      {navigationLinks.map((link: NavLink) => {
        const { href } = link
        let dynamicProps
        const isInlineLink = href.includes('#')

        if (isInlineLink && handleInlineLink) {
          dynamicProps = {
            onClick: (e: SyntheticEvent) => {
              handleInlineLink(e, href)
            }
          }
        }

        return (
          <li key={link.id}>
            <a href={link.href} {...dynamicProps}>
              {link.label}
            </a>
          </li>
        )
      })}
    </NavigationLinksList>
  )
}

export default React.memo(Navigation)
