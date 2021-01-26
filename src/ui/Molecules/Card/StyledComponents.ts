import styled from 'styled-components'
import query from '../../../const/mediaQueries'

interface StyledProps {
  backgroundImage?: string
}

export const CardWrapper = styled.div<StyledProps>`
  box-sizing: border-box;
  background-color: white;
  max-width: 334px;
  padding: 60px 40px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  @media ${query.lessThanMedium} {
    padding: 60px 37px;
  }
`

export const CardHeader = styled.div`
  position: relative;
`

export const CardThumbnailWrapper = styled.div<StyledProps>`
  height: 356px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: -60px -40px 0px -40px;
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
