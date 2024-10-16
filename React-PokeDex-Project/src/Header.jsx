import React from 'react';
import POKEBALL from './assets/Images/POKEBALL.png';
import GRASS from './assets/Images/GRASS.png';
import FIRE from './assets/Images/FIRE.png';
import WATER from './assets/Images/WATER.png';
import ELECTRIC from './assets/Images/ELECTRIC.png';
import PSYCHIC from './assets/Images/PSYCHIC.png';
import ICE from './assets/Images/ICE.png';
import GROUND from './assets/Images/GROUND.png';
import FLYING from './assets/Images/FLYING.png';
import BUG from './assets/Images/BUG.png';
import ROCK from './assets/Images/ROCK.png';
import GHOST from './assets/Images/GHOST.png';
import FAIRY from './assets/Images/FAIRY.png';
import NORMAL from './assets/Images/NORMAL.png';
import FIGHTING from './assets/Images/FIGHTING.png';
import POISON from './assets/Images/POISON.png';
import STEEL from './assets/Images/STEEL.png';

const typeImages = {
    pokeball: POKEBALL,
    grass: GRASS,
    fire: FIRE,
    water: WATER,
    electric: ELECTRIC,
    psychic: PSYCHIC,
    ice: ICE,
    ground: GROUND,
    flying: FLYING,
    bug: BUG,
    rock: ROCK,
    ghost: GHOST,
    fairy: FAIRY,
    normal: NORMAL,
    fighting: FIGHTING,
    poison: POISON,
    steel: STEEL,
};

const Header = ({ searchTerm, setSearchTerm, sortOrder, setSortOrder, setSelectedType }) => {
    return (
        <div className="header-container">
            <h1 className="title">Kanto Region Pokédex</h1>
            <div className="type-images-container">
                {Object.keys(typeImages).map(type => (
                    <img 
                        key={type} 
                        src={typeImages[type]} 
                        alt={type} 
                        className="type-image" 
                        onClick={() => setSelectedType(type === 'pokeball' ? '' : type)} 
                    />
                ))}
            </div>
            <div className="controls-container">
                <input
                    type="text"
                    placeholder="Search Pokémon"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder} className="dropdown">
                    <option value="">Sort By</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="id">ID</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
