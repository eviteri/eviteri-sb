import React from 'react'
import { mount } from 'enzyme'
import MemoizedOurServices from './OurServices'
import TestWrapper from '../../../helpers/testSetup'
import 'jest-styled-components'
import { CardIcons } from '../../../typings/cardIcons'

// This gets us the non memoized AlertTextField since useState and React.memo
// don't play nicely with enzyme tests
// https://github.com/enzymejs/enzyme/issues/2196
// https://stackoverflow.com/a/57510576
const OurServices = MemoizedOurServices.type

jest.mock('../../../customHooks', () => ({
  useInViewPort: () => true
}))

const mock_card_icons: CardIcons = [
  {
    iconImage: 'pencilIcon.png',
    title: 'WordPress & CMS',
    description: 'Customized, dynamic content management, made easy.'
  },
  {
    iconImage: 'webIcon.png',
    title: 'Web Development',
    description:
      'Build the perfect application to keep your business moving forward.'
  },
  {
    iconImage: 'mobileIcon.png',
    title: 'Mobile Development',
    description:
      'Reach your audience better than ever in the palm of their hand.'
  }
]

describe('OurServices', () => {
  const wrapper = mount(
    <TestWrapper>
      <OurServices
        shouldAnimate={false}
        title="Our Services"
        description="You deserve better than a one-size-fits-all option. We focus on one thing — building dyanmic content-driven technology that gives strength to your brand's mission and helps you deliver on your goals. "
        cardIcons={mock_card_icons}
      />
    </TestWrapper>
  )

  it('Should Render without errors', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
