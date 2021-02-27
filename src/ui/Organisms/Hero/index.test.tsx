import React from 'react'
import { mount } from 'enzyme'
import MemoizedHero, { HeroProps } from './Hero'
import TestWrapper from '../../../helpers/testSetup'
import 'jest-styled-components'

// This gets us the non memoized AlertTextField since useState and React.memo
// don't play nicely with enzyme tests
// https://github.com/enzymejs/enzyme/issues/2196
// https://stackoverflow.com/a/57510576
const Hero = MemoizedHero.type

jest.mock('../../../customHooks', () => ({
  useInViewPort: () => true
}))

const heroProps: HeroProps = {
  shouldAnimate: true,
  themeMode: 'dark',
  tagLine: 'web development services',
  title: 'Your website does a lot for your business.',
  description:
    "Why not take care of it? After all, an underperforming website can leave your company in the dust. We partner with brands like yours to build, optimize, and grow sites and applications into memorable experiences that inform, inspire, and empower your customers. You're proud of the brand you've built, now you'll be proud of your website, too.",
  linkLabel: 'View our work',
  linkUrl: '#viewourwork'
}

describe('MessageUs', () => {
  it('Should Render without errors', () => {
    const wrapper = mount(
      <TestWrapper>
        <Hero {...heroProps} />
      </TestWrapper>
    )

    const heroWrapper = wrapper.find(Hero)
    expect(heroWrapper.exists()).toBe(true)
  })

  it('Should Render with Image', () => {
    const wrapper = mount(
      <TestWrapper>
        <Hero {...heroProps} imageUrl="mock_image.png" />
      </TestWrapper>
    )

    const heroImageWrapper = wrapper.find('[data-test="ev-hero-image"]').at(0)
    expect(heroImageWrapper.exists()).toBe(true)
  })

  it('Should Render with Video', () => {
    const wrapper = mount(
      <TestWrapper>
        <Hero
          {...heroProps}
          videoUrl="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </TestWrapper>
    )

    const heroVideoWrapper = wrapper.find('[data-test="ev-hero-video"]').at(0)
    expect(heroVideoWrapper.exists()).toBe(true)
  })
})
