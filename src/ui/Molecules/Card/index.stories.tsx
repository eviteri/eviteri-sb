import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Card from './Card'
import { H3, P } from '../../typography'
import styled from 'styled-components'
import pencilIcon from '../../../assets/icons/pencilIcon.png'
import arcaThumbnail from '../../../assets/workGallery/arcaThumbnail.png'

const TestWrapper = styled.div`
  text-align: center;
`

export const Default = () => {
  return (
    <TestWrapper>
      <Card withBoxShadow={true}>
        <div>
          <H3>Our Services</H3>
          <P>
            You deserve better than a one-size-fits-all option. We focus on one
            thing — building dyanmic content-driven technology that gives
            strength to your brand's mission and helps you deliver on your
            goals.{' '}
          </P>
        </div>
      </Card>
    </TestWrapper>
  )
}

export const WithIconImage = () => {
  return (
    <TestWrapper>
      <Card iconImage={pencilIcon} withBoxShadow={true}>
        <div>
          <H3>Our Services</H3>
          <P>
            You deserve better than a one-size-fits-all option. We focus on one
            thing — building dyanmic content-driven technology that gives
            strength to your brand's mission and helps you deliver on your
            goals.{' '}
          </P>
        </div>
      </Card>
    </TestWrapper>
  )
}

export const WithThumbnailImage = () => {
  return (
    <TestWrapper>
      <Card thumbnailIamge={arcaThumbnail} withBoxShadow={true}>
        <div>
          <H3>Our Services</H3>
          <P>
            You deserve better than a one-size-fits-all option. We focus on one
            thing — building dyanmic content-driven technology that gives
            strength to your brand's mission and helps you deliver on your
            goals.{' '}
          </P>
        </div>
      </Card>
    </TestWrapper>
  )
}

export default {
  title: 'Molecules/Card',
  component: Card,
  name: 'Card'
} as Meta
