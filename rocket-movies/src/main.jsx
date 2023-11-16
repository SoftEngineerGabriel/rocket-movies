import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global.js'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme.js'

import { SingIn } from './pages/SignIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SingIn />
    </ThemeProvider>
  </React.StrictMode>,
)
