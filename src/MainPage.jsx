import './Page.css'
import './index.css'
import TeamPage from './TeamPage.jsx'
import deviceImage from'./assets/DeviceImage.jpg'
import { useState } from 'react'
import Header from './Header.jsx'
import { DancingRaj } from './DancingRaj.jsx'




function MainPage() {
  const [currentPage, setCurrentPage] = useState('main')

  return (
    <>
      <Header currentPage = {currentPage} setCurrentPage={setCurrentPage} /> 

      { currentPage === 'main' && (
        <>
          
          <div className='theProject'>
            <div className='picDiv'> 
              <img className='projectPic' src={deviceImage} alt="Placeholder for img"/>

            </div>
            <div className='description'> 
              <h1 className='questionHeader'>
                What is it?
              </h1>
              <p>
                Imagine a world where people with visual impairments can confidently navigate their surroundings, effortlessly finding the objects they need. Our innovative device brings that vision to life! Equipped with a powerful AI-driven object recognition system and an intuitive voice command feature, it allows users to simply say the name of the item they are looking for. The built-in webcam scans the environment, and if the object is detected, the device instantly announces its location, guiding the user toward it. To ensure safety, an ultrasonic sensor continuously monitors the surroundings, beeping if the user gets too close to an obstacle. It's more than just a tool—it’s independence, freedom, and confidence in a single device!
              </p>
              <div className = 'prt2'>
                <DancingRaj />
              </div>
            
            </div>
          </div>

          <div className='pageMain'>
                <h1 className='questionHeader'>
                  Why We Made it?
                </h1>
                <p>
                  We believe technology should empower people, not limit them. Many visually impaired individuals face daily challenges navigating unfamiliar spaces or locating essential items. Traditional mobility aids provide some assistance, but we saw an opportunity to take it further—blending artificial intelligence with real-world functionality. Our mission is to create a device that’s not just helpful, but truly life-changing. By combining smart object recognition, voice interaction, and obstacle detection, we are breaking barriers and opening doors to a more accessible world for all.
                </p>
          </div>

          <div className='pageMain'>
            <h1 className='questionHeader'>
              What Inspired us?
            </h1>
            <p>
              Our inspiration came from the millions of visually impaired individuals who navigate the world with resilience and determination. We saw the challenges they face daily—locating objects, avoiding obstacles, and moving independently in unfamiliar environments. We asked ourselves: How can technology bridge this gap and give them more freedom? Seeing how AI and smart sensors are transforming industries, we knew we could create something practical, empowering, and life-changing. Our goal was to move beyond traditional mobility aids and develop a device that doesn’t just assist but enhances independence and confidence.
            </p>
          </div>

          <div className='pageMain last'>
            <div className='sidebyside'>
                <h1 className='questionHeader'>
                  Challenges We Faced
                </h1>
                <p>
                  <ul>
                    <li>Adapting to multiple pivots due to unexpected bugs in object detection.</li>
                    <li>Debugging the computer’s speaker issue by adding a few lines of code.</li>
                    <li>Learning Arduino from scratch during the hackathon, as none of us had prior experience.</li>
                    <li>Resolving speaker output issues by removing a resistor that was preventing sound.</li>
                    <li>Applying Ohm’s Law (V = IR) to troubleshoot and refine our circuit design.</li>
                  </ul>
                </p>
            </div>
        
            <div className='sidebyside'>
              <h1 className='questionHeader'>
                  Future Implications
              </h1>
              <p>
              <ul>
                <li>Enhance model training to improve person recognition accuracy.</li>
                <li>Integrate the OpenAI API for directional guidance towards detected objects.</li>
                <li>Upgrade to a more advanced sensor, such as the Arducam, for superior object detection 
                    (given the resource constraints of this hackathon, we worked with what was available).</li>
              </ul>
              </p>
            </div>
          </div>
        </>
      )}

      {currentPage === 'team' && <TeamPage setCurrentPage={setCurrentPage} />}

      
    </>
  )
}

export default MainPage;