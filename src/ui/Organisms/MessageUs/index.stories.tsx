import React from 'react'
import styled from 'styled-components'
import query from '../../../const/mediaQueries'
import { Meta } from '@storybook/react/types-6-0'
import mockClientLogos from '../../../const/mockData/clientLogos'
import contactFormFields from '../../../const/mockData/contactFormFields'
import { FormElements } from '../../../typings/form'
import MessageUs from './MessageUs'

const TestWrapper = styled.div`
  background-color: ${({ theme }) => theme.body.backgroundSolid};
  margin-top: 300px;
  @media ${query.lessThanRegular} {
    margin-top: 0;
    div {
      margin-top: 0;
      padding-top: 10px;
    }
  }
`

export const Default = () => {
  return (
    <TestWrapper>
      <MessageUs
        shouldAnimate={false}
        clientLogos={mockClientLogos}
        formTitle="Work with us."
        contactFormFields={contactFormFields}
        submitButtonLabel="SUBMIT"
        onSubmitFormHandler={(formElements: FormElements) => {
          alert('Form Submitted')
        }}
      />
    </TestWrapper>
  )
}

export default {
  title: 'Organisms/MessageUs',
  component: MessageUs,
  name: 'MessageUs'
} as Meta
