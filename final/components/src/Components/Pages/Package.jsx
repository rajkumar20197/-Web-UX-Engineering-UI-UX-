import React from 'react';
import './Package.css';
import { useState } from 'react';


const Package =  ({ setOpenModal, darkMode, setDarkMode }) => {
  const [active, setActive] = useState("")

const places = [
  {
    id: 1,
    name: 'California Beach Retreat',
    description: 'Enjoy a relaxing beach vacation in California.',
    price: '$2000',
    image: 'https://media.istockphoto.com/id/1369156452/photo/couple-on-hiking-trip-resting-on-top-of-the-mountain-looking-at-ocean-view.jpg?s=612x612&w=0&k=20&c=v-p3bGRpZOdWrcAHLz0wGqR1JOkkdIuBqPA6UZbJlqQ=',
  },
  {
    id: 2,
    name: 'Mountain Adventure in California',
    description: 'Explore the breathtaking mountains of California.',
    price: '$1800',
    image: 'https://media.istockphoto.com/id/935232296/photo/family-in-yosemite.jpg?s=612x612&w=0&k=20&c=zOgWNZpOigBUF1wXfpJJzH7L6vmICJJu8jHsg-kfnvI=',
  },
  {
    id: 3,
    name: 'Urban Escape in San Francisco',
    description: 'Experience the vibrant city life of San Francisco.',
    price: '$2200',
    image: 'https://media.istockphoto.com/id/1323233743/photo/alcatraz-at-night.jpg?s=612x612&w=0&k=20&c=CTOE2Wc5n4w3NzCwC8mI9e10_a1iSpGfKqGkL5ItXuQ=',
  },
  {
    id: 4,
    name: 'California Redwoods Tour',
    description: 'Discover the majestic beauty of California redwoods.',
    price: '$2500',
    image: 'https://media.istockphoto.com/id/1139426571/photo/a-couple-tourists-hiking-in-redwood-national-park-california.jpg?s=612x612&w=0&k=20&c=5o2RoxiyPZhme5OSj0ZQ5RLcYaIwID8CwNtW-BIRIdw=',
  },
  {
    id: 5,
    name: 'Golden Gate Bridge',
    description: 'The Golden Gate Bridge and Bay area in San Francisco California at sunrise Discover the majestic beauty of California redwoods.',
    price: '$2100',
    image: 'https://media.istockphoto.com/id/1153358647/photo/san-francisco-bay-area-in-california.jpg?s=612x612&w=0&k=20&c=rJLD2u6uapvzvaLhd02itDEqoDCflQBMBU_sSTDcw5c=',
  },
  {
    id: 6,
    name: 'Yosemite National Park',
    description: 'Yosemite National Park, California, Nature, Autumn, River Discover the majestic beauty of California redwoods.',
    price: '$2000',
    image: 'https://media.istockphoto.com/id/505872990/photo/sunrise-on-yosemite-valley.jpg?s=612x612&w=0&k=20&c=AWi_pqsjFlIF6UmsSE8XmfMtH3BXtKBXVET3nHbswMk=',
  },
  {
    id: 7,
    name: 'Bryce Canyon National Park',
    description: 'Morning sunlight over the amphitheater at Bryce Canyon viewed from Inspiration Point.',
    price: '$2900',
    image: 'https://media.istockphoto.com/id/176984017/photo/dawn-over-bryce-canyon.jpg?s=612x612&w=0&k=20&c=wmBkMiXjqFPe3sBpYgUUWqLWI-mTuXnQmOOOG-f-UwY=',
  },
  {
    id: 8,
    name: 'Disneyland Park',
    description: ' Mary Poppins smiles at a young child as she leads a line of children in song and dance in front of Cinderella.',
    price: '$2200',
    image: 'https://media.istockphoto.com/id/506908408/photo/mary-poppins-dances-at-disneyland.jpg?s=612x612&w=0&k=20&c=3AX2gp-5wS43I70C2jeqDY5shUt0Ard2xEfdiaDi-kw=',
  },
];


  return (
    <div className={`package-container ${darkMode ? 'darkMode' : ''}`}>
      {places.map((place) => (
        <div className="card" key={place.id}>
          <img src={place.image} alt={`Travel Place ${place.id}`} />
          <div className="card-info">
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <p>Price: {place.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Package;
