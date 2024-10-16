import React, { useState, useEffect } from 'react';
import WelcomePage from './WelcomePage';
import Pokedex from './Pokedex';
import LoadingPage from './LoadingPage';
import Header from './Header';

const App = () => {
  const [isPokedexVisible, setPokedexVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      setPokedexVisible(true);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    document.title = isLoading
      ? 'Loading...'
      : isPokedexVisible
      ? 'Pokedex'
      : 'Welcome to the Pokédex';
  }, [isLoading, isPokedexVisible]);

  return (
    <div className="app-container">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {isPokedexVisible && (
            <Header
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              setSelectedType={setSelectedType}
            />
          )}
          <div className={`pokedex-body ${isPokedexVisible ? 'visible' : ''}`}>
            {isPokedexVisible ? (
              <Pokedex
                searchTerm={searchTerm}
                selectedType={selectedType}
                sortOrder={sortOrder}
              />
            ) : (
              <WelcomePage onGetStarted={handleGetStarted} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
