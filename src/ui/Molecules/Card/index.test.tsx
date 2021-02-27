import React from 'react'
import { mount } from 'enzyme'
import TestWrapper from '../../../helpers/testSetup'
import Card, { CardProps } from './Card'
import theme from '../../../theme'
import 'jest-styled-components'

const getWrapper = (options?: CardProps) => {
  return (
    <TestWrapper>
      <Card {...options}>
        <div>
          <h3>Some title</h3>
          <p>Some paragraph</p>
        </div>
      </Card>
    </TestWrapper>
  )
}

const mockFunction = jest.fn()
const MOCK_PATH = 'mock-path/mock-icon.png'

describe('Card', () => {
  it('Should render without errors', () => {
    const wrapper = mount(getWrapper())
    const cardWrapper = wrapper.find('[data-test="ev-card"]').at(0)

    expect(cardWrapper.length).toBeGreaterThan(0)
    expect(cardWrapper).toHaveStyleRule('box-shadow', undefined)
  })

  it('Should render without box-shadow', () => {
    const wrapper = mount(getWrapper({ withBoxShadow: true }))
    const cardWrapper = wrapper.find('[data-test="ev-card"]').at(0)

    expect(cardWrapper).toHaveStyleRule('box-shadow', theme.boxShadow)
  })

  it('Should render with IconImage', () => {
    const wrapper = mount(getWrapper({ iconImage: MOCK_PATH }))
    const cardWrapper = wrapper.find('[data-test="ev-card"]').at(0)
    const cardIconWrapper = cardWrapper.find('[data-test="card-icon"]')
    const cardThumbnailWrapper = cardWrapper.find(
      '[data-test="card-thumbnail"]'
    )

    expect(cardIconWrapper.exists()).toBe(true)
    expect(cardIconWrapper.find('img').prop('src')).toBe(MOCK_PATH)
    expect(cardThumbnailWrapper.exists()).toBe(false)
  })

  it('Should render with ThumbnailImage', () => {
    const wrapper = mount(
      getWrapper({
        thumbnailIamge: MOCK_PATH,
        onImageClickHanlder: mockFunction
      })
    )
    const cardWrapper = wrapper.find('[data-test="ev-card"]').at(0)
    const cardIconWrapper = cardWrapper.find('[data-test="card-icon"]')
    const cardThumbnailWrapper = cardWrapper
      .find('[data-test="card-thumbnail"]')
      .at(0)

    cardThumbnailWrapper.getElement().props.onClick()

    expect(cardThumbnailWrapper.exists()).toBe(true)
    expect(cardThumbnailWrapper).toHaveStyleRule(
      'background-image',
      `url(${MOCK_PATH})`
    )
    expect(mockFunction).toHaveBeenCalled()
    expect(cardIconWrapper.exists()).toBe(false)
  })
})
