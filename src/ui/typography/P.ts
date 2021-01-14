import styled from 'styled-components'
import { colors } from '../../theme'
import { TypographyProps } from '../../typings/typography'

const P = styled.p<TypographyProps>`
  font-family: niveau-grotesk, sans-serif;
  font-size: 16px;
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${({ color }) => (color ? color : colors.midNight)};
`

export default P
