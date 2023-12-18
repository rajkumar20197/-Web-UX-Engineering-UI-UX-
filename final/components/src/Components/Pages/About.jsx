import React from 'react';
import './about.css';
import Toggle from '../DarkModeToggle/Toggle';
import ModalForm from '../ModalForm/ModalForm';
import { useState } from 'react';


const About = ({ setOpenModal, darkMode, setDarkMode }) => {
  const [active, setActive] = useState("")
  return (
    <div className={`about-container ${darkMode ? 'darkMode' : ''}`}>
      <h2 className="subheading">Exploring More Places on a Budget</h2>
      <p>
        Traveling is an enriching experience that doesn't have to break the bank.
        In this journey, we believe in discovering hidden gems and lesser-known
        destinations that offer incredible experiences at an affordable cost.
      </p>

      <h3 className="subheading">Budget-Friendly Destinations</h3>
      <p>
        Our focus is on bringing you to destinations that not only captivate your
        senses but also fit well within your budget. From charming local villages
        to breathtaking natural wonders, we've curated a list of places that offer
        more value for your travel buck.
      </p>

      <h3 className="subheading">Tips for Affordable Travel</h3>
      <p>
        Embark on your budget-friendly adventure armed with practical tips. Learn
        about budget accommodation, local eateries, and transportation hacks to
        stretch your dollar without compromising the quality of your travel
        experience.
      </p>

      <h3 className="subheading">Community of Budget Explorers</h3>
      <p>
        Join our community of like-minded budget travelers. Share your stories,
        exchange tips, and discover new destinations together. Together, we can
        make every travel dream a reality, no matter the size of your wallet.
      </p>

      <h3 className="subheading">Information</h3>
      <p>
        For more information, contact us.
      </p>
    </div>
  );
};

export default About;
