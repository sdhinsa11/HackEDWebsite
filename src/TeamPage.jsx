import './TeamPage.css';
import './index.css'
import Header from './Header.jsx'
import Dhruvil from'./assets/Dhruvil.webp'
import Divya from './assets/Prasad_Divya_1_1.webp'
import Sohanna from './assets/Sohanna.webp'
import Diya from './assets/Diya.png'


const teamMembers = [
  { name: "Sohanna", role: "-", image: Sohanna },
  { name: "Divya", role: "-", image: Divya },
  { name: "Dhruvil", role: "-", image: Dhruvil },
  { name: "Sumayya", role: "-", image: "/images/member4.jpg" },
  { name: "Diya", role: "-", image: Diya}
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
