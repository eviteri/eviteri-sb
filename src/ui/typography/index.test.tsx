import React from 'react'
import { mount } from 'enzyme'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import P from './P'
import { TypographyProps } from '../../typings/typography'
import TestWrapper from '../../helpers/testSetup'
import 'jest-styled-components'

const mock_text = 'Some Text'

const typographyProps: TypographyProps = {
  weight: 'bold',
  color: 'red'
}

describe('Typography', () => {
  it('Should render H1', () => {
    const wrapper = mount(
      <TestWrapper>
        <H1 {...typographyProps}>{mock_text}</H1>
      </TestWrapper>
    )
    const h1 = wrapper.find(H1)
    expect(h1.exists()).toBe(true)
    expect(h1).toHaveStyleRule('font-weight', typographyProps.weight)
    expect(h1).toHaveStyleRule('color', typographyProps.color)
  })

  it('Should render H2', () => {
    const wrapper = mount(
      <TestWrapper>
        <H2 {...typographyProps}>{mock_text}</H2>
      </TestWrapper>
    )
    const h2 = wrapper.find(H2)
    expect(h2.exists()).toBe(true)
    expect(h2).toHaveStyleRule('font-weight', typographyProps.weight)
    expect(h2).toHaveStyleRule('color', typographyProps.color)
  })

  it('Should render H3', () => {
    const wrapper = mount(
      <TestWrapper>
        <H3 {...typographyProps}>{mock_text}</H3>
      </TestWrapper>
    )
    const h3 = wrapper.find(H3)
    expect(h3.exists()).toBe(true)
    expect(h3).toHaveStyleRule('font-weight', typographyProps.weight)
    expect(h3).toHaveStyleRule('color', typographyProps.color)
  })

  it('Should render P', () => {
    const wrapper = mount(
      <TestWrapper>
        <P {...typographyProps}>{mock_text}</P>
      </TestWrapper>
    )
    const p = wrapper.find(P)
    expect(p.exists()).toBe(true)
    expect(p).toHaveStyleRule('font-weight', typographyProps.weight)
    expect(p).toHaveStyleRule('color', typographyProps.color)
  })
})
