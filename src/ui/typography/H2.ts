import styled from 'styled-components'
import { colors } from '../../theme'
import { TypographyProps } from '../../typings/typography'

const H2 = styled.h2<TypographyProps>`
  font-family: niveau-grotesk, sans-serif;
  font-size: 40px;
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${({ color }) => (color ? color : colors.midNight)};
  display: block;
`

export default H2
