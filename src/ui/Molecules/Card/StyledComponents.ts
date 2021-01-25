import styled from 'styled-components'
import query from '../../../const/mediaQueries'

interface StyledProps {}

export const CardWrapper = styled.div<StyledProps>`
  box-sizing: border-box;
  background-color: white;
  max-width: 334px;
  padding: 60px 40px;
  margin: 0 auto;
  border-radius: 10px;
  @media ${query.lessThanMedium} {
    padding: 60px 37px;
  }
`

export const CardHeader = styled.div`
  position: relative;
`

export const CardIconWrapper = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  background-color: #a9e1ba;
  margin: auto;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
`
export const CardIcon = styled.img``

export const CardFooter = styled.div``
