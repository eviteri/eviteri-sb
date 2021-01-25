import styled, { css } from 'styled-components'
import query from '../../../const/mediaQueries'

export const OurWorkWrapper = styled.div`
  width: 86%;
  padding-bottom: 111px;
  margin: 0 auto;
`

export const OurWorkHeaderWrapper = styled.div`
  max-width: 40%;
  text-align: center;
  margin: 159px auto 0 auto;
  @media ${query.lessThanRegular} {
    max-width: 100%;
    margin: 0 auto;
  }
`

export const OurWorkFooterWrapper = styled.div``

export const SlideWrapper = styled.div``

export const CardInnerContent = styled.div`
  text-align: center;
`
