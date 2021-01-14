import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Button from './Button'

export const PrimaryButton = () => {
  return (
    <Button
      type="button"
      buttonType="primary"
      onClick={() => console.log('button clicked')}
    >
      Primary Button
    </Button>
  )
}

export const SecondaryButton = () => {
  return (
    <Button
      type="button"
      buttonType="secondary"
      onClick={() => console.log('button clicked')}
    >
      Secondary Button
    </Button>
  )
}

export default {
  title: 'Atoms/Buttons',
  component: Button,
  name: 'Button'
} as Meta
