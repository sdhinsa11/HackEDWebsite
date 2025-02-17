import './Page.css'
import './index.css'
import TeamPage from './TeamPage.jsx'
import { useState } from 'react'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'
import Page4 from './Page4.jsx'
import Header from './Header.jsx'


function MainPage() {
  const [currentPage, setCurrentPage] = useState('main')

  return (
    <>
      <Header currentPage = {currentPage} setCurrentPage={setCurrentPage} /> 

      { currentPage === 'main' && (
        <>
          
          <div className='theProject'>
            <div className='picDiv'> 
              <img className='projectPic'alt="Placeholder for img"/>

            </div>
            <div className='description'> 
              <h1 className='questionHeader'>
                What is it?
              </h1>
              <p>
              Imagine a world where people with visual impairments can confidently navigate their surroundings, effortlessly finding the objects they need. Our innovative device brings that vision to life! Equipped with a powerful AI-driven object recognition system and an intuitive voice command feature, it allows users to simply say the name of the item they are looking for. The built-in webcam scans the environment, and if the object is detected, the device instantly announces its location, guiding the user toward it. To ensure safety, an ultrasonic sensor continuously monitors the surroundings, beeping if the user gets too close to an obstacle. It's more than just a tool—it’s independence, freedom, and confidence in a single device!
              </p>

            </div>
          </div>

          <Page2 />
          <Page3/>
          <Page4/>
        </>
      )}

      {currentPage === 'team' && <TeamPage setCurrentPage={setCurrentPage} />}

      
    </>
  )
}

export default MainPage;
