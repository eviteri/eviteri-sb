import React, { FormEvent, useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import TextField, { InputProps } from './TextField'

export const Name = (args: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  const onChangeHandler = (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ): void => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <TextField
      {...args}
      value={inputValue}
      onChange={onChangeHandler}
      onBlur={() => {}}
    />
  )
}
Name.args = {
  id: 'user-name',
  behavior: 'name',
  name: 'user-name',
  label: 'Name',
  maxLength: 20,
  required: true,
  error: '',
  placeholder: 'John Smith'
}

export const Email = (args: InputProps) => {
  const [inputValue, setInputValue] = useState(args.value)

  const onChangeHandler = (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ): void => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <TextField
      {...args}
      value={inputValue}
      onChange={onChangeHandler}
      onBlur={() => {}}
    />
  )
}
Email.args = {
  id: 'user-email',
  behavior: 'email',
  name: 'user-email',
  label: 'Email',
  required: true,
  error: '',
  placeholder: 'john.smith@company.com'
}

export const Phone = (args: InputProps) => {
  const [inputValue, setInputValue] = useState(args.value)

  const onChangeHandler = (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ): void => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <TextField
      {...args}
      value={inputValue}
      onChange={onChangeHandler}
      onBlur={() => {}}
    />
  )
}
Phone.args = {
  id: 'user-phone',
  behavior: 'phone',
  name: 'user-phone',
  label: 'Phone',
  required: true,
  error: '',
  placeholder: 'john.smith@company.com'
}

export const Error = (args: InputProps) => {
  const [inputValue, setInputValue] = useState(args.value)

  const onChangeHandler = (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ): void => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <TextField
      {...args}
      value={inputValue}
      onChange={onChangeHandler}
      onBlur={() => {}}
    />
  )
}
Error.args = {
  id: 'user-name',
  behavior: 'name',
  name: 'user-name',
  label: 'Name',
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
