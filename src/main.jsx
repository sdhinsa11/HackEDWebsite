import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './MainPage.jsx'
import Page2 from './Page2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage />
    <Page2 />
  </StrictMode>,
)
