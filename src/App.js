import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import styled , { injectGlobal } from 'styled-components';
//
import Routes from 'react-static-routes'

import './app.css'

injectGlobal`
body {
}
`

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default hot(module)(App)
