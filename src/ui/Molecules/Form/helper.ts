import { FormElements } from '../../../typings/contactForm'

export const updateForm = (
  formElements: FormElements,
  id: string,
  value: string,
  error: string
): FormElements => {
  const updatedFormValues: FormElements = formElements.map((input) => {
    if (input.id === id) {
      return {
        ...input,
        value: value,
        error: error
      }
    }
    return input
  })

  return updatedFormValues
}

export const validateInput = (elementType: string, value: string) => {
  let error = ''
  const phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (value === '') {
    error = 'This field is Required.'
    return error
  }

  if (elementType === 'phone' && !value.match(phoneFormat)) {
    error = 'Invalid Phone Number.'
    return error
  }

  if (elementType === 'email' && !value.match(emailFormat)) {
    error = 'Invalid Email Address.'
    return error
  }

  return error
}

export const validateAllFields = (formElements: FormElements) => {
  return formElements.map((inputElement) => {
    return {
      ...inputElement,
      error:
        inputElement.required && inputElement.value === ''
          ? 'This field is required'
          : inputElement.error
    }
  })
}

export const resetAllFields = (formElements: FormElements) => {
  return formElements.map((inputElement) => {
    return {
      ...inputElement,
      error: '',
      value: ''
    }
  })
}
