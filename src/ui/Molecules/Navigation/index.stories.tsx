import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Navigation from './Navigation'

import { NavigationLinks } from '../../../typings/navigation'
import mockNavigationLInks from '../../../const/mockData/navigationLinks.json'

const navlinks: NavigationLinks = mockNavigationLInks

export const Default = () => {
  return (
    <div style={{ backgroundColor: '#2c3747' }}>
      <Navigation navigationLinks={navlinks} themeMode="dark" />
    </div>
  )
}

export const Light = () => {
  return <Navigation navigationLinks={navlinks} themeMode="light" />
}

export default {
  title: 'Molecules/Navigation',
  component: Navigation,
  name: 'Navigation'
} as Meta
