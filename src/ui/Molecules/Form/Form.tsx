import React, { FormEvent, useCallback, useState } from 'react'
import {
  FormContainer,
  FormTitle,
  FormWrapper,
  SubmitButton
} from './StyledComponents'
import TextField from '../../Attoms/TextField'
import TextArea from '../../Attoms/TextArea'
import {
  FormElements,
  FormElement,
  InputTextBehavior
} from '../../../typings/form'
import {
  updateForm,
  validateInput,
  validateAllFields,
  resetAllFields
} from './helper'

export interface FormProps {
  title: string
  contactFormFields: FormElements
  submitLabel: string
  onSubmitFormHandler: (formElements: FormElements) => void
}

const Form = ({
  title,
  contactFormFields,
  submitLabel,
  onSubmitFormHandler
}: FormProps) => {
  const [formElements, setFormElements] = useState(contactFormFields)

  const onChangeHandler = useCallback(
    (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>): void => {
      const element = e.currentTarget
      const { value, id } = element
      const error = ''

      const updatedFormValues = updateForm(formElements, id, value, error)
      setFormElements(updatedFormValues)
    },
    [formElements]
  )

  const onBlurHandler = useCallback(
    (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>): void => {
      const element = e.currentTarget
      const { value, id } = element

      const behavior = element.getAttribute(
        'data-behavior'
      ) as InputTextBehavior
      let error = ''

      if (typeof behavior === 'string') {
        error = validateInput(behavior, value)
      }

      const updatedFormValues = updateForm(formElements, id, value, error)
      setFormElements(updatedFormValues)
    },
    [formElements]
  )

  const onSubmitHandler = useCallback(() => {
    let isFormValid = true

    // Validating Required fields are not empty
    isFormValid =
      formElements.filter(
        (inputElement) => inputElement.required && inputElement.value === ''
      ).length <= 0

    if (!isFormValid) {
      const updatedForm = validateAllFields(formElements)
      setFormElements(updatedForm)
      return false
    }

    // Making sure elements dont have error messages
    if (isFormValid) {
      isFormValid = !formElements.some(
        (inputElement) => inputElement.error !== ''
      )
    }

    if (isFormValid) {
      onSubmitFormHandler(formElements)
      const resestForm = resetAllFields(formElements)
      setFormElements(resestForm)
    }
  }, [formElements, onSubmitFormHandler])

  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      <FormWrapper>
        {formElements.map((input: FormElement) => {
          const { id, type, behavior } = input

          if (type === 'text') {
            return (
              <TextField
                {...input}
                key={id}
                behavior={behavior as InputTextBehavior}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
            )
          }

          if (type === 'textarea') {
            return (
              <TextArea
                {...input}
                key={id}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
            )
          }

          return ''
        })}
        <SubmitButton
          type="button"
          buttonType="secondary"
          onClick={onSubmitHandler}
        >
          {submitLabel}
        </SubmitButton>
      </FormWrapper>
    </FormContainer>
  )
}

export default React.memo(Form)
