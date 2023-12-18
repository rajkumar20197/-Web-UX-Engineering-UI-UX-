import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ModalForm from './Components/ModalForm/ModalForm';
// import Skip from './Components/Skip/Skip';
import Toggle from './Components/DarkModeToggle/Toggle';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [page, setPage] = useState("Home");
  const [openModal, setOpenModal] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const changePage = (newPage) => {
    setPage(newPage);
    setPageName(newPage);  
  };

  return (
    <>
      <div className={`root ${darkMode ? 'darkMode' : ''}`}>
      <Navbar setPage={setPage} setOpenModal={setOpenModal} darkMode={darkMode} toggleTheme={toggleMode} changePage={changePage} setDarkMode={setDarkMode} />
      
      
      <Main openModal={openModal} setOpenModal={setOpenModal} darkMode={darkMode} page={page} setPage={setPage}/>
      <Footer darkMode={darkMode} />
      </div>

    </>
  );
};

export default App;
