import styled from 'styled-components'

interface StyledProps {
  backgroundImage: string | undefined
}

export const ModalWrapper = styled.div`
  position: fixed;
  background: #000000cf;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContentWrapper = styled.div`
  box-sizing: border-box;
  width: 91vw;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
`

export const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    margin: 0;
    padding: 0;
  }
`

export const ModalCloseButton = styled.button`
  border: unset;
  width: 69px;
  height: 48px;
  padding: 12px 27px;
  border-radius: 10px;
  background-color: #f0f5f8;
  font-size: 24px;
  color: #2c3747;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBoddyWrapper = styled.div`
  margin-top: 44px;
`

export const SlideWrapper = styled.div``

export const Slide = styled.div<StyledProps>`
  width: 99%;
  height: 50vh;
  max-height: 704px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
`

export const ModalFooterWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
`

export const ModalNavigationWrapper = styled.div`
  button:nth-child(1) {
    margin-right: 2px;
  }
`

export const ModalArrowButton = styled.button`
  width: 70px;
  height: 48px;
  padding: 12px 24px 12px 25px;
  border-radius: 10px;
  border: none;
  background-color: #f0f5f8;
`
