import React, {
  SyntheticEvent,
  KeyboardEvent,
  useState,
  useEffect
} from 'react'
import { MESSAGE_PATTERN } from '../../../typings/form'
import {
  TextAreaWrapper,
  LabelWrapper,
  CounterWrapper,
  TextAreaField
} from './StyledComponents'

export interface TextareaProps {
  placeholder?: string
  isDisabled?: boolean
  value?: string
  label?: string
  name?: string
  id?: string
  required?: boolean
  error?: string
  className?: string
  maxLength?: number
  onBlur?: (e: SyntheticEvent<HTMLTextAreaElement>) => void
  onChange: (e: SyntheticEvent<HTMLTextAreaElement>) => void
  onKeyPress?: (e: KeyboardEvent<any>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  onKeyUp?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  onFocus?: (e: SyntheticEvent<HTMLTextAreaElement>) => void
}

const Textarea = ({
  placeholder,
  isDisabled,
  label = '',
  required = false,
  error = '',
  name = 'ev-text-area-name',
  id = 'ev-text-area-id',
  value,
  className,
  maxLength,
  onChange,
  onBlur,
  onFocus,
  ...props
}: TextareaProps) => {
  const [hasFocus, setHasFocus] = useState(false)
  const [hasBeenAnimated, setHasBeenAnimated] = useState(false)
  const [wordCounter, setWordCounter] = useState(maxLength)

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value

    if (!MESSAGE_PATTERN || value === '') {
      onChange(e)
      return
    }

    const pattern = new RegExp(MESSAGE_PATTERN)
    if (pattern.test(value)) onChange(e)
  }

  const handleOnBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasFocus(false)
    if (onBlur) {
      onBlur(e)
    }
  }

  const handleOnFocus = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasFocus(true)
    if (onFocus) {
      onFocus(e)
    }
  }

  const handleOnInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (maxLength) setWordCounter(maxLength - value.length)
  }

  const shouldAnimateLabel = value !== '' || hasFocus

  useEffect(() => {
    if (shouldAnimateLabel) {
      setHasBeenAnimated(true)
    }
  }, [shouldAnimateLabel])

  return (
    <TextAreaWrapper>
      <LabelWrapper
        htmlFor={id}
        shouldAnimateLabel={shouldAnimateLabel}
        hasBeenAnimated={hasBeenAnimated}
        hasError={error !== ''}
      >
        {label} {required && <span>*</span>}
      </LabelWrapper>
      <CounterWrapper>{wordCounter} characters left</CounterWrapper>
      <TextAreaField
        id={id}
        name={name}
        hasError={error !== ''}
        data-type={label.toLocaleLowerCase()}
        aria-invalid={!!error}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={isDisabled}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onInput={handleOnInput}
      />
    </TextAreaWrapper>
  )
}

export default React.memo(Textarea)
