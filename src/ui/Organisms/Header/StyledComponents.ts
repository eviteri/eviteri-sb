import styled from 'styled-components'
import query from '../../../const/mediaQueries'
import shapeImage from '../../../assets/backgrounds/shape.png'

interface StyledProps {
  isMenuOpen?: boolean
  themeMode?: 'dark' | 'light'
}

export const HeaderWrapper = styled.header<StyledProps>`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  box-sizing: border-box;
  background-color: ${({ theme, themeMode }) =>
    themeMode === 'light'
      ? theme.navigation.backgroundAlt
      : theme.navigation.background};
  padding: 32px;
  @media ${query.lessThanLarge} {
    padding: 0;
  }
`

export const LogoWrapper = styled.div<StyledProps>`
  box-sizing: border-box;
  a {
    ${({ theme, themeMode }) => {
      const url = themeMode === 'light' ? theme.logo.imageAlt : theme.logo.image
      return `content: url(${url});`
    }}
    background-position: center;
    width: ${({ theme }) => theme.logo.width};
    height: ${({ theme }) => theme.logo.height};
  }
  @media ${query.lessThanLarge} {
    background-color: ${({ theme, isMenuOpen }) =>
      isMenuOpen ? theme.navigation.backgroundAlt : 'inherit'};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 32px;
    width: 100%;
    a {
      ${({ isMenuOpen, theme, themeMode }) => {
        if (themeMode === 'dark' && isMenuOpen) {
          return `content: url(${theme.logo.imageAlt});`
        }
        return ''
      }}
      width: 170px;
      height: 24px;
    }
  }
`
export const HamburgerWrapper = styled.div`
  display: none;
  @media ${query.lessThanLarge} {
    display: block;
  }
`
export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${query.lessThanLarge} {
    flex-direction: column;
  }
`
export const Nav = styled.nav<StyledProps>`
  display: flex;
  @media ${query.lessThanLarge} {
    position: absolute;
    top: 75px;
    min-height: calc(100vh - 75px);
    width: 100%;
    background-color: ${({ theme }) => theme.navigation.backgroundAlt};
    flex-direction: column;
    left: ${({ isMenuOpen }) => (isMenuOpen ? 0 : '-100vw')};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    transition: opacity 0.4s;
  }
`

export const WorkWithUsButtonWrapper = styled.div`
  display: block;
  margin-left: 40px;
  @media ${query.lessThanLarge} {
    display: none;
  }
`

export const FooterNavigationWrapper = styled.div<StyledProps>`
  display: none;
  @media ${query.lessThanLarge} {
    position: relative;
    display: block;
    &:before {
      content: '';
      position: absolute;
      background-color: ${({ theme }) => theme.navigation.background};
      top: 0;
      width: 100%;
      height: 100%;
    }
    &:after {
      content: '';
      position: absolute;
      background-image: url(${shapeImage});
      background-size: cover;
      background-repeat: no-repeat;
      top: 0;
      width: 100%;
      height: 100%;
    }
    * {
      z-index: 1;
    }
  }
`

export const NavigationContactWrapper = styled.div<StyledProps>`
  box-sizing: border-box;
  padding: 32px;
  display: flex;
  justify-content: center;

  a {
    width: 146px;
    text-align: center;
  }
  a:not(:last-child) {
    margin-right: 19px;
  }
`
