import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App Component', () => {
  it('Should render without errors', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toHaveLength(1)
  })
})
