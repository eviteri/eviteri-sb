export type ThemeModeType = 'dark' | 'light'

export interface ThemeProps {
  boxShadow: string
  modal: {
    background: string
    bodyBackground: string
    buttonBackground: string
    buttonColor: string
  }
  card: {
    background: string
  }
  ourServices: {
    backgroundImage: string
    backgroundOverlay: string
  }
  form: {
    background: string
    inputBackground: string
    inputColor: string
    errorColor: string
    labelColor: string
  }
  logo: {
    image: string
    imageAlt: string
    width: string
    height: string
  }
  navigation: {
    background: string
    backgroundAlt: string
    color: string
    colorAlt: string
  }
  hero: {
    background: string
    backgroundAlt: string
    color: string
    colorAlt: string
  }
  hamburger: {
    background: string
    backgroundAlt: string
  }
  button: {
    primary: {
      text: string
      background: string
      hover: string
    }
    secondary: {
      text: string
      background: string
      hover: string
    }
  }
  footer: {
    logo: string
    background: string
    backgroundColor: string
    color: string
  }
  body: {
    backgroundSolid: string
    backgroundLinear: string
  }
}

export default ThemeProps
