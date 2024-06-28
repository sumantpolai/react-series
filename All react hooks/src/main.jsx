import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import First from './First.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <First/>
  </>
)
