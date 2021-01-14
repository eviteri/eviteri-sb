import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import GlobalStyle from '../src/globalStyles'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]
