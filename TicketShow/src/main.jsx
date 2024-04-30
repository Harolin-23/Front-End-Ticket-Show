import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {HeaderGen} from './components/header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HeaderGen />
    <App />
  </React.StrictMode>,
)
