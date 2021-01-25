import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Form, { FormProps } from './Form'
import contactFormFields from '../../../const/mockData/contactFormFields'

export const ContactForm = (args: FormProps) => {
  return <Form {...args} />
}
ContactForm.args = {
  title: 'Work with us.',
  contactFormFields: contactFormFields,
  submitLabel: 'SUBMIT',
  onSubmitFormHandler: () => {
    console.log('onSubmitFormHandler')
  }
}

export default {
  title: 'Molecules/Forms',
  component: Form,
  name: 'Forms'
} as Meta
