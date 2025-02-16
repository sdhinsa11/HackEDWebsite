import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './MainPage.jsx'
import TeamPage from './TeamPage.jsx'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'
import Page4 from './Page4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage />
    {/* <TeamPage /> */}
    <Page2 />
    <Page3/>
    <Page4/>
  </StrictMode>,
)
