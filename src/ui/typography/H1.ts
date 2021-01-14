import styled from 'styled-components'
import { colors } from '../../theme'
import { TypographyProps } from '../../typings/typography'

const H1 = styled.h1<TypographyProps>`
  font-family: niveau-grotesk, sans-serif;
  font-size: 64px;
  font-weight: ${({ weight }) => (weight ? weight : 900)};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${({ color }) => (color ? color : colors.midNight)};
  display: block;
`

export default H1
