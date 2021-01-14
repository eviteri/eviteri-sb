import React, { useState } from 'react'
import { NavigationLinks } from '../../../typings/navigation'
import { SocialMediaArray } from '../../../typings/socialMedia'
import {
  HeaderWrapper,
  LogoWrapper,
  HamburgerWrapper,
  NavigationWrapper,
  Nav,
  WorkWithUsButtonWrapper,
  FooterNavigationWrapper,
  NavigationContactWrapper
} from './StyledComponents'

import Navigation from '../../Molecules/Navigation'
import Button from '../../Attoms/Button'
import Link from '../../Attoms/Link'
import SocialMediaLinks from '../../Molecules/SocialMediaLinks'

interface HeaderProps {
  navLinks: NavigationLinks
  siteLogoUrl: string
  socialMediaLinks?: SocialMediaArray
  themeMode?: 'dark' | 'light'
}

const Header = ({
  navLinks,
  siteLogoUrl,
  socialMediaLinks,
  themeMode = 'dark'
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderWrapper themeMode={themeMode}>
      <NavigationWrapper>
        <LogoWrapper isMenuOpen={isMenuOpen} themeMode={themeMode}>
          <a href={siteLogoUrl}>Site Logo</a>
          <HamburgerWrapper>
            <Button
              themeMode={themeMode}
              buttonType="hamburger"
              isMenuOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            />
          </HamburgerWrapper>
        </LogoWrapper>
        <Nav isMenuOpen={isMenuOpen}>
          <Navigation navigationLinks={navLinks} themeMode={themeMode} />
          <WorkWithUsButtonWrapper>
            <Link
              linkLook="button"
              linkType="primary"
              isInline={false}
              href="#workwithus"
            >
              Work with us
            </Link>
          </WorkWithUsButtonWrapper>
          <FooterNavigationWrapper>
            {socialMediaLinks && socialMediaLinks.length > 0 && (
              <SocialMediaLinks socialMediaLinks={socialMediaLinks} />
            )}

            <NavigationContactWrapper>
              <Link linkLook="button" linkType="secondary" href="#call">
                CALL
              </Link>
              <Link linkLook="button" linkType="secondary" href="#email">
                EMAIL
              </Link>
            </NavigationContactWrapper>
          </FooterNavigationWrapper>
        </Nav>
      </NavigationWrapper>
    </HeaderWrapper>
  )
}

export default React.memo(Header)
