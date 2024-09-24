import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PokeDisplay.css';

const PokeDisplay = () => {
    const { name } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
                setPokemonData(response.data);
            } catch (err) {
                setError('Pokémon not found. Please try again.');
            }
        };

        fetchPokemon();
    }, [name]);

    if (error) return <p className="error">{error}</p>;

    return (
        <div className="pokemon-search">
            <div className="pokemon-info">
                {pokemonData && (
                    <>
                        <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
                        <img 
                            src={`https://img.pokemondb.net/artwork/large/${pokemonData.name}.jpg`} 
                            alt={pokemonData.name} 
                        />
                        <p>Height: {pokemonData.height}</p>
                        <p>Weight: {pokemonData.weight}</p>
                        <p>Type: {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                        <p id="description-p-tag">Additional Info</p> {/* Additional info section */}
                    </>
                )}
            </div>
        </div>
    );
};

export default PokeDisplay;
