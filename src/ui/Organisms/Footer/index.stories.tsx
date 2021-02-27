import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'
import Footer from './Footer'
import contactFormFooterFields from '../../../const/mockData/contactFormFooter'

const TestWrapper = styled.div`
  padding-top: 105px;
`

export const Default = () => {
  return (
    <TestWrapper>
      <Footer
        data-test="ev-footer"
        siteLogoUrl="#home"
        description="Headquartered in Charlotte, NC, our small but nimble team services start-ups, small businesses, and enterprises throughout the US and Canada. We focus on high-quality and efficient web, mobile, and WordPress development. Hablamos Espanol!"
        formTitle="Contact us."
        submitButtonLabel="SUBMIT"
        contactFormFields={contactFormFooterFields}
        onSubmitFormHandler={() => {}}
        linkedInUrl="#"
        instagramUrl="#"
        githubUrl="#"
      />
    </TestWrapper>
  )
}

export default {
  title: 'Organisms/Footer',
  component: Footer,
  name: 'Footer'
} as Meta
