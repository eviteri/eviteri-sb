import styled from 'styled-components'
import { colors } from '../../theme'
import { TypographyProps } from '../../typings/typography'

const H3 = styled.h3<TypographyProps>`
  font-family: niveau-grotesk, sans-serif;
  font-size: 24px;
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${({ color }) => (color ? color : colors.midNight)};
  display: block;
`

export default H3
