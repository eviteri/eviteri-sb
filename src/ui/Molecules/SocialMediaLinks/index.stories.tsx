import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import SocialMediaLinks from './SocialMediaLinks'
import mockSocialMediaLinks from '../../../const/mockData/mockSocialMediaLinks'

export const Default = () => {
  return <SocialMediaLinks socialMediaLinks={mockSocialMediaLinks} />
}

export default {
  title: 'Molecules/SocialMediaLinks',
  component: SocialMediaLinks,
  name: 'Social Media Links'
} as Meta
