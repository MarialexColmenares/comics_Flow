import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

// BrowserRouter se utiliza para habilitar el enrutamiento en la aplicación. Nos permite definir diferentes rutas y navegar entre ellas sin recargar la página.
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
