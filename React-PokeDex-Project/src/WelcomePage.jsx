import React from 'react';
import pokedexImage from './assets/Images/Pokédex_logo.png';
import mapImage from './assets/Images/Map.png'; 
import './WelcomePage.css';

const WelcomePage = ({ onGetStarted }) => {
  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <header className="welcome-header">
          <img src={pokedexImage} alt="Pokedex" className="pokedex-image" />
        </header>
        <div className="welcome-content-wrapper">
          <img src={mapImage} alt="Map" className="map-image" />
          <div className="welcome-content-overlay">
            <h1>Welcome!</h1>
            <p>Explore the wonder of Pokémon in the <strong>KANTO</strong> region.</p>
            <button className="button" onClick={onGetStarted}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
