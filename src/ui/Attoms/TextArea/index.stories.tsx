import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import TextArea from './TextArea'
import { MESSAGE_PATTERN } from '../../../const/mockData/contactFormFields'

export const Default = () => {
  return (
    <TextArea
      id="user-message"
      name="user-message"
      value=""
      label="Message"
      placeholder="I need help with"
      maxLength={300}
      matchPattern={MESSAGE_PATTERN}
      required={true}
      error=""
      onChange={() => {}}
      onBlur={() => {}}
    />
  )
}

export const Error = () => {
  return (
    <TextArea
      id="user-message"
      name="user-message"
      value=""
      label="Message"
      placeholder="I need help with"
      maxLength={300}
      matchPattern={MESSAGE_PATTERN}
      required={true}
      error="Some Error"
      onChange={() => {}}
      onBlur={() => {}}
    />
  )
}

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  name: 'TextArea'
} as Meta
