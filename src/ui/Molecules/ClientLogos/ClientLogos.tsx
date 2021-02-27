import React from 'react'
import styled from 'styled-components'
import { Logos, ClientLogoDetails } from '../../../typings/clientLogo'
import ClientLogo from '../../Attoms/ClientLogo'

const ClientLogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

interface ClientLogosProps {
  clientLogos: Logos
}

const ClientLogos = ({ clientLogos }: ClientLogosProps) => {
  return (
    <ClientLogosWrapper>
      {clientLogos.map((logo: ClientLogoDetails) => {
        const { clientName, imagePath } = logo
        return (
          <ClientLogo
            data-test="client-logo"
            key={clientName}
            clientName={clientName}
            imagePath={imagePath}
          />
        )
      })}
    </ClientLogosWrapper>
  )
}

export default React.memo(ClientLogos)
