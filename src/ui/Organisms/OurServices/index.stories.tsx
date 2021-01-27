import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'
import mockCardIcons from '../../../const/mockData/cardIcons'
import OurServices from './OurServices'

const TestWrapper = styled.div`
  background-color: ${({ theme }) => theme.body.backgroundSolid};
  min-height: 100vh;
`

export const Default = () => {
  return (
    <TestWrapper>
      <OurServices
        shouldAnimate={false}
        title="Our Services"
        description="You deserve better than a one-size-fits-all option. We focus on one thing — building dyanmic content-driven technology that gives strength to your brand's mission and helps you deliver on your goals. "
        cardIcons={mockCardIcons}
      />
    </TestWrapper>
  )
}

export default {
  title: 'Organisms/OurServices',
  component: OurServices,
  name: 'OurServices'
} as Meta
