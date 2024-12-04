import React from 'react';
import { Link } from 'react-router-dom';
import black from '../assets/black.png';
import pink from '../assets/pink.png';
import purple from '../assets/purple.png';
import black60 from '../assets/60black.png';
import pink60 from '../assets/60pink.png';
import white60 from '../assets/60white.png';
import animesukuna from '../assets/animesukuna.png';
import animechainsawman from '../assets/animechainsawman.png';
import animeahe from '../assets/animeahe.png';

const ProductPage = () => {
  const categories = [
    {
      title: 'Plain Arc',
      products: [
        {
          id: 1,
          name: 'Classic Black keyboard',
          image: black,
          description: 'Timeless design, great for any workspace.',
        },
        {
          id: 2,
          name: 'Minimalist Pink Keyboard',
          image: pink,
          description: 'A sleek pink keyboard with tactile switches.',
        },
        {
          id: 3,
          name: 'Purple Modern Keyboard',
          image: purple,
          description: 'Contemporary design with premium materials.',
        },
      ],
    },
    {
      title: '60% Arc',
      products: [
        {
          id: 4,
          name: '60% Midnight Black Keyboard',
          image: black60,
          description: 'Compact yet powerful for gaming.',
        },
        {
          id: 5,
          name: '60% Pink Power',
          image: pink60,
          description: 'Small form factor with big performance.',
        },
        {
          id: 6,
          name: '60% White Judgement',
          image: white60,
          description: 'Minimalist design with vibrant rgb lights.',
        },
      ],
    },
    {
      title: 'Anime Arc',
      products: [
        {
          id: 7,
          name: 'Sukuna Keyboard',
          image: animesukuna,
          description: 'Epic Design featuring Sukuna from Jujutsu Kaisen.',
        },
        {
          id: 8,
          name: 'Chainsaw Man Keyboard',
          image: animechainsawman,
          description: 'A bloody mess inspired by chainsaw man.',
        },
        {
          id: 9,
          name: 'Gaming Beast Keyboard',
          image: animeahe,
          description: 'If you like it, stay away from me.',
        },
      ],
    },
  ];

  return (
    <div className="product-page">
      <h2>Our Product Lines</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <div className="products">
              {category.products.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <Link to={`/product/${product.id}`} className="view-manual">
                    View Manual
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
