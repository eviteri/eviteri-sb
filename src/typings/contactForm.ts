export type TextfieldType = 'text' | 'textarea'

export interface FormElement {
  id: string
  name: string
  type?: TextfieldType
  label: string
  value: string
  maxLength?: number
  matchPattern?: RegExp
  required?: boolean
  error: string
  placeholder?: string
  className?: string
  isDisabled?: boolean
}

export type FormElements = FormElement[]
