"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data.pokemonName.toLowerCase()}`);
      const speciesResponse = await axios.get(response.data.species.url);

      const filteredData = {
        name: response.data.name,
        types: response.data.types.map(typeInfo => typeInfo.type.name),
        height: convertHeight(response.data.height),
        weight: convertWeight(response.data.weight),
        description: getFlavorText(speciesResponse.data.flavor_text_entries),
        image: response.data.sprites.other['official-artwork'].front_default
      };

      setPokemonData(filteredData);
      onSearch(data.pokemonName.toLowerCase()); 
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      alert("Pokémon not found. Please try again.");
      setPokemonData(null);
    }
  };

  const convertHeight = (decimetres) => {
    const totalInches = decimetres * 3.93701;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet} ft ${inches} in`;
  };

  const convertWeight = (hectograms) => {
    return (hectograms * 0.220462).toFixed(2);
  };

  const getFlavorText = (entries) => {
    const flavorTextEntry = entries.find(entry => entry.language.name === 'en');
    return flavorTextEntry ? flavorTextEntry.flavor_text.replace(/\n/g, ' ') : "No description available.";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <input
        {...register('pokemonName')}
        placeholder="Search Pokémon"
        className="w-full max-w-md p-4 border border-gray-300 rounded-md mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
      {pokemonData && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold mb-2">{pokemonData.name}</h2>
          <img src={pokemonData.image} alt={pokemonData.name} className="w-full h-auto max-h-96 rounded-md" />
          <p className="text-gray-700">Type: {pokemonData.types.join(', ')}</p>
          <p className="text-gray-700">Height: {pokemonData.height}</p>
          <p className="text-gray-700">Weight: {pokemonData.weight} lbs</p>
          <p className="text-gray-700">Description: {pokemonData.description}</p>
        </div>
      )}
    </form>
  );
};

export default Search;
