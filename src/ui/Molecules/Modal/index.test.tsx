import * as React from 'react'
import { shallow, mount } from 'enzyme'
import MemoizedModal, { ModalProps } from './Modal'
import { OurWorkGallery } from '../../../typings/ourWorkGallery'
import TestWrapper from '../../../helpers/testSetup'

// This gets us the non memoized AlertTextField since useState and React.memo
// don't play nicely with enzyme tests
// https://github.com/enzymejs/enzyme/issues/2196
// https://stackoverflow.com/a/57510576
const Modal = MemoizedModal.type

const mockCloseHandlerFunction = jest.fn()

const mockGallery: OurWorkGallery = [
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

const modalProps: ModalProps = {
  title: 'Gallery',
  gallery: mockGallery,
  currentImageIndex: 0,
  closeModalHandler: mockCloseHandlerFunction
}

describe('Modal', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f())
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  const modalWrapper = shallow(<Modal {...modalProps} />)

  it('Should Render without errors', () => {
    const modalTitle = modalWrapper.find('[data-test="modal-title"]')
    const slidesWrapper = modalWrapper.find('[data-test="modal-slide-wrapper"]')
    const modalImageCounterWrapper = modalWrapper.find(
      '[data-test="modal-counter"]'
    )

    expect(modalWrapper.exists()).toBe(true)
    expect(modalTitle.exists()).toBe(true)
    expect(slidesWrapper.length).toBe(mockGallery.length)
    expect(modalImageCounterWrapper.text()).toBe(`1 / ${mockGallery.length}`)
  })

  it('Should handle Back Button', () => {
    let previousButton = modalWrapper.find('[data-test="modal-back-button"]')
    let modalImageCounterWrapper = modalWrapper.find(
      '[data-test="modal-counter"]'
    )
    expect(modalImageCounterWrapper.text()).toBe(`1 / ${mockGallery.length}`)

    previousButton.getElement().props.onClick()
    modalImageCounterWrapper = modalWrapper.find('[data-test="modal-counter"]')
    expect(modalImageCounterWrapper.text()).toBe(`3 / ${mockGallery.length}`)

    previousButton = modalWrapper.find('[data-test="modal-back-button"]')
    previousButton.getElement().props.onClick()
    modalImageCounterWrapper = modalWrapper.find('[data-test="modal-counter"]')
    expect(modalImageCounterWrapper.text()).toBe(`2 / ${mockGallery.length}`)

    previousButton = modalWrapper.find('[data-test="modal-back-button"]')
    previousButton.getElement().props.onClick()
    modalImageCounterWrapper = modalWrapper.find('[data-test="modal-counter"]')
    expect(modalImageCounterWrapper.text()).toBe(`1 / ${mockGallery.length}`)
  })

  it('Should handle Next Button', () => {
    let nextButton = modalWrapper.find('[data-test="modal-next-button"]')
    let modalImageCounterWrapper = modalWrapper.find(
      '[data-test="modal-counter"]'
    )
    expect(modalImageCounterWrapper.text()).toBe(`1 / ${mockGallery.length}`)

    nextButton.getElement().props.onClick()
    modalImageCounterWrapper = modalWrapper.find('[data-test="modal-counter"]')
    expect(modalImageCounterWrapper.text()).toBe(`2 / ${mockGallery.length}`)

    nextButton = modalWrapper.find('[data-test="modal-next-button"]')
    nextButton.getElement().props.onClick()
    modalImageCounterWrapper = modalWrapper.find('[data-test="modal-counter"]')
    expect(modalImageCounterWrapper.text()).toBe(`3 / ${mockGallery.length}`)

    nextButton = modalWrapper.find('[data-test="modal-next-button"]')
    nextButton.getElement().props.onClick()
    modalImageCounterWrapper = modalWrapper.find('[data-test="modal-counter"]')
    expect(modalImageCounterWrapper.text()).toBe(`1 / ${mockGallery.length}`)
  })

  it('Should handle Close Modal Button', () => {
    const closeButton = modalWrapper.find('[data-test="modal-close-button"]')
    closeButton.getElement().props.onClick()

    setTimeout(() => {
      expect(mockCloseHandlerFunction).toHaveBeenCalled()
    }, 200)
  })

  it('Should handle onAnimationEnd', () => {
    let modalInnerContentWrapper = modalWrapper.find(
      '[data-test="modal-inner-content-wrapper"]'
    )
    expect(
      modalInnerContentWrapper.prop('hasModalContentWrapperFineshedAnimating')
    ).toBe(false)

    const modalContentWrapper = modalWrapper.find(
      '[data-test="modal-content-wrapper"]'
    )
    modalContentWrapper.getElement().props.onAnimationEnd()
    modalInnerContentWrapper = modalWrapper.find(
      '[data-test="modal-inner-content-wrapper"]'
    )
    expect(
      modalInnerContentWrapper.prop('hasModalContentWrapperFineshedAnimating')
    ).toBe(true)
  })
})

describe('Modal Styles', () => {
  const modalWrapper = mount(
    <TestWrapper>
      <Modal {...modalProps} />
    </TestWrapper>
  )

  it('Should render proper styles', () => {
    expect(modalWrapper.exists()).toBe(true)
  })
})
