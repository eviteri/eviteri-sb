import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'
import mockOurWorkGallery from '../../../const/mockData/ourWorkGallery'
import OurWork from './OurWork'

const TestWrapper = styled.div`
  background-color: ${({ theme }) => theme.body.backgroundSolid};
  min-height: 100vh;
`

export const Default = () => {
  return (
    <TestWrapper>
      <OurWork
        shouldAnimate={false}
        title="Our Work"
        description="A collection of our most recent and most favorite projects that have brought maximal value and impact to our clients."
        ourWorkGallery={mockOurWorkGallery}
      />
    </TestWrapper>
  )
}

export default {
  title: 'Organisms/OurWork',
  component: OurWork,
  name: 'OurWork'
} as Meta
