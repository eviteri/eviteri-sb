import styled from 'styled-components'
import { P } from '../../typography'
import query from '../../../const/mediaQueries'

export const FooterWrapper = styled.footer``

export const FooterWaveWrapper = styled.div`
  position: relative;
  margin-left: -1px;
  .wave-top {
    .shape-fill {
      fill: ${({ theme }) => theme.footer.backgroundColor};
    }
  }
`

export const FooterContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.footer.backgroundColor};
  color: ${({ theme }) => theme.footer.color};
`

export const FooterInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 74%;
  margin: 0 auto;
  @media ${query.lessThanRegular} {
    flex-direction: column;
    padding: 32px;
  }
  @media ${query.lessThanMedium} {
    width: 100%;
    align-items: center;
  }
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
  @media ${query.lessThanRegular} {
    margin-top: 100px;
    width: 100%;
    text-align: center;
    order: 2;
  }
`

export const FooterRightWrapper = styled.div`
  position: relative;
  width: 45%;
  max-width: 465px;
  @media ${query.lessThanRegular} {
    width: 100%;
    order: 1;
  }
`

export const FooterFormWrapper = styled.div`
  transform: translateY(-100px);
  @media ${query.lessThanMedium} {
    margin-bottom: -100px;
  }
`
