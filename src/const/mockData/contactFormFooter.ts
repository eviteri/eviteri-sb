import { FormElements } from '../../typings/contactForm'

const NAME_PATTERN = /^[a-z ,.'-]+$/i
const EMAIL_PATTERN = /^[a-zA-Z0-9@.'-]+$/i
const PHONE_PATTERN = /^[0-9 .]+$/

const contactFormFooterFields: FormElements = [
  {
    id: 'user-name-footer',
    name: 'user-name-footer',
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
    id: 'user-email-footer',
    name: 'user-email-footer',
    type: 'text',
    label: 'Email',
    value: '',
    matchPattern: EMAIL_PATTERN,
    required: true,
    error: '',
    placeholder: 'john.smith@company.com'
  },
  {
    id: 'user-phone-footer',
    name: 'user-phone-footer',
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
    id: 'user-message-footer',
    name: 'user-message-footer',
    type: 'text',
    label: 'Message',
    value: '',
    maxLength: 20,
    matchPattern: NAME_PATTERN,
    required: true,
    error: '',
    placeholder: 'Message'
  }
]

export default contactFormFooterFields
