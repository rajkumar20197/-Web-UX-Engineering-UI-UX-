import React from 'react';
import './moreFilters.css';
import { useState } from 'react';

const MoreFilters = ({ setOpenModal, darkMode, setDarkMode }) => {
  const [active, setActive] = useState("")
  return (
    <div className={`more-filters-container ${darkMode ? 'darkMode' : ''}`}>
      {/* Travel Type */}
      <div className="filter-card">
        <h3>Travel Type</h3>
        <ul>
          <li>Solo Travel</li>
          <li>Family Travel</li>
          <li>Adventure Travel</li>
          <li>Romantic Getaways</li>
          <li>Group Travel</li>
        </ul>
      </div>

      {/* Accommodation */}
      <div className="filter-card">
        <h3>Accommodation</h3>
        <ul>
          <li>Hotel</li>
          <li>Resort</li>
          <li>Vacation Rental</li>
          <li>Hostel</li>
          <li>Boutique Hotel</li>
        </ul>
      </div>

      {/* Trip Duration */}
      <div className="filter-card">
        <h3>Trip Duration</h3>
        <ul>
          <li>Weekend Getaway</li>
          <li>Short Trip (1-3 days)</li>
          <li>Medium Trip (4-7 days)</li>
          <li>Long Trip (7+ days)</li>
        </ul>
      </div>

      {/* Budget Range */}
      <div className="filter-card">
        <h3>Budget Range</h3>
        <ul>
          <li>Low Budget</li>
          <li>Mid-Range</li>
          <li>Luxury</li>
        </ul>
      </div>

      {/* Activities */}
      <div className="filter-card">
        <h3>Activities</h3>
        <ul>
          <li>Beach Activities</li>
          <li>Skiing/Snowboarding</li>
          <li>Hiking/Trekking</li>
          <li>Cultural Experiences</li>
          <li>Historical Sites</li>
        </ul>
      </div>

      {/* Transportation */}
      <div className="filter-card">
        <h3>Transportation</h3>
        <ul>
          <li>Flight</li>
          <li>Train</li>
          <li>Bus</li>
          <li>Car Rental</li>
          <li>Cruise</li>
        </ul>
      </div>

      {/* Climate */}
      <div className="filter-card">
        <h3>Climate</h3>
        <ul>
          <li>Tropical</li>
          <li>Mediterranean</li>
          <li>Alpine</li>
          <li>Desert</li>
        </ul>
      </div>

      {/* Special Offers */}
      <div className="filter-card">
        <h3>Special Offers</h3>
        <ul>
          <li>Discounts</li>
          <li>Packages</li>
          <li>Last-Minute Deals</li>
        </ul>
      </div>

      {/* Accessibility */}
      <div className="filter-card">
        <h3>Accessibility</h3>
        <ul>
          <li>Handicap Accessible</li>
          <li>Pet-Friendly</li>
          <li>Child-Friendly</li>
        </ul>
      </div>

      {/* Cuisine Preferences */}
      <div className="filter-card">
        <h3>Cuisine Preferences</h3>
        <ul>
          <li>Local Cuisine</li>
          <li>Vegetarian/Vegan Options</li>
          <li>All-Inclusive Meals</li>
        </ul>
      </div>

      {/* Language */}
      <div className="filter-card">
        <h3>Language</h3>
        <ul>
          <li>English</li>
          <li>Spanish</li>
          <li>French</li>
          <li>etc.</li>
        </ul>
      </div>

      {/* Wi-Fi Availability */}
      <div className="filter-card">
        <h3>Wi-Fi Availability</h3>
        <ul>
          <li>Free Wi-Fi</li>
          <li>Paid Wi-Fi</li>
          <li>No Wi-Fi</li>
        </ul>
      </div>
    </div>
  );
};

export default MoreFilters;
