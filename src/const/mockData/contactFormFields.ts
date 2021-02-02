import { FormElements } from '../../typings/form'

const contactFormFields: FormElements = [
  {
    id: 'user-name',
    behavior: 'name',
    name: 'user-name',
    type: 'text',
    label: 'Name',
    value: '',
    maxLength: 20,
    required: true,
    error: '',
    placeholder: 'John Smith'
  },
  {
    id: 'user-email',
    behavior: 'email',
    name: 'user-email',
    type: 'text',
    label: 'Email',
    value: '',
    required: true,
    error: '',
    placeholder: 'john.smith@company.com'
  },
  {
    id: 'user-phone',
    behavior: 'phone',
    name: 'user-phone',
    type: 'text',
    label: 'Phone',
    value: '',
    maxLength: 12,
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
    required: true,
    error: '',
    placeholder: '...'
  }
]

export default contactFormFields
