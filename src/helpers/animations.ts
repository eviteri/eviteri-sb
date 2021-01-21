import { keyframes } from 'styled-components'

export const popIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-4rem) scale(.8);
    }
    100% {
        opacity: 1;
        transform: none;
    }
`

export const fadeInRight = keyframes`
  0% {
      opacity: 0;
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0)
  }

  to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
  }
`

export const fadeInUp = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0)
    }

    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
`

export const labelAnimation = keyframes`
    0% {
        font-size: 14px;
        transform: translate(0px, 11px);
    }
    100% {
        font-size: 8px;
        transform: translate(0px, 0px);
    }
`

export const reverseLabelAnimation = keyframes`
    0% {
        font-size: 8px;
        transform: translate(0px, 0px);
    }
    100% {
        font-size: 14px;
        transform: translate(0px, 11px);
    }
`
