import React from 'react'
import styled from 'styled-components'
import Link from '../../Attoms/Link'
import {
  SocialMediaArray,
  SocialMediaDetail
} from '../../../typings/socialMedia'

const SocialMediaLinksWrapper = styled.div`
  box-sizing: border-box;
  padding: 35px 32px 16px 32px;
  display: flex;
  justify-content: center;
  a:not(:last-child) {
    margin-right: 32px;
  }
`

export interface SocialMediaLinksProps {
  socialMediaLinks: SocialMediaArray
}

const SocialMediaLinks = ({ socialMediaLinks }: SocialMediaLinksProps) => {
  return (
    <SocialMediaLinksWrapper>
      {socialMediaLinks.map((details: SocialMediaDetail) => (
        <Link
          data-test="ev-link"
          key={details.label}
          href={details.url}
          target="_blank"
        >
          <img src={details.image} alt={details.label} width="24" height="24" />
        </Link>
      ))}
    </SocialMediaLinksWrapper>
  )
}

export default React.memo(SocialMediaLinks)
