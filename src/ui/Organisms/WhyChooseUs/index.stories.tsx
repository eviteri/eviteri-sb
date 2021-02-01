import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'
import mockWhyChooseUs from '../../../const/mockData/whyChooseUs'
import WhyChooseUs from './WhyChooseUs'

const TestWrapper = styled.div`
  background-color: ${({ theme }) => theme.body.backgroundSolid};
  min-height: 100vh;
  margin-top: -60px;
  margin-bottom: -150px;
`

export const Default = () => {
  return (
    <TestWrapper>
      <WhyChooseUs shouldAnimate={true} data={mockWhyChooseUs} />
    </TestWrapper>
  )
}

export default {
  title: 'Organisms/WhyChooseUs',
  component: WhyChooseUs,
  name: 'WhyChooseUs'
} as Meta
