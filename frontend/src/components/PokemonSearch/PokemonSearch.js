import React, { useState } from 'react';
import axios from 'axios';
import './PokemonSearch.css';

const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!pokemonName) return;

        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            setPokemonData(response.data);
            setError('');

            const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${response.data.id}`);
            const flavorText = speciesResponse.data.flavor_text_entries.find(entry => entry.language.name === 'en');
            setDescription(flavorText ? flavorText.flavor_text : 'No description available.');

        } catch (err) {
            setError('Pokémon not found. Please try again.');
            setPokemonData(null);
            setDescription('');
        }
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="pokemon-search">
            <h1>Search for a Monster</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter Pokémon name"
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {error && <p className="error">{error}</p>}
            {pokemonData && (
                <div className="pokemon-info">
                    <h2>{capitalizeFirstLetter(pokemonData.name)}</h2>
                    <img 
                        src={`https://img.pokemondb.net/artwork/large/${pokemonData.name}.jpg`} 
                        alt={pokemonData.name} 
                    />
                    <p id='description-p-tag'>{description}</p>
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                    <p>Type: {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default PokemonSearch;
