import './index.css';


export default function Header({ currentPage, setCurrentPage }) {
    const scrollToAbout = () => {
        // Check if we're currently on the team page
        if (currentPage === 'team') {
            // If on the TeamPage, first navigate back to MainPage
            setCurrentPage('main');
            
            // After state change, wait a bit and then scroll
            setTimeout(() => {
                const theProject = document.querySelector(".theProject");
                if (theProject) {
                    theProject.scrollIntoView({ behavior: "smooth" });
                }
            }, 50);  // Small delay to allow state change and re-render
        } else {
            // If we're already on the MainPage, just scroll
            const theProject = document.querySelector(".theProject");
            if (theProject) {
                theProject.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
      <h1 className='header'>
        <div style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('main')}>SightSense</div>
        <div className='links'>
          <div className='l1' onClick={scrollToAbout} style={{ cursor: 'pointer' }}>About</div>
          <div 
            className='l2' 
            onClick={() => setCurrentPage('team')} 
            style={{ cursor: 'pointer' }}>
            Team
          </div>
        </div>
      </h1>
    );
}