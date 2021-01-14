import React from 'react'
// import micro for automatic debugging and optimization features
import { ThemeProvider } from 'styled-components/macro'
import theme from './theme'
import GlobalStyle from './globalStyles'
// import logo from './logo.svg'
// import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>Test</div>
      <h1>Midnight/Display Right</h1>
    </ThemeProvider>
  )
}

export default App
