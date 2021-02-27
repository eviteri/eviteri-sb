import * as React from 'react'
import { mount, shallow } from 'enzyme'
import MemoizedHeader, { HeaderProps } from './Header'
import mockNavigationLInks from '../../../const/mockData/navigationLinks.json'
import mockSocialMediaLinks from '../../../const/mockData/mockSocialMediaLinks'
import TestWrapper from '../../../helpers/testSetup'
import 'jest-styled-components'

jest.mock('../../../customHooks', () => ({
  useLockScreen: () => true,
  useWindowSize: () => ({
    width: 1200
  })
}))

// This gets us the non memoized AlertTextField since useState and React.memo
// don't play nicely with enzyme tests
// https://github.com/enzymejs/enzyme/issues/2196
// https://stackoverflow.com/a/57510576
const Header = MemoizedHeader.type

const headerProps: HeaderProps = {
  siteLogoUrl: '#home',
  navLinks: mockNavigationLInks,
  socialMediaLinks: mockSocialMediaLinks
}

describe('Header', () => {
  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('Should Render without errors', () => {
    const wrapper = mount(
      <TestWrapper>
        <Header {...headerProps} />
      </TestWrapper>
    )

    const headerWrapper = wrapper.find(Header)
    const navLinks = wrapper.find('[data-test="navigation-list"]').at(0)

    expect(headerWrapper.exists()).toBe(true)
    expect(navLinks.exists()).toBe(true)
    expect(navLinks.find('li').length).toBe(mockNavigationLInks.length)
  })

  it('Should handle hamburgerButton click', () => {
    const wrapper = shallow(<Header {...headerProps} />)

    let hamburgerButton = wrapper.find('[data-test="hamburger-button"]')
    expect(hamburgerButton.prop('isMenuOpen')).toBe(false)
    hamburgerButton.getElement().props.onClick()

    hamburgerButton = wrapper.find('[data-test="hamburger-button"]')
    expect(hamburgerButton.prop('isMenuOpen')).toBe(true)
  })
})
