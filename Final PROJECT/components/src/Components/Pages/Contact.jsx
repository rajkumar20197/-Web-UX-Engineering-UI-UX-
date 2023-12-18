import React from 'react';
import { useState } from 'react';
import './contact.css';
import Toggle from '../DarkModeToggle/Toggle';

const Contact = ({ setOpenModal, darkMode, setDarkMode }) => {
  const [active, setActive] = useState("")
  return (
    <div className={`Contact-container ${darkMode ? 'darkMode' : ''}`}>
      <section className="section">
        <h2>Company/Project Overview</h2>
        <p>
        
        Travel Agents help clients manage everything from transportation to accommodations when planning a vacation. They also help with itinerary planning so that their trip is as fun-filled as possible. Whether it's family activities or ensuring a good hotel, agents make their client's life easier while on vacation. </p>
      </section>

      <section className="section">
        <h2>Mission and Values</h2>
        <p>
        Some examples of common core values for these companies include customer service, flexibility, excellence, professionalism, safety, innovation. Good customer service is essential for any business in this industry because it ensures that customers feel heard, respected, and satisfied with their experience. </p>
      </section>

      <section className="section">
        <h2>Founding Story</h2>
        <p>
        Matt Wilson, co-founder of Under30Experiences, came up with the travel company idea after going on a life-changing trip to Iceland. He saw the opportunity to bring his community of young entrepreneurs on similar retreats, and after organizing a successful trip to Iceland, the idea caught on and the business took off
        </p>
      </section>

      <section className="section">
        <h2>Team Members</h2>
        <div className="team-members">
          <div className="team-member">
           
            <div>
              <h3>Yadhu Krishna</h3>
              <p>Program director</p>
              <h3>Rajkumar Thota</h3>
              <p>Assistant  director</p>
            </div>
          </div>
        </div>
      </section>
  </div>
  );
};

export default Contact;
