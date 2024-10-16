import React from 'react';
import './LoadingPage.css';
import loadingGif from './assets/Images/Psyduck.gif'; 

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <h2>Loading...</h2>
      <img src={loadingGif} alt="Loading GIF" className="loading-gif" />
    </div>
  );
};

export default LoadingPage;