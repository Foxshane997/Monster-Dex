"use client"; // Important for client-side components

import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard'; // Adjust the import path as needed
import SearchBar from './components/SearchBar';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      setPokemon(response.data.results);
      setFilteredPokemon(response.data.results); // Set initial filtered results
      console.log('Fetched Pokémon data:', response.data.results);
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    console.log('Search initiated with query:', query);
    if (!query) {
      setFilteredPokemon(pokemon); // If no query, show all Pokémon
    } else {
      const filtered = pokemon.filter(poke =>
        poke.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log('Filtered Pokémon:', filtered);
      setFilteredPokemon(filtered);
    }
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="pokemon-grid">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((poke, index) => (
            <PokemonCard key={index} pokemon={poke} index={index} />
          ))
        ) : (
          <p>No Pokémon found.</p> // Message if no Pokémon match the search
        )}
      </div>
    </div>
  );
}
