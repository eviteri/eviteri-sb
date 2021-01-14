import React from 'react'
import { NavigationLinks, NavLink } from '../../../typings/navigation'
import { NavigationLinksList } from './StyledComponents'

interface NavigationProps {
  navigationLinks: NavigationLinks
  backgroundColor?: string
  linksColor?: string
  themeMode: 'dark' | 'light'
}

const Navigation = ({
  navigationLinks,
  themeMode,
  backgroundColor,
  linksColor
}: NavigationProps) => {
  return (
    <NavigationLinksList
      themeMode={themeMode}
      backgroundColor={backgroundColor}
      linksColor={linksColor}
    >
      {navigationLinks.map((link: NavLink) => {
        return (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        )
      })}
    </NavigationLinksList>
  )
}

export default React.memo(Navigation)
