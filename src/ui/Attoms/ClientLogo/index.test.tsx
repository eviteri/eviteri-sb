import React from 'react'
import { mount } from 'enzyme'
import TestWrapper from '../../../helpers/testSetup'
import ClientLogo from './ClientLogo'
import 'jest-styled-components'

const IMAGE_PATH = '/test/mock_image.png'

describe('ClientLogo', () => {
  it('Should Render without errors', () => {
    const wrapper = mount(
      <TestWrapper>
        <ClientLogo clientName="Skookum" imagePath={IMAGE_PATH} />
      </TestWrapper>
    )

    const clientLogo = wrapper.find(ClientLogo)

    expect(clientLogo.exists()).toBe(true)
  })
})
