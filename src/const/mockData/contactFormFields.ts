import { FormElements } from '../../typings/contactForm'

export const NAME_PATTERN = /^[a-z ,.'-]+$/i
export const EMAIL_PATTERN = /^[a-zA-Z0-9@.'-]+$/i
export const PHONE_PATTERN = /^[0-9 .]+$/
export const MESSAGE_PATTERN = /^[a-z ,.'-]+$/i

const contactFormFields: FormElements = [
  {
    id: 'user-name',
    name: 'user-name',
    type: 'text',
    label: 'Name',
    value: '',
    maxLength: 20,
    matchPattern: NAME_PATTERN,
    required: true,
    error: '',
    placeholder: 'John Smith'
  },
  {
    id: 'user-email',
    name: 'user-email',
    type: 'text',
    label: 'Email',
    value: '',
    matchPattern: EMAIL_PATTERN,
    required: true,
    error: '',
    placeholder: 'john.smith@company.com'
  },
  {
    id: 'user-phone',
    name: 'user-phone',
    type: 'text',
    label: 'Phone',
    value: '',
    maxLength: 12,
    matchPattern: PHONE_PATTERN,
    required: true,
    error: '',
    placeholder: '999.123.4567'
  },
  {
    id: 'user-message',
    name: 'user-message',
    type: 'textarea',
    label: 'Message',
    value: '',
    maxLength: 500,
    matchPattern: MESSAGE_PATTERN,
    required: true,
    error: '',
    placeholder: '...'
  }
]

export default contactFormFields
