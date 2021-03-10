import styled from 'styled-components'
import query from '../../const/mediaQueries'

export const PageWrapper = styled.div`
  background: ${({ theme }) => theme.body.backgroundSolid};
`

export const HeroSection = styled.section`
  margin-top: 111px;

  @media ${query.lessThanLarge} {
    margin-top: 75px;
  }
`

export const WorkWithUsSection = styled.div`
  @media ${query.greaterThanRegular} {
    position: absolute;
    right: 0;
    top: 70%;
  }
`
