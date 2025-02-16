import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TeamPage from './TeamPage.jsx'
import Page2 from './Page2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TeamPage />
    <MainPage />
    <Page2 />
  </StrictMode>,
)
