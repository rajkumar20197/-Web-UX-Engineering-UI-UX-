import { useState } from 'react';
import Toggle from '../DarkModeToggle/Toggle';
import React from 'react';
import './shop.css';


const Shop = ({ setOpenModal, darkMode, setDarkMode }) => {
  const [active, setActive] = useState("")
  const products = [
    {
      title1: 'Handmade Textiles',
      category: 'Local Handicrafts and Souvenirs',
      price: '$50.00',
      image: 'https://media.istockphoto.com/id/91697992/photo/mayan-blankets.jpg?s=612x612&w=0&k=20&c=7cprqjzrNQWWb3MCr23rC_HUuOWfLI8u7i6La02zQOw=',
      alt: 'Handmade Textiles',
    },
    {
      title2: 'Local Spices Set',
      category: 'Local Cuisine and Food Products',
      price: '$15.99',
      image: 'https://media.istockphoto.com/id/149874822/photo/freshness-vegetables.jpg?s=612x612&w=0&k=20&c=EJuc-aJFfv2lTC_zq2B9dI23YDLXcPl2hPV8wgY94XQ=',
      alt: 'Local Spices Set',
    },
    {
      title3: 'Traditional Garment',
      category: 'Clothing and Apparel Kids of the World Vector Characters Collection Part 1: Set of 63 children of different nationalities in cartoon style.',
      price: '$80.00',
      image: 'https://media.istockphoto.com/id/488465412/photo/happy-mariachis.jpg?s=612x612&w=0&k=20&c=PS4IOcEyHgDCi91SQDbZbNccjfVDYnf1hA-cFTsC6mg=',
      alt: 'Traditional Garment',
    },
    {
      title4: 'Local Jewelry',
      category: ' Jewelry on display during Toronto jazz festival',
      price: '$120.00',
      image: 'https://media.istockphoto.com/id/852272110/photo/jewelry-on-display-at-street-festival.jpg?s=612x612&w=0&k=20&c=QtZ150GFhtJDuLjhj9t-yXiEtEy1WxZQj3laS0zPDHI=',
      alt: 'Local Jewelry',
    },
    {
      title5: 'Antique Souvenir',
      category: 'Antiques and Collectibles Proud woman holding vase from her collection of antiques',
      price: '$200.00',
      image: 'https://media.istockphoto.com/id/514736510/photo/woman-buying-souvenirs.jpg?s=612x612&w=0&k=20&c=Mq7ZkIcByDu_xAIyvjIwhLv8HjIeSvOgwBOEuloUTcw=',
      alt: 'Antique Souvenir',
    },
    {
      title6: 'Handmade Soap Set',
      category: 'Local Handmade Products Soap Bar And Liquid. Shampoo, Shower Gel. Towels. Spa Kit',
      price: '$12.50',
      image: 'https://media.istockphoto.com/id/584574708/photo/soap-bar-and-liquid-shampoo-shower-gel-towels-spa-kit.jpg?s=612x612&w=0&k=20&c=TFeQmTwVUwKY0NDKFFORe3cwDCxRtotFgEujMswn3dc=',
      alt: 'Handmade Soap Set',
    },
    {
      title7: 'Local Souvenir Keychain',
      category: 'Local Markets and Street Vendor Items Eiffel Tower key chain in a souvenir shop . Souvenir of Paris ',
      price: '$5.00',
      image: 'https://media.istockphoto.com/id/1327975839/photo/eiffel-tower-key-chain-in-a-souvenir-shop.jpg?s=612x612&w=0&k=20&c=4vNfGWTQg07iJ9BZTalOMWqHso8cA-bEqiAC2gRsnOE=',
      alt: 'Local Souvenir Keychain',
    },
    {
      title8: 'Local Artisanal Beverage',
      category: 'Local Beverages and Spirits Beverage Menu Page Design Element On Organic Texture Background',
      price: '$25.99',
      image: 'https://media.istockphoto.com/id/1146783235/photo/man-sampling-beer-from-flight.jpg?s=612x612&w=0&k=20&c=PQtmix_CyC5DardtC0kcPSFXdahT_QBOodrOpiNMCsA=',
      alt: 'Local Artisanal Beverage',
    },
  
  ];
 
  return (
    <div className={` shop-container ${darkMode ? 'darkMode' : ''}`}>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.alt} />
            <div className="card-info">
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>{`Price: ${product.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
