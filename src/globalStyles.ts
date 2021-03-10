import { createGlobalStyle } from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/*
    createGlobalStyle replaces index.css.
    It's more flexible and consistent with our usage of styled components.
    Learn more about it here: https://styled-components.com/docs/api#createglobalstyle
*/

/*
ADOBE FONTS

// import using embed code
<link rel="stylesheet" href="https://use.typekit.net/noy1nhx.css">

// import fonts using @import link
<style>
  @import url("https://use.typekit.net/noy1nhx.css");
</style>

Niveau Grotesk Regular Italic
font-family: niveau-grotesk,sans-serif;
font-weight: 400;
font-style: italic;

Niveau Grotesk Regular
font-family: niveau-grotesk,sans-serif;
font-weight: 400;
font-style: normal;

Niveau Grotesk Bold Italic
font-family: niveau-grotesk,sans-serif;
font-weight: 700;
font-style: italic;

Niveau Grotesk Bold
font-family: niveau-grotesk,sans-serif;
font-weight: 700;
font-style: normal;

Niveau Grotesk Regular Small Caps
font-family: niveau-grotesk-small-caps,sans-serif;
font-weight: 400;
font-style: normal;

Niveau Grotesk Bold Small Caps
font-family: niveau-grotesk-small-caps,sans-serif;
font-weight: 700;
font-style: normal;

html {
        scroll-behavior: smooth;
    }
*/

const GlobalStyle = createGlobalStyle`
    .js-loading *, 
    .js-loading *:before, 
    .js-loading *:after {
        animation-play-state: paused !important;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: niveau-grotesk, sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        font-display: fallback; /* <- this can be added to each @font-face definition */
    }
    body * {
        box-sizing: border-box;
    }
    .sb-show-main.sb-main-padded {
        padding: 0 !important;
    }
    .hidden{
        height: 0;
        overflow: hidden;
    }
`

export default GlobalStyle
