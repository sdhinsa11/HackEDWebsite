import './TeamPage.css';
import './index.css'
import Header from './Header.jsx'
import Dhruvil from'./assets/Dhruvil.webp'
import Divya from './assets/Prasad_Divya_1_1.webp'
import Sohana from './assets/Sohanna.webp'
import Diya from './assets/Diya.png'
import Sumayya from './assets/Sumayya.jpeg'


const teamMembers = [
  { name: "Sohana", role: "Hardware Engineer/Website Developer", image: Sohana },
  { name: "Divya", role: "Hardware Engineer/Website Developer", image: Divya },
  { name: "Dhruvil", role: "Machine Learning Engineer", image: Dhruvil },
  { name: "Sumayya", role: "Machine Learning Engineer", image: Sumayya },
  { name: "Diya", role: "Hardware Engineer/Website Developer", image: Diya}
];

export default function TeamPage( { setCurrentPage} ) {
  return (
    <div>
      

      <h1 className="subHeaders">Our Team</h1>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className='person' key={index}>
            <img className='img' src={member.image} alt="Team Member" />
            <p className='name'>{member.name}</p>
            <p className='role'>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
