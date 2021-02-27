import * as React from 'react'
import { mount } from 'enzyme'
import Footer from './Footer'
import contactFormFooterFields from '../../../const/mockData/contactFormFooter'
import TestWrapper from '../../../helpers/testSetup'
import 'jest-styled-components'

const mockOnSubmitFormHandler = jest.fn()

describe('Footer', () => {
  it('Should Render without errors', () => {
    const wrapper = mount(
      <TestWrapper>
        <Footer
          data-test="ev-footer"
          siteLogoUrl="#home"
          description="Headquartered in Charlotte, NC, our small but nimble team services start-ups, small businesses, and enterprises throughout the US and Canada. We focus on high-quality and efficient web, mobile, and WordPress development. Hablamos Espanol!"
          formTitle="Contact us."
          submitButtonLabel="SUBMIT"
          contactFormFields={contactFormFooterFields}
          onSubmitFormHandler={mockOnSubmitFormHandler}
          linkedInUrl="#"
          instagramUrl="#"
          githubUrl="#"
        />
      </TestWrapper>
    )
    const footerWrapper = wrapper.find(Footer)
    expect(footerWrapper.exists()).toBe(true)
  })
})
