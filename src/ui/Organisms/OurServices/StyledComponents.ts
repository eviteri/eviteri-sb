import styled, { css } from 'styled-components'
import query from '../../../const/mediaQueries'

export const OurServicesOutterWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow-y: hidden;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 64px;
    left: 0;
    background-image: ${({ theme }) =>
      css`url(${theme.ourServices.backgroundOverlay})`};
    background-position: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
`

export const OurServicesWrapper = styled.div`
  background-image: url(${({ theme }) => theme.ourServices.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 86%;
  padding-top: 64px;
  padding-bottom: 111px;
  margin: 0 auto;
  @media ${query.lessThanRegular} {
    padding-top: unset;
  }
`

export const OurServicesHeaderWrapper = styled.div`
  max-width: 40%;
  text-align: center;
  margin: 159px auto 0 auto;
  @media ${query.lessThanRegular} {
    max-width: 100%;
    margin: 0 auto;
  }
`

export const OurServicesFooterWrapper = styled.div`
  margin-top: 64px;
`

export const SlideWrapper = styled.div`
  display: block !important;
  border-radius: 10px;
  .card {
    max-height: 350px;
    min-height: 350px;
    overflow-y: hidden;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 18px 0 rgba(0, 0, 0, 0.08),
      0 6px 10px 0 rgba(0, 0, 0, 0.04);
  }
  @media ${query.lessThanRegular} {
    .card {
      box-shadow: none;
    }
  }
  @media ${query.lessThanMedium} {
    width: 285px !important;
  }
`

export const CardInnerContent = styled.div`
  text-align: center;
`
