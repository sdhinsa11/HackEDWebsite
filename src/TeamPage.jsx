import './TeamPage.css';
import { Rive } from '@rive-app/react-canvas';

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
      <h1 className='header'>
        <div>Logo Placement</div>
        <div className='links'>
          <div className='l1'>About</div>
          <div className='l2'>Team</div>
        </div>
      </h1>

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
