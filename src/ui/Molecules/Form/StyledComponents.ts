import styled from 'styled-components'
import Button from '../../Attoms/Button'
import { H3 } from '../../typography'
import query from '../../../const/mediaQueries'

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.form.background};
  border-radius: 10px;
  padding: 64px 69px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 18px 0 rgba(0, 0, 0, 0.08),
    0 6px 10px 0 rgba(0, 0, 0, 0.04);
  @media ${query.lessThanSmall} {
    padding: 64px 46px;
  }
`

export const FormTitle = styled(H3)`
  margin-bottom: 40px;
  text-align: center;
`

export const FormWrapper = styled.div``

export const SubmitButton = styled(Button)`
  display: block;
  text-align: center;
  width: 100%;
  margin-top: 32px;
`
