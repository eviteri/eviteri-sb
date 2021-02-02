export const NAME_PATTERN = /^[a-z ,.'-]+$/i
export const EMAIL_PATTERN = /^[a-zA-Z0-9@.'-]+$/i
export const PHONE_PATTERN = /^[0-9 .]+$/
export const MESSAGE_PATTERN = /^[a-z ,.'-]+$/i

export type TextfieldType = 'text' | 'textarea'

export type InputTextBehavior = 'email' | 'phone' | 'name' | 'textarea'

export interface FormElement {
  id: string
  behavior?: InputTextBehavior
  name: string
  type?: TextfieldType
  label: string
  value: string
  maxLength?: number
  required?: boolean
  error: string
  placeholder?: string
  className?: string
  isDisabled?: boolean
}

export type FormElements = FormElement[]
