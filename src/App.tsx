import React from 'react'
import { ThemeProvider } from 'styled-components/macro' // import micro for automatic debugging and optimization features
import theme from './theme'
import GlobalStyle from './globalStyles'
import Button from './ui/Attoms/Button'

function App() {
  const onClick = () => {
    console.log('I am here')
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <div>Test</div>
        <h1>Midnight/Display Right</h1>
        <Button buttonType="primary" onClick={onClick}>
          Primary
        </Button>
        <Button buttonType="secondary">Primary</Button>
      </>
    </ThemeProvider>
  )
}

export default App
