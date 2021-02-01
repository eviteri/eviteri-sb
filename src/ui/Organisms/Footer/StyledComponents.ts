import styled from 'styled-components'
import { P } from '../../typography'

export const FooterWrapper = styled.footer`
  padding: 157px 187px 100px 187px;
  color: ${({ theme }) => theme.footer.color};
  background-image: url(${({ theme }) => theme.footer.background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
`
export const FooterLogoWrapper = styled.div`
  margin-bottom: 29px;
`

export const FooterLogo = styled.img`
  content: url(${({ theme }) => theme.footer.logo});
  width: 240px;
  height: 34px;
`

export const FooterDescription = styled(P)`
  color: ${({ theme }) => theme.footer.color};
`

export const SocialMediaLinksWrapper = styled.div`
  margin-top: 119px;
  margin-bottom: 64px;
`

export const SocialLink = styled.a`
  margin-right: 16px;
`

export const SocialMediaIcon = styled.img`
  width: 24px;
`

export const FooterLeftWrapper = styled.div`
  width: 40%;
  max-width: 400px;
`

export const FooterRightWrapper = styled.div`
  position: relative;
  width: 45%;
  max-width: 465px;
`

export const FooterFormWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: -22%;
`
