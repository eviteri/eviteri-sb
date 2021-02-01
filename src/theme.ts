import siteLogo from './assets/logos/eviteri-reverse.png'
import siteLogoAlt from './assets/logos/eviteri-register.png'
import terrazzoBackground from './assets/backgrounds/terrazzo.png'
import organicShape from './assets/backgrounds/organic-shapes.png'
import footerBackground from './assets/backgrounds/footerBackground.png'
import ThemeProps from './typings/themeProps'

export const colors = {
  snow: '#ffffff',
  error: 'red',
  glacier: '#669db2',
  seaIce: '#e9f5fc',
  navy: '#16436a',
  midNight: '#2c3747',
  emerald: '#2a5d6b',
  fog: '#f0f5f8',
  lightBlueGrey: '#d4d6d9',
  mint: '#a9e1ba',
  lightGreen: '#bce9c8',
  black: '#000'
}

const theme: ThemeProps = {
  boxShadow:
    '0 3px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 18px 0 rgba(0, 0, 0, 0.08), 0 6px 10px 0 rgba(0, 0, 0, 0.04)',
  modal: {
    background: colors.black,
    bodyBackground: colors.snow,
    buttonBackground: colors.fog,
    buttonColor: colors.midNight
  },
  card: {
    background: colors.snow
  },
  ourServices: {
    backgroundImage: terrazzoBackground,
    backgroundOverlay: organicShape
  },
  form: {
    background: colors.snow,
    inputBackground: colors.fog,
    inputColor: colors.midNight,
    errorColor: colors.error,
    labelColor: colors.navy
  },
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
  footer: {
    logo: siteLogo,
    backgroundColor: colors.midNight,
    background: footerBackground,
    color: colors.snow
  },
  body: {
    backgroundSolid: colors.lightGreen,
    backgroundLinear: `linear-gradient(to bottom, ${colors.snow}, ${colors.mint}, ${colors.snow});`
  }
}

export default theme
