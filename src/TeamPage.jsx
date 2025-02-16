import './TeamPage.css';
import './index.css'
import Header from './Header.jsx'

const teamMembers = [
  { name: "Sohanna", role: "-", image: "/images/member1.jpg" },
  { name: "Divya", role: "-", image: "/images/member2.jpg" },
  { name: "Dhruvil", role: "-", image: "/images/member3.jpg" },
  { name: "Sumayya", role: "-", image: "/images/member4.jpg" },
  { name: "Diya", role: "-", image: "/images/member5.jpg" }
];

export default function TeamPage() {
  return (
    <div>
      

      <h1 className="subHeaders">Our Team</h1>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className='person' key={index}>
            <img className='img' src={member.image} alt="Team Member" />
            <p className='name'>{member.name}</p>
            <p className='roles'>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
