import { FormElements } from '../../typings/form'

const contactFormFooterFields: FormElements = [
  {
    id: 'user-name-footer',
    behavior: 'name',
    name: 'user-name-footer',
    type: 'text',
    label: 'Name',
    value: '',
    maxLength: 20,
    required: true,
    error: '',
    placeholder: 'John Smith'
  },
  {
    id: 'user-email-footer',
    behavior: 'email',
    name: 'user-email-footer',
    type: 'text',
    label: 'Email',
    value: '',
    required: true,
    error: '',
    placeholder: 'john.smith@company.com'
  },
  {
    id: 'user-phone-footer',
    behavior: 'phone',
    name: 'user-phone-footer',
    type: 'text',
    label: 'Phone',
    value: '',
    maxLength: 12,
    required: true,
    error: '',
    placeholder: '999.123.4567'
  },
  {
    id: 'user-message-footer',
    behavior: 'name',
    name: 'user-message-footer',
    type: 'text',
    label: 'Message',
    value: '',
    maxLength: 20,
    required: true,
    error: '',
    placeholder: 'Message'
  }
]

export default contactFormFooterFields
