import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Clarity from '@microsoft/clarity'

// 🔴 PUT YOUR REAL PROJECT ID HERE
Clarity.init("vqbknbxpnc")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)