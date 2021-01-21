import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import ClientLogo from './ClientLogo'

import captrustLogo from '../../../assets/clientsLogo/captrust.png'
import firebirdsLogo from '../../../assets/clientsLogo/firebirds.png'
import hiingaLogo from '../../../assets/clientsLogo/hiinga.png'
import nascarLogo from '../../../assets/clientsLogo/nascar.png'
import skookumLogo from '../../../assets/clientsLogo/skookum.png'
import synchronyLogo from '../../../assets/clientsLogo/synchrony.png'

export const Skookum = () => {
  return <ClientLogo clientName="Skookum" imagePath={skookumLogo} />
}

export const Nascar = () => {
  return <ClientLogo clientName="Nascar" imagePath={nascarLogo} />
}

export const Synchrony = () => {
  return <ClientLogo clientName="Synchrony" imagePath={synchronyLogo} />
}

export const Captrust = () => {
  return <ClientLogo clientName="Captrust" imagePath={captrustLogo} />
}

export const Firebirds = () => {
  return <ClientLogo clientName="Firebirds" imagePath={firebirdsLogo} />
}

export const Hiinga = () => {
  return <ClientLogo clientName="Hiinga" imagePath={hiingaLogo} />
}

export default {
  title: 'Atoms/ClientLogos',
  component: ClientLogo,
  name: 'ClientLogos'
} as Meta
