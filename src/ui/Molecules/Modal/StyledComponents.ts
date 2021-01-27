import styled, { css } from 'styled-components'
import { H2, P } from '../../typography'
import { zoomIn } from '../../../helpers/animations'
import query from '../../../const/mediaQueries'

interface StyledProps {
  backgroundImage: string | undefined
  mobileBackgroundImage?: string | undefined
}

export const ModalWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.modal.background};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${query.lessThanSmall} {
    align-items: baseline;
  }
`

export const ModalContentWrapper = styled.div`
  box-sizing: border-box;
  width: 91vw;
  background-color: ${({ theme }) => theme.modal.bodyBackground};
  padding: 30px;
  border-radius: 15px;
  animation: ${zoomIn} 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
  @media ${query.lessThanSmall} {
    margin-top: 20%;
  }
`

export const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ModalTitle = styled(H2)`
  margin: 0;
  padding: 0;
  @media ${query.lessThanSmall} {
    font-size: 24px;
  }
`

export const ModalCloseButton = styled.button`
  border: unset;
  width: 69px;
  height: 48px;
  padding: 12px 27px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.modal.buttonBackground};
  font-size: 24px;
  color: ${({ theme }) => theme.modal.buttonColor};
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${query.lessThanSmall} {
    font-size: 12px;
    padding: 6px 14px;
    width: 35px;
    height: 24px;
    border-radius: 5px;
  }
`

export const ModalBoddyWrapper = styled.div`
  margin-top: 44px;
  @media ${query.lessThanSmall} {
    margin-top: 15px;
  }
`

export const SlideWrapper = styled.div``

export const Slide = styled.div<StyledProps>`
  width: 99%;
  height: 50vh;
  max-height: 704px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  @media ${query.lessThanSmall} {
    ${({ mobileBackgroundImage }) =>
      mobileBackgroundImage &&
      css`
        background-image: url(${mobileBackgroundImage});
      `}
  }
`

export const ModalFooterWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  @media ${query.lessThanSmall} {
    margin-top: 15px;
  }
`

export const ModalNavigationWrapper = styled.div`
  button:nth-child(1) {
    margin-right: 2px;
  }
`

export const ModalCounter = styled(P)`
  margin: 0;
  padding: 0;
  align-self: center;
  @media ${query.lessThanSmall} {
    margin-top: 14px;
  }
`

export const ModalArrowButton = styled.button`
  width: 70px;
  height: 48px;
  padding: 12px 24px 12px 25px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.modal.buttonBackground};
  color: ${({ theme }) => theme.modal.buttonColor};
  @media ${query.lessThanSmall} {
    display: none;
  }
`
