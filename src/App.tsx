import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components/macro' // import micro for automatic debugging and optimization features
import theme from './theme'
import GlobalStyle from './globalStyles'
import Home from './pages/Home'

function App() {
  const showPage = () => {
    document.body.className = document.body.className.replace('js-loading', '')
  }

  useEffect(() => {
    window.addEventListener('load', showPage, false)
    return () => window.removeEventListener('resize', showPage)
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
