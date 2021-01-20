import styled from 'styled-components'
import query from '../../../const/mediaQueries'

export interface NavigationLinksListProps {
  themeMode: 'dark' | 'light'
  backgroundColor?: string
  linksColor?: string
}

export const NavigationLinksList = styled.ul<NavigationLinksListProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: inherit;
  li {
    padding: 0;
    margin: 0;
    height: 100%;
    a,
    a:visited {
      margin-right: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      min-height: 45px;
      width: 100%;
      font-family: niveau-grotesk, sans-serif;
      text-decoration: none;
      color: ${({ theme, themeMode }) =>
        themeMode === 'light'
          ? theme.navigation.colorAlt
          : theme.navigation.color};
      font-size: 16px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
  @media ${query.lessThanLarge} {
    background-color: ${({ theme }) => theme.navigation.background};
    padding-top: 45px;
    flex: 1;
    flex-direction: column;
    li {
      margin-right: 0;
      a,
      a:visited {
        box-sizing: border-box;
        margin: 0;
        display: block;
        text-transform: capitalize;
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.81;
        letter-spacing: normal;
        padding: 22px;
        text-align: center;
        color: ${({ theme }) => 'white'};
      }
    }
  }
`
