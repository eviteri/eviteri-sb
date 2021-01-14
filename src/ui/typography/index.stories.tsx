import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { H1, H2, H3, P } from './index'

export const AllElements = () => {
  return (
    <>
      <H1>H1 Element</H1>
      <H2>H2 Element</H2>
      <H3>H3 Element</H3>
      <P>Body Element</P>
    </>
  )
}

export default {
  parameters: {
    subcomponents: { H1, H2, H3 }
  },
  title: 'Others/Typography'
} as Meta
