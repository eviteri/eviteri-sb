import React from 'react'
import { mount } from 'enzyme'
import WhyChooseUs from './WhyChooseUs'
import { WhyChooseUsData } from '../../../typings/whyChooseUs'
import TestWrapper from '../../../helpers/testSetup'
import 'jest-styled-components'

jest.mock('../../../customHooks', () => ({
  useInViewPort: () => true
}))

const mock_data: WhyChooseUsData = {
  title: 'Why choose us',
  description:
    "We are small, but nimble. Our combined expertise and experience empower our start-up, small business, and enterprise clients. Here's a few reasons why they chose us:",
  image: 'image.png',
  backgroundImage: 'background_image.png',
  items: [
    {
      icon: 'handshake',
      title: 'We are trustworthy and reliable.',
      description:
        'Our clients know that they can put their trust in the work that we do. We deliver on value and impact, no matter how small.'
    },
    {
      icon: 'lightbulb',
      title: 'We work smart and hard — for you.',
      description:
        "Digital is never 'done'. It's a constant process. And therefore, efficiency is key. We work to save you both time and money."
    },
    {
      icon: 'user',
      title: 'We believe in partnership.',
      description:
        'We believe our client-partners should be involved at every step of the process but rest assured — we do the heavy lifting.'
    }
  ]
}

describe('WhyChooseUs', () => {
  it('Should Render without errors', () => {
    const wrapper = mount(
      <TestWrapper>
        <WhyChooseUs shouldAnimate={true} data={mock_data} />
      </TestWrapper>
    )
    const whyChooseUs = wrapper.find(WhyChooseUs)
    expect(whyChooseUs.exists()).toBe(true)
  })
})
