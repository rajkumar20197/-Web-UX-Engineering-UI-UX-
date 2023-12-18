import { useState } from 'react';
import './footer.css'

const Footer = ({ setOpenModal, darkMode, setDarkMode }) => {
  const [active, setActive] = useState("")
    return(
        <div className={`footer-content ${darkMode ? 'darkMode' : ''}`}>
          
        <p>&copy; 2023 Your Company. t&c, Contact Help Feedback Twitter Licence</p>
        
      </div>
    );
}

export default Footer;


