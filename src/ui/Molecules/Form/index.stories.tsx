import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Form from './Form'
import contactFormFields from '../../../const/mockData/contactFormFields'

export const ContactForm = () => {
  return (
    <Form
      title="Work with us."
      contactFormFields={contactFormFields}
      submitLabel="SUBMIT"
      onSubmitFormHandler={() => {
        console.log('onSubmitFormHandler')
      }}
    />
  )
}

export default {
  title: 'Molecules/Forms',
  component: Form,
  name: 'Forms'
} as Meta
