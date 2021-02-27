import * as React from 'react'
import { mount, shallow } from 'enzyme'
import MemoizedAlertTextArea from './TextArea'
import TestWrapper from '../../../helpers/testSetup'
import 'jest-styled-components'

// This gets us the non memoized AlertTextField since useState and React.memo
// don't play nicely with enzyme tests
// https://github.com/enzymejs/enzyme/issues/2196
// https://stackoverflow.com/a/57510576
const TextArea = MemoizedAlertTextArea.type

const mockFunction = jest.fn()

const textAreaProps = {
  id: 'user-message',
  name: 'user-message',
  value: 'some value',
  label: 'Message',
  placeholder: 'I need help with',
  maxLength: 300,
  required: true,
  error: '',
  onChange: mockFunction,
  onBlur: mockFunction,
  onFocus: mockFunction
}

describe('TextArea', () => {
  jest.spyOn(React, 'useEffect').mockImplementation((f) => f())

  it('Should Render without errors', () => {
    const wrapper = mount(
      <TestWrapper>
        <TextArea {...textAreaProps} />
      </TestWrapper>
    )
    const label = wrapper.find('[data-test="textarea-label"]')
    const counterWrapper = wrapper.find('[data-test="word-counter-wrapper"]')
    const textArea = wrapper.find('#user-message')

    expect(label.exists()).toBe(true)
    expect(counterWrapper.exists()).toBe(true)
    expect(textArea.exists()).toBe(true)
  })

  it('Should Handle onChange', () => {
    const wrapper = shallow(<TextArea {...textAreaProps} />)
    const textArea = wrapper.find('#user-message')
    textArea.getElement().props.onChange({
      target: {
        value: 'abc'
      }
    })

    expect(mockFunction).toBeCalledWith({ target: { value: 'abc' } })

    textArea.getElement().props.onChange({
      target: {
        value: ''
      }
    })
    expect(mockFunction).toBeCalledWith({ target: { value: '' } })
  })

  it('Should not called onChange handler when it doesnt match pattern', () => {
    const wrapper = shallow(<TextArea {...textAreaProps} />)
    const textArea = wrapper.find('#user-message')
    textArea.getElement().props.onChange({
      target: {
        value: '=><'
      }
    })

    expect(mockFunction).not.toHaveBeenCalled()
  })

  it('Should Handle onBlur', () => {
    const wrapper = shallow(<TextArea {...textAreaProps} />)
    const textArea = wrapper.find('#user-message')
    textArea.getElement().props.onBlur({
      target: {
        value: 'mock value'
      }
    })

    expect(mockFunction).toBeCalledWith({ target: { value: 'mock value' } })
  })

  it('Should Handle onInput', () => {
    const value = 'abcde'
    const wrapper = shallow(<TextArea {...textAreaProps} />)
    const textArea = wrapper.find('#user-message')
    textArea.getElement().props.onInput({
      target: {
        value: value
      }
    })

    const counterWrapper = wrapper.find('[data-test="word-counter-wrapper"]')
    expect(counterWrapper.text()).toBe(
      `${textAreaProps.maxLength - value.length} characters left`
    )
  })
})
