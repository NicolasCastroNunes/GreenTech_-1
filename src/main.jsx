import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/all.css';
import './assets/styles/home.css';
import './assets/styles/catalogo.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
