import siteLogo from './assets/logos/eviteri-reverse.png'
import siteLogoAlt from './assets/logos/eviteri-register.png'
import darkHeroBackground from './assets/backgrounds/HeroShape.png'
import lightHeroBackground from './assets/backgrounds/HeroShapeAlt.png'

export const colors = {
  snow: '#ffffff',
  glacier: '#669db2',
  seaIce: '#e9f5fc',
  navy: '#16436a',
  midNight: '#2c3747',
  emerald: '#2a5d6b',
  fog: '#f0f5f8',
  lightBlueGrey: '#d4d6d9',
  mint: '#a9e1ba'
}

const theme = {
  logo: {
    image: siteLogo,
    imageAlt: siteLogoAlt,
    width: '240px',
    height: '34px'
  },
  navigation: {
    background: colors.midNight,
    backgroundAlt: colors.fog,
    color: colors.snow,
    colorAlt: colors.midNight
  },
  hero: {
    background: colors.midNight,
    backgroundAlt: colors.fog,
    backgroundImg: darkHeroBackground,
    backgroundImgAlt: lightHeroBackground,
    color: colors.snow,
    colorAlt: colors.midNight
  },
  hamburger: {
    background: colors.fog,
    backgroundAlt: colors.midNight
  },
  button: {
    primary: {
      text: colors.midNight,
      background: colors.mint,
      hover: 'rgba(169,255,186, 0.4)'
    },
    secondary: {
      text: colors.snow,
      background: colors.midNight,
      hover: 'rgba(44,55,71, 0.8)'
    }
  },
  body: {
    backgroundImage:
      'linear-gradient(to bottom, var(--colors-fills-snow) 100%, var(--colors-fills-mint) 59%, var(--colors-fills-snow) 19%);'
  }
}

export default theme
