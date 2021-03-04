import * as React from 'react'
import { shallow, mount } from 'enzyme'
import MemoizedFrom, { FormProps } from './Form'
import { FormElement, FormElements } from '../../../typings/form'
import * as helper from './helper'
import TestWrapper from '../../../helpers/testSetup'

// This gets us the non memoized AlertTextField since useState and React.memo
// don't play nicely with enzyme tests
// https://github.com/enzymejs/enzyme/issues/2196
// https://stackoverflow.com/a/57510576
const Form = MemoizedFrom.type

const textField: FormElement = {
  id: 'user-name',
  behavior: 'name',
  name: 'user-name',
  type: 'text',
  label: 'Name',
  value: '',
  maxLength: 20,
  required: true,
  error: '',
  placeholder: 'John Smith'
}

const textArea: FormElement = {
  id: 'user-message',
  name: 'user-message',
  type: 'textarea',
  label: 'Message',
  value: '',
  maxLength: 500,
  required: true,
  error: '',
  placeholder: '...'
}

const contactFormFields: FormElements = [textField, textArea]

const mockSubmitFunction = jest.fn()

const formProps: FormProps = {
  title: 'Work with us.',
  contactFormFields: contactFormFields,
  submitLabel: 'SUBMIT',
  onSubmitFormHandler: mockSubmitFunction
}

describe('Form', () => {
  const formWrapper = shallow(<Form {...formProps} />)
  const userName = formWrapper.find('#user-name')
  const userMessage = formWrapper.find('#user-message')
  const submitButton = formWrapper.find('[data-test="submit-button"]')

  beforeEach(() => {
    jest.spyOn(helper, 'updateForm')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('Should Render without errors', () => {
    expect(formWrapper.exists()).toBe(true)
    expect(userName.exists()).toBe(true)
    expect(userMessage.exists()).toBe(true)
    expect(submitButton.exists()).toBe(true)
  })

  it('Should handle onBlur', () => {
    userName.getElement().props.onBlur({
      currentTarget: {
        value: '',
        id: 'user-name'
      }
    })

    const updatedUserName = formWrapper.find('#user-name')
    expect(updatedUserName.prop('error')).toBe('This field is Required.')
    expect(helper.updateForm).toHaveBeenCalled()
    expect(helper.updateForm).toHaveReturnedWith([
      { ...textField, error: 'This field is Required.' },
      { ...textArea }
    ])
  })

  it('Should handle onChange', () => {
    const newValue = 'abc'
    userName.getElement().props.onChange({
      currentTarget: {
        value: newValue,
        id: 'user-name'
      }
    })

    const updatedUserName = formWrapper.find('#user-name')
    expect(updatedUserName.prop('value')).toBe(newValue)
    expect(helper.updateForm).toHaveBeenCalled()
    expect(helper.updateForm).toHaveReturnedWith([
      { ...textField, value: newValue },
      { ...textArea }
    ])
  })

  it('Should not submit the form with the current values', () => {
    submitButton.getElement().props.onClick()
    expect(mockSubmitFunction).not.toHaveBeenCalled()
  })

  it('Should submit the form', () => {
    const filledContactFormFields: FormElements = [
      { ...textField, value: 'some value' },
      { ...textArea, value: 'some message' }
    ]

    const filledFormWrapper = shallow(
      <Form {...formProps} contactFormFields={filledContactFormFields} />
    )

    const submitFormButton = filledFormWrapper.find(
      '[data-test="submit-button"]'
    )

    submitFormButton.getElement().props.onClick()
    expect(mockSubmitFunction).toHaveBeenCalled()
  })
})

describe('Form Styles', () => {
  const formWrapper = mount(
    <TestWrapper>
      <Form {...formProps} />
    </TestWrapper>
  )

  it('Should render proper styles', () => {
    expect(formWrapper.exists()).toBe(true)
  })
})
