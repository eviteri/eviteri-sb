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
    padding: '15px 24px 14px',
    borderRadius: '10px',
    primary: {
      text: colors.midNight,
      background: colors.mint
    },
    secondary: {
      text: colors.snow,
      background: colors.midNight
    }
  }
}

export default theme
