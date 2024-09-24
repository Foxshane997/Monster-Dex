import React from 'react';
import { Link } from 'react-router-dom';
import './PokeHome.css';

const PokeHome = () => {
    const pokemonData = [
        { name: "Pikachu", image: "https://img.pokemondb.net/artwork/large/pikachu.jpg" },
        { name: "Bulbasaur", image: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg" },
        { name: "Charmander", image: "https://img.pokemondb.net/artwork/large/charmander.jpg" },
        { name: "Squirtle", image: "https://img.pokemondb.net/artwork/large/squirtle.jpg" },
        { name: "Eevee", image: "https://img.pokemondb.net/artwork/large/eevee.jpg" },
        { name: "Gengar", image: "https://img.pokemondb.net/artwork/large/gengar.jpg" },
        { name: "Celebi", image: "https://img.pokemondb.net/artwork/large/celebi.jpg" },
        { name: "Spinda", image: "https://img.pokemondb.net/artwork/large/spinda.jpg" },
    ];

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Pokémon World!</h1>
            <div className="pokemon-grid">
                {pokemonData.map((pokemon, index) => (
                    <Link to={`/pokemon/${pokemon.name.toLowerCase()}`} key={index} className="pokemon-card">
                        <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                        <h2 className="pokemon-name">{pokemon.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PokeHome;
