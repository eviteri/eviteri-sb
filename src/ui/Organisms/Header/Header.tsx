import React, { useState, useEffect } from 'react'
import { useLockScreen, useWindowSize } from '../../../customHooks'
import { NavigationLinks } from '../../../typings/navigation'
import { SocialMediaArray } from '../../../typings/socialMedia'
import {
  HeaderWrapper,
  HeaderLeftWrapper,
  HeaderLogoWrapper,
  HeaderLogo,
  HamburgerWrapper,
  NavigationWrapper,
  HeaderRightWrapper,
  WorkWithUsButtonWrapper,
  FooterNavigationWrapper,
  NavigationContactWrapper
} from './StyledComponents'

import Navigation from '../../Molecules/Navigation'
import Button from '../../Attoms/Button'
import Link from '../../Attoms/Link'
import SocialMediaLinks from '../../Molecules/SocialMediaLinks'

export interface HeaderProps {
  navLinks?: NavigationLinks
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

  useLockScreen(isMenuOpen)

  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    if (isMenuOpen && windowWidth >= 1024) {
      setIsMenuOpen(false)
    }
  }, [windowWidth, isMenuOpen])

  return (
    <HeaderWrapper themeMode={themeMode}>
      <NavigationWrapper>
        <HeaderLeftWrapper isMenuOpen={isMenuOpen}>
          <HeaderLogoWrapper href={siteLogoUrl}>
            <HeaderLogo
              src=""
              alt="Site Logo"
              isMenuOpen={isMenuOpen}
              themeMode={themeMode}
              width="170px"
            />
          </HeaderLogoWrapper>
          <HamburgerWrapper>
            <Button
              data-test="hamburger-button"
              themeMode={themeMode}
              buttonType="hamburger"
              isMenuOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            />
          </HamburgerWrapper>
        </HeaderLeftWrapper>
        {navLinks && (
          <HeaderRightWrapper isMenuOpen={isMenuOpen}>
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
          </HeaderRightWrapper>
        )}
      </NavigationWrapper>
    </HeaderWrapper>
  )
}

export default React.memo(Header)
