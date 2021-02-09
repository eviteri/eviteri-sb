import React from 'react'
import { shallow } from 'enzyme'
import Home from '.'

describe('App Component', () => {
  const wrapper = shallow(<Home />)

  it('Should render without errors', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Should render Header', () => {
    const header = wrapper.find('[data-test="ev-header"]')

    expect(header.exists()).toBe(true)
  })

  it('Should render Hero Section', () => {
    const hero = wrapper.find('[data-test="ev-hero"]')

    expect(hero.exists()).toBe(true)
  })

  it('Should render Message Us section', () => {
    const messageUs = wrapper.find('[data-test="ev-message_us"]')
    messageUs.getElement().props.onSubmitFormHandler()

    expect(messageUs.exists()).toBe(true)
  })

  it('Should render Our Services section', () => {
    const ourServices = wrapper.find('[data-test="ev-our_services"]')

    expect(ourServices.exists()).toBe(true)
  })

  it('Should render Our Wokr section', () => {
    const ourWork = wrapper.find('[data-test="ev-our_work"]')

    expect(ourWork.exists()).toBe(true)
  })

  it('Should render Footer', () => {
    const footer = wrapper.find('[data-test="ev-footer"]')
    footer.getElement().props.onSubmitFormHandler()

    expect(footer.exists()).toBe(true)
  })
})
