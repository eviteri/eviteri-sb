import styled from 'styled-components'
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

export const OurWorkFooterWrapper = styled.div`
  margin-top: 152px;
  @media ${query.lessThanMedium} {
    margin-top: 64px;
  }
`

export const SlideWrapper = styled.div`
  height: 592px;
  .card {
    max-height: 560px;
    min-height: 560px;
    overflow-y: hidden;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 18px 0 rgba(0, 0, 0, 0.08),
      0 6px 10px 0 rgba(0, 0, 0, 0.04);
  }
  @media ${query.lessThanRegular} {
    .card {
      box-shadow: none;
      max-width: 311px;
    }
  }
`

export const CardInnerContent = styled.div`
  text-align: left;
`
