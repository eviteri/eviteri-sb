import React from 'react'
import { ThemeProvider } from 'styled-components/macro' // import micro for automatic debugging and optimization features
import theme from './theme'
import GlobalStyle from './globalStyles'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
