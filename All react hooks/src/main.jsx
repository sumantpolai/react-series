import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import First from './First.jsx'
import Second from './Second.jsx'
import Third from'./Third.jsx'
import Fourth from './Fourth.jsx'
import Five from './Five.jsx'
import Six from './Six.jsx'
import CotextProvider from './context/Appcontext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <First/>
  <Second/>
  <Third/>
  <Fourth/>
  <Five/>

  <CotextProvider>
  <Six/>
  </CotextProvider>
  </>
)
