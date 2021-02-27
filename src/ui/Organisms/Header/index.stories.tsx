import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Header from './Header'
import mockNavigationLInks from '../../../const/mockData/navigationLinks.json'
import mockSocialMediaLinks from '../../../const/mockData/mockSocialMediaLinks'

export const Dark = () => {
  return (
    <Header
      siteLogoUrl="#home"
      navLinks={mockNavigationLInks}
      socialMediaLinks={mockSocialMediaLinks}
    />
  )
}

export const Light = () => {
  return (
    <Header
      themeMode="light"
      siteLogoUrl="#home"
      navLinks={mockNavigationLInks}
      socialMediaLinks={mockSocialMediaLinks}
    />
  )
}

export const WithOuthMenu = () => {
  return <Header siteLogoUrl="#home" />
}

export default {
  title: 'Organisms/Header',
  component: Header,
  name: 'Header'
} as Meta
