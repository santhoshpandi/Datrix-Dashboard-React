import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router'
import { SlideProvider } from './contexts/SlideContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <SlideProvider>
        <App />
      </SlideProvider>
    </HashRouter>
  </StrictMode>,
)
