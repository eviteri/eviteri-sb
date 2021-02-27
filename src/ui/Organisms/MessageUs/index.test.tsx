import React from 'react'
import { mount } from 'enzyme'
import MemoizedMessageUs from './MessageUs'
import mockClientLogos from '../../../const/mockData/clientLogos'
import TestWrapper from '../../../helpers/testSetup'
import 'jest-styled-components'
import { FormElements } from '../../../typings/form'

// This gets us the non memoized AlertTextField since useState and React.memo
// don't play nicely with enzyme tests
// https://github.com/enzymejs/enzyme/issues/2196
// https://stackoverflow.com/a/57510576
const MessageUs = MemoizedMessageUs.type

jest.mock('../../../customHooks', () => ({
  useInViewPort: () => true
}))

const mockOnSubmitFormHandler = jest.fn()

const contactFormFields: FormElements = [
  {
    id: 'user-name',
    behavior: 'name',
    name: 'user-name',
    type: 'text',
    label: 'Name',
    value: 'User Name',
    maxLength: 20,
    required: true,
    error: '',
    placeholder: 'John Smith'
  },
  {
    id: 'user-email',
    behavior: 'email',
    name: 'user-email',
    type: 'text',
    label: 'Email',
    value: 'user@hotmail.com',
    required: true,
    error: '',
    placeholder: 'john.smith@company.com'
  },
  {
    id: 'user-phone',
    behavior: 'phone',
    name: 'user-phone',
    type: 'text',
    label: 'Phone',
    value: '9802348989',
    maxLength: 12,
    required: true,
    error: '',
    placeholder: '999.123.4567'
  },
  {
    id: 'user-message',
    name: 'user-message',
    type: 'textarea',
    label: 'Message',
    value: 'Some Message',
    maxLength: 500,
    required: true,
    error: '',
    placeholder: '...'
  }
]

describe('MessageUs', () => {
  const wrapper = mount(
    <TestWrapper>
      <MessageUs
        shouldAnimate={false}
        clientLogos={mockClientLogos}
        formTitle="Work with us."
        contactFormFields={contactFormFields}
        submitButtonLabel="SUBMIT"
        onSubmitFormHandler={mockOnSubmitFormHandler}
      />
    </TestWrapper>
  )

  const messageUs = wrapper.find(MessageUs)

  it('Should Render without errors', () => {
    expect(messageUs.exists()).toBe(true)
  })

  it('Should handle onSubmitFormHandler', () => {
    const submitButton = messageUs.find('[data-test="submit-button"]').at(0)
    submitButton.getElement().props.onClick()

    expect(mockOnSubmitFormHandler).toHaveBeenCalled()
  })
})
