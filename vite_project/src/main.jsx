import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Demo  from './func.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <Demo/>
    </>
  </StrictMode>,
)
