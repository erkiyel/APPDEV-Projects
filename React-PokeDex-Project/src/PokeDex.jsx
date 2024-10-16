import React, { useState, useEffect } from 'react';
import './Pokedex.css';

const typeColors = {
    normal: '#A8A78D',
    fire: '#FBA54C',
    water: '#A4BDF0',
    electric: '#F6D44D',
    grass: '#68C751',
    ice: '#99D9D9',
    fighting: '#C22D28',
    poison: '#A65E9E',
    ground: '#E2BF5D',
    flying: '#A98FF3',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A138',
    ghost: '#705898',
    dragon: '#6F35FC',
    dark: '#705848',
    steel: '#B7B7CE',
    fairy: '#D685C2',
};

const Pokedex = ({ searchTerm, selectedType, sortOrder }) => {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonDescription, setPokemonDescription] = useState({
        description: '',
        height: '',
        weight: '',
        types: [],
        category: '',
        weaknesses: []
    });

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const data = await response.json();
            const pokemonData = await Promise.all(
                data.results.map(async (p, index) => {
                    const res = await fetch(p.url);
                    const pokemonInfo = await res.json();
                    return { ...pokemonInfo, id: index + 1 };
                })
            );
            setPokemon(pokemonData);
        };
        fetchPokemons();
    }, []);

    const fetchPokemonWeaknesses = async (types) => {
        const weaknesses = new Set();
        for (const type of types) {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type.type.name}/`);
            const typeData = await response.json();
            typeData.damage_relations.double_damage_from.forEach(weakness => {
                weaknesses.add(weakness.name);
            });
        }
        return Array.from(weaknesses);
    };

    const fetchPokemonDescription = async (id) => {
        try {
            const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
            const speciesData = await speciesResponse.json();
            const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || 'No description available.';
            const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const pokemonData = await pokemonResponse.json();
            const height = pokemonData.height / 10;
            const weight = pokemonData.weight / 10;
            const types = pokemonData.types;
            const category = speciesData.genera.find(genus => genus.language.name === 'en')?.genus || 'Unknown category';
            const weaknesses = await fetchPokemonWeaknesses(types);
            setPokemonDescription({
                description,
                height,
                weight,
                types: types.map(type => type.type.name),
                category,
                weaknesses
            });
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };

    const sortPokemons = (pokemons) => {
        if (sortOrder === 'a-z') {
            return pokemons.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === 'z-a') {
            return pokemons.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortOrder === 'id') {
            return pokemons.sort((a, b) => a.id - b.id);
        }
        return pokemons;
    };

    const filteredPokemons = pokemon
        .filter(p => selectedType ? p.types.some(type => type.type.name === selectedType) : true)
        .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const sortedPokemons = sortPokemons(filteredPokemons);

    const handleCardClick = (p) => {
        setSelectedPokemon(p);
        fetchPokemonDescription(p.id);
    };

    const closeModal = () => {
        setSelectedPokemon(null);
    };

    return (
        <div className="pokedex-container">
            <div className="pokemon-cards">
                {sortedPokemons.length > 0 ? (
                    sortedPokemons.map((p) => {
                        const cardType = p.types[0].type.name;
                        const cardColor = typeColors[cardType] || '#FFFFFF';
                        return (
                            <div 
                                className="pokemon-card" 
                                key={p.id} 
                                onClick={() => handleCardClick(p)} 
                                style={{ backgroundColor: cardColor }}
                            >
                                <div className="id">{`#${p.id}`}</div>
                                <img src={p.sprites.front_default} alt={p.name} />
                                <h3 className="pokemon-name">{p.name}</h3>
                            </div>
                        );
                    })
                ) : (
                    <p>No Pokémon found</p>
                )}
            </div>

            {selectedPokemon && (
                <div className="modal">
                    <div className="modal-content" style={{ backgroundColor: typeColors[selectedPokemon.types[0].type.name] }}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>{selectedPokemon.name}</h2>
                        <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} style={{ width: '300px', height: 'auto' }} />
                        <div className="pokemon-details">
                            <p><strong>Description:</strong> {pokemonDescription.description}</p>
                            <p><strong>Height:</strong> {pokemonDescription.height} m</p>
                            <p><strong>Weight:</strong> {pokemonDescription.weight} kg</p>
                            <p><strong>Category:</strong> {pokemonDescription.category}</p>
                            <p><strong>Type:</strong> {pokemonDescription.types.join(', ')}</p>
                            <p><strong>Weaknesses:</strong> {pokemonDescription.weaknesses.join(', ')}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pokedex;
