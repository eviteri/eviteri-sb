import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import TextField from './TextField'
import {
  NAME_PATTERN,
  EMAIL_PATTERN,
  PHONE_PATTERN
} from '../../../const/mockData/contactFormFields'

export const Name = (args) => {
  return (
    <TextField
      {...args}
      matchPattern={NAME_PATTERN}
      onChange={() => {}}
      onBlur={() => {}}
    />
  )
}
Name.args = {
  id: 'user-name',
  name: 'user-name',
  label: 'Name',
  value: '',
  maxLength: 20,
  required: true,
  error: '',
  placeholder: 'John Smith'
}

export const Email = (args) => {
  return (
    <TextField
      {...args}
      matchPattern={EMAIL_PATTERN}
      onChange={() => {}}
      onBlur={() => {}}
    />
  )
}
Email.args = {
  id: 'user-email',
  name: 'user-email',
  label: 'Email',
  value: '',
  required: true,
  error: '',
  placeholder: 'john.smith@company.com'
}

export const Phone = (args) => {
  return (
    <TextField
      {...args}
      matchPattern={PHONE_PATTERN}
      onChange={() => {}}
      onBlur={() => {}}
    />
  )
}
Phone.args = {
  id: 'user-phone',
  name: 'user-phone',
  label: 'Phone',
  value: '',
  required: true,
  error: '',
  placeholder: 'john.smith@company.com'
}

export const Error = (args) => {
  return (
    <TextField
      {...args}
      matchPattern={NAME_PATTERN}
      onChange={() => {}}
      onBlur={() => {}}
    />
  )
}
Error.args = {
  id: 'user-name',
  name: 'user-name',
  label: 'Name',
  value: '',
  maxLength: 20,
  required: true,
  error: 'Some Error',
  placeholder: 'John Smith'
}

export default {
  title: 'Atoms/TextField',
  component: TextField,
  name: 'TextField'
} as Meta
