import React, {
  SyntheticEvent,
  KeyboardEvent,
  useEffect,
  useState
} from 'react'
import { InputWrapper, Label, InputElement } from './StyledComponents'
import {
  InputTextBehavior,
  NAME_PATTERN,
  EMAIL_PATTERN,
  PHONE_PATTERN,
  MESSAGE_PATTERN
} from '../../../typings/form'

export interface InputProps {
  label: string
  className?: string
  name?: string
  id?: string
  behavior: InputTextBehavior
  value?: string | number
  placeholder?: string
  isDisabled?: boolean
  maxLength?: number
  required?: boolean
  error?: string
  onBlur?: (e: SyntheticEvent<HTMLInputElement>) => void
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void
  onKeyPress?: (e: KeyboardEvent<any>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (e: SyntheticEvent<HTMLInputElement>) => void
}

const getInputPattern = (behavior: InputTextBehavior): RegExp => {
  if (behavior === 'phone') {
    return PHONE_PATTERN
  }
  if (behavior === 'email') {
    return EMAIL_PATTERN
  }
  if (behavior === 'textarea') {
    return MESSAGE_PATTERN
  }

  return NAME_PATTERN
}

const Input = ({
  label,
  className,
  name = 'ev-text-field',
  id,
  behavior = 'name',
  value = '',
  placeholder = '',
  isDisabled = false,
  maxLength,
  required = false,
  error = '',
  onChange,
  onBlur,
  onFocus,
  ...props
}: InputProps) => {
  const [hasFocus, setHasFocus] = useState(false)
  const [hasBeenAnimated, setHasBeenAnimated] = useState(false)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const inputPatter = getInputPattern(behavior)

    if (!inputPatter || value === '') {
      onChange(e)
      return
    }

    const pattern = new RegExp(inputPatter)
    if (pattern.test(value)) onChange(e)
  }

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasFocus(false)
    if (onBlur) {
      onBlur(e)
    }
  }

  const handleOnFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasFocus(true)
    if (onFocus) {
      onFocus(e)
    }
  }

  const shouldAnimateLabel = value !== '' || hasFocus

  useEffect(() => {
    if (shouldAnimateLabel) {
      setHasBeenAnimated(true)
    }
  }, [shouldAnimateLabel])

  return (
    <InputWrapper>
      <Label
        htmlFor={id}
        shouldAnimateLabel={shouldAnimateLabel}
        hasBeenAnimated={hasBeenAnimated}
        hasError={error !== ''}
      >
        {label} {required && <span>*</span>}
      </Label>
      <InputElement
        {...props}
        id={id}
        hasFocus={hasFocus}
        hasError={error !== ''}
        data-test="Input"
        data-behavior={behavior.toLocaleLowerCase()}
        className={className}
        aria-invalid={!!error}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        disabled={isDisabled}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </InputWrapper>
  )
}

export default React.memo(Input)
