import React from 'react'
import { mount } from 'enzyme'
import CurveBottom from './CurveBottom'
import WaveBottom from './WaveBottom'
import WaveTop from './WaveTop'
import TestWrapper from '../../helpers/testSetup'
import 'jest-styled-components'

const mock_color = 'red'

describe('Shapes', () => {
  it('Should render CurveBottom', () => {
    const wrapper = mount(
      <TestWrapper>
        <CurveBottom curveColor={mock_color} />
      </TestWrapper>
    )
    const curveBottom = wrapper.find(CurveBottom)
    expect(curveBottom.exists()).toBe(true)
    expect(curveBottom.prop('curveColor')).toBe(mock_color)
    expect(curveBottom).toHaveStyleRule('fill', mock_color, {
      modifier: '.shape-fill'
    })
  })

  it('Should render WaveBottom', () => {
    const wrapper = mount(
      <TestWrapper>
        <WaveBottom waveColor={mock_color} />
      </TestWrapper>
    )
    const waveBottom = wrapper.find(WaveBottom)
    expect(waveBottom.exists()).toBe(true)
    expect(waveBottom.prop('waveColor')).toBe(mock_color)
    expect(waveBottom).toHaveStyleRule('fill', mock_color, {
      modifier: '.shape-fill'
    })
  })

  it('Should render WaveTop', () => {
    const wrapper = mount(
      <TestWrapper>
        <WaveTop waveColor={mock_color} />
      </TestWrapper>
    )
    const waveTop = wrapper.find(WaveTop)
    expect(waveTop.exists()).toBe(true)
    expect(waveTop.prop('waveColor')).toBe(mock_color)
    expect(waveTop).toHaveStyleRule('fill', mock_color, {
      modifier: '.shape-fill'
    })
  })
})
