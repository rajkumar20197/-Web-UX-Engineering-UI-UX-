import { useState } from 'react';
import './main.css'

import About from '../Pages/About'
import Package from '../Pages/Package'
import Contact from '../Pages/Contact'
import Shop from '../Pages/Shop'
import Home from '../Pages/Home'
import ModalForm from '../ModalForm/ModalForm';
import MoreFilters from '../MoreFilters/MoreFilters';

const Main = ({ page, setPage, openModal, darkMode, setOpenModal }) => {

    return (
        <div id="main">
            <div className="overlay" style={{ display: openModal ? 'block' : 'none' }}>
                <div className="modal-overlay">
                    <ModalForm
                        currentDisplayName={"Book Now!!"}
                        closeModal={() => setOpenModal(false)}
                    />
                </div>
            </div>

            <section className='main container section'>
                {(page == "Home") && <Home darkMode={darkMode} setPage={setPage} />}
                {(page == "Shop") && <Shop darkMode={darkMode} />}
                {(page == "Contact") && <Contact darkMode={darkMode} />}
                {(page == "Package") && <Package darkMode={darkMode} />}
                {(page == "About") && <About darkMode={darkMode} />}
                {(page == "MoreFilters") && <MoreFilters darkMode={darkMode}/>}
            </section>
        </div>
    )
}

export default Main