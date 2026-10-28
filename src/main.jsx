import React from 'react'
import ReactDOM from 'react-dom/client'
// Tokens and the reset must load BEFORE component styles so that component
// rules (e.g. .nav__cta--mobile) can override shared ones (e.g. .btn).
import './styles/global.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
