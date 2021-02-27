import React from 'react'
import { mount } from 'enzyme'
import TestWrapper from '../../../helpers/testSetup'
import Link from './Link'
import 'jest-styled-components'

describe('Link', () => {
  it('Should Render without errors', () => {
    const wrapper = mount(
      <TestWrapper>
        <Link>Default Link</Link>
      </TestWrapper>
    )

    const link = wrapper.find(Link)

    expect(link.exists()).toBe(true)
    expect(link).toHaveStyleRule('display', 'inline')
  })

  it('Should Render with display block', () => {
    const wrapper = mount(
      <TestWrapper>
        <Link isInline={false}>Default Link</Link>
      </TestWrapper>
    )

    const link = wrapper.find(Link)

    expect(link.exists()).toBe(true)
    expect(link).toHaveStyleRule('display', 'block')
  })
})
