import siteLogo from './assets/logos/eviteri-reverse.png'
import siteLogoAlt from './assets/logos/eviteri-register.png'
import terrazzoBackground from './assets/backgrounds/terrazzo.png'
import organicShape from './assets/backgrounds/organic-shapes.png'
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
  lightGreen: '#bce9c8'
}

const theme: ThemeProps = {
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
  body: {
    backgroundSolid: colors.lightGreen,
    backgroundLinear: `linear-gradient(to bottom, ${colors.snow}, ${colors.mint}, ${colors.snow});`
  }
}

export default theme
