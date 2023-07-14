import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Title from './Title.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Title />
  </React.StrictMode>,
)
