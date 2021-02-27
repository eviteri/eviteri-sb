import React from 'react'
import { mount, shallow } from 'enzyme'
import MemoizedOurWork, { OurWorkProps } from './OurWork'
import TestWrapper from '../../../helpers/testSetup'
import 'jest-styled-components'
import { OurWorkGallery } from '../../../typings/ourWorkGallery'

// This gets us the non memoized AlertTextField since useState and React.memo
// don't play nicely with enzyme tests
// https://github.com/enzymejs/enzyme/issues/2196
// https://stackoverflow.com/a/57510576
const OurWork = MemoizedOurWork.type

jest.mock('../../../customHooks', () => ({
  useInViewPort: () => true,
  useLockScreen: () => false
}))

const ourWorkGallery: OurWorkGallery = [
  {
    id: 1,
    title: 'Title 1 descritpion',
    description: 'Image 1 despcrition',
    small: '/path/image_1_small.png',
    large: '/path/image_1_large.png',
    medium: '/path/image_1_medium.png'
  },
  {
    id: 2,
    title: 'Title 2 descritpion',
    description: 'Image 2 despcrition',
    small: '/path/image_2_small.png',
    large: '/path/image_2_large.png',
    medium: '/path/image_2_medium.png'
  },
  {
    id: 3,
    title: 'Title 3 descritpion',
    description: 'Image 3 despcrition',
    small: '/path/image_3_small.png',
    large: '/path/image_3_large.png',
    medium: '/path/image_3_medium.png'
  }
]

const ourWorkProps: OurWorkProps = {
  shouldAnimate: false,
  title: 'Some title',
  description: 'Some description',
  ourWorkGallery: ourWorkGallery
}

describe('WhyChooseUs', () => {
  const wrapper = shallow(<OurWork {...ourWorkProps} />)

  it('Should Render without errors', () => {
    const modalWrapper = wrapper.find('[data-test="ev-modal"]')

    expect(wrapper.exists()).toBe(true)
    expect(modalWrapper.exists()).toBe(false)
  })

  it('Should Render Modal errors when clicking on the card image', () => {
    const cardWrapper = wrapper.find('[data-test="ev-card"]').at(0)
    cardWrapper.getElement().props.onImageClickHanlder()

    const modalWrapper = wrapper.find('[data-test="ev-modal"]')
    expect(modalWrapper.exists()).toBe(true)
  })

  it('Should Close the Modal', () => {
    const cardWrapper = wrapper.find('[data-test="ev-card"]').at(0)
    cardWrapper.getElement().props.onImageClickHanlder()

    let modalWrapper = wrapper.find('[data-test="ev-modal"]')
    expect(modalWrapper.exists()).toBe(true)

    modalWrapper.getElement().props.closeModalHandler()
    modalWrapper = wrapper.find('[data-test="ev-modal"]')
    expect(modalWrapper.exists()).toBe(false)
  })
})

describe('Modal Styles', () => {
  const wrapper = mount(
    <TestWrapper>
      <OurWork {...ourWorkProps} />
    </TestWrapper>
  )

  it('Should render proper styles', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
