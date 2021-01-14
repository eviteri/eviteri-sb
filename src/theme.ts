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
  }
}

export default theme
