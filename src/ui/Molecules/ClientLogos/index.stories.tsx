import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import ClientLogos from './ClientLogos'
import mockClientLogos from '../../../const/mockData/clientLogos'

export const Default = () => {
  return <ClientLogos clientLogos={mockClientLogos} />
}

export default {
  title: 'Molecules/ClientLogos',
  component: ClientLogos,
  name: 'ClientLogos'
} as Meta
