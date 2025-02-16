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
                Lorem ipsum odor amet, consectetuer adipiscing elit. Sit eros purus ornare consectetur nec quam faucibus duis. Imperdiet pharetra blandit est feugiat turpis class at condimentum congue. Id etiam cubilia penatibus inceptos; massa risus adipiscing tortor habitant. Interdum taciti ad habitant auctor pretium justo. Leo eleifend convallis litora magnis magna cubilia. Semper dui purus libero vitae consequat iaculis hac facilisi. Sit senectus fusce quis elementum curabitur per ante luctus augue. Potenti ultrices urna malesuada lectus suscipit. Dignissim nam ultricies ex; hendrerit diam fermentum. Eu dolor velit vitae convallis quam convallis imperdiet eros. Pellentesque fermentum primis potenti in natoque diam dis cubilia. Ipsum nostra morbi pretium semper ut velit lacus. Hendrerit montes etiam lacus natoque orci volutpat sodales purus. Ullamcorper morbi interdum placerat sodales bibendum eleifend nullam. Gravida consequat scelerisque magna ridiculus dictum accumsan. Nulla cursus hac eros leo montes; velit est felis. Aenean eleifend venenatis volutpat suspendisse aliquam curabitur placerat ex. Natoque himenaeos sollicitudin gravida risus ligula sit. Feugiat metus aptent penatibus auctor scelerisque maximus, parturient neque fermentum. Fusce neque netus euismod eros metus vivamus gravida. Porttitor justo penatibus pretium turpis eu suscipit lacus. Posuere leo praesent eleifend suscipit ipsum adipiscing torquent ornare nullam. Sem blandit faucibus vel lorem vehicula tempus. Mollis nostra elit at turpis dis justo tempus est. Nec est vestibulum enim elit fringilla, hac vel. Molestie conubia ridiculus neque leo lobortis magnis.
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
