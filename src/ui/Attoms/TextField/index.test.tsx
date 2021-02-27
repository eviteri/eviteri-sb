import * as React from 'react'
import { mount, shallow } from 'enzyme'
import MemoizedTextField, { InputProps } from './TextField'
import TestWrapper from '../../../helpers/testSetup'
import 'jest-styled-components'

// This gets us the non memoized AlertTextField since useState and React.memo
// don't play nicely with enzyme tests
// https://github.com/enzymejs/enzyme/issues/2196
// https://stackoverflow.com/a/57510576
const TextField = MemoizedTextField.type

const mockFunction = jest.fn()

const textFieldProps: InputProps = {
  id: 'user-name',
  behavior: 'name',
  name: 'user-name',
  value: 'some value',
  label: 'Name',
  maxLength: 20,
  required: true,
  error: '',
  onChange: mockFunction,
  onBlur: mockFunction,
  onFocus: mockFunction
}

describe('TextField', () => {
  jest.spyOn(React, 'useEffect').mockImplementation((f) => f())

  it('Should Render without errors', () => {
    const wrapper = mount(
      <TestWrapper>
        <TextField {...textFieldProps} />
      </TestWrapper>
    )
    const label = wrapper.find('[data-test="textfield-label"]')
    const input = wrapper.find('[data-test="Input"]')

    expect(label.exists()).toBe(true)
    expect(input.exists()).toBe(true)
  })

  it('Should Handle onChange', () => {
    const wrapper = shallow(<TextField {...textFieldProps} />)
    const input = wrapper.find('#user-name')
    input.getElement().props.onChange({
      target: {
        value: 'abc'
      }
    })

    expect(mockFunction).toBeCalledWith({ target: { value: 'abc' } })

    input.getElement().props.onChange({
      target: {
        value: ''
      }
    })
    expect(mockFunction).toBeCalledWith({ target: { value: '' } })
  })

  it('Should not called onChange handler when it doesnt match pattern', () => {
    const wrapper = shallow(<TextField {...textFieldProps} />)
    const input = wrapper.find('#user-name')
    input.getElement().props.onChange({
      target: {
        value: '=><'
      }
    })

    expect(mockFunction).not.toHaveBeenCalled()
  })

  it('Should Handle onBlur', () => {
    const wrapper = shallow(<TextField {...textFieldProps} />)
    const input = wrapper.find('#user-name')
    input.getElement().props.onBlur({
      target: {
        value: 'mock value'
      }
    })

    expect(mockFunction).toBeCalledWith({ target: { value: 'mock value' } })
  })

  it('Should Handle onFocus', () => {
    const wrapper = shallow(<TextField {...textFieldProps} />)
    const input = wrapper.find('#user-name')
    input.getElement().props.onFocus()

    expect(mockFunction).toHaveBeenCalled()
  })
})
