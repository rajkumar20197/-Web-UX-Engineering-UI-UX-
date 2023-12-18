import { useState } from 'react';
import './home.css'

const Home = ({ setPage, darkMode }) => {

    const handleMoreFiltersClick = (e) => {
        e.preventDefault();
        setPage("MoreFilters"); //---- Toggle the state
    };
    return (
        <section className={`home ${darkMode ? 'darkMode' : ''}`}>
            <div className= {`homeContent-container`}>
                <div className="textDiv">
                    <span className="smallText">
                        Our Packages
                    </span>
                    <h1 className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>
                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">
                            Search Your destination</label>
                        <div className="input name">
                            <input type="text" placeholder='Enter name here...'  />
                           
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">
                            Select your day</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price</label>
                            <h3 className="total">$6000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="6000"
                                min="500" />
                        </div>
                    </div>
                    <button className='btn btn-filter' onClick={(e) => handleMoreFiltersClick(e)}>
                        <a href='/'>More filters</a>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Home