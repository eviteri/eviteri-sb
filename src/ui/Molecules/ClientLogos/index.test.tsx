import React from 'react'
import { shallow } from 'enzyme'
import ClientLogos from './ClientLogos'
import { Logos } from '../../../typings/clientLogo'

const logoList: Logos = [
  {
    clientName: 'Skookum',
    imagePath: 'mock-path/mock_image.png'
  },
  {
    clientName: 'Synchrony',
    imagePath: 'mock-path/mock_image.png'
  }
]

describe('ClientLogos', () => {
  it('Should render without errors', () => {
    const wrapper = shallow(<ClientLogos clientLogos={logoList} />)
    const clientLogos = wrapper.find('[data-test="client-logo"]')

    expect(clientLogos.length).toBe(2)
  })
})
