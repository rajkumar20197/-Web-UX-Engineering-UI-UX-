import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'


const Navbar = ({ setPage, setOpenModal, darkMode, setDarkMode }) => {
    const [active, setActive] = useState("")

    //------function taggle navbar-------//
    const toggleNav = () => {
        if (active == "show") {
            setActive("");
        } else {
            setActive("show")
        }
    }

    const handlePageChange = (e, page) => {
        e.preventDefault();
        setPage(page);
    }

    const handleOpenModal = (e) => {
        e.preventDefault();
        console.log("pressed");
        setOpenModal(true);
    }
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`header ${darkMode ? 'darkMode' : ''}`}>
            <a href="#main" className="skip-to-main-content-link">Skip to main content</a>
            <header className="header flex">
                <div className='logoDiv'>
                    <a href='/' className="logo flex" onClick={(e) => handlePageChange(e, "Home")}>
                        <h1><MdOutlineTravelExplore
                            className="icon" />
                            Travel</h1>
                    </a>
                </div>
                <nav className={active}>
                    <ul className="navLists flex">
                        <li className="navIteam">
                            <a href="/" className="navLink" onClick={(e) => handlePageChange(e, "Home")}>Home</a>
                        </li>
                        <li className="navIteam">
                            <a href="/" className="navLink" onClick={(e) => handlePageChange(e, "Package")}>Package</a>
                        </li>
                        <li className="navIteam">
                            <a href="/" className="navLink" onClick={(e) => handlePageChange(e, "Shop")}>Shop</a>
                        </li>
                        <li className="navIteam">
                            <a href="/" className="navLink" onClick={(e) => handlePageChange(e, "About")}>About</a>
                        </li>

                        <li className="navIteam">
                            <a href="/" className="navLink" onClick={(e) => handlePageChange(e, "Contact")}>Contact</a>
                        </li>
                        <button className='btn' onClick={(e) => handleOpenModal(e)}>
                            <a href='#modal' >Book Now</a>
                        </button>
                        <button className="themeToggle" onClick={toggleDarkMode}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </ul>

                </nav>

                <div onClick={toggleNav}
                    className="toggleNavbar">
                    <TbGridDots className="icons" />
                </div>
            </header>
        </div>
    )
}

export default Navbar