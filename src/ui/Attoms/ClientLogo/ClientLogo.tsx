import React from 'react'
import styled from 'styled-components'
import query from '../../../const/mediaQueries'

const ClientLogoWrapper = styled.div`
  width: 33.33%;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${query.lessThanSmall} {
    height: 84px;
  }
`

const ImageWrapper = styled.div`
  width: 115px;
  img {
    width: 100%;
  }
  @media ${query.lessThanSmall} {
    width: 83px;
  }
`

interface ClientLogoProps {
  clientName: string
  imagePath: string
}

const ClientLogo = ({ clientName, imagePath }: ClientLogoProps) => {
  return (
    <ClientLogoWrapper>
      <ImageWrapper>
        <img src={imagePath} alt={`${clientName} Logo`} />
      </ImageWrapper>
    </ClientLogoWrapper>
  )
}

export default React.memo(ClientLogo)
