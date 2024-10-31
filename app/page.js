"use client";

import Search from "./components/Search";
import PokemonCards from "./components/PokemonCards";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      console.log("Fetching Pokémon data...");
      try {
        const pokemonNames = [
          'pikachu', 'bulbasaur', 'charmander', 'squirtle',
          'eevee', 'jigglypuff', 'meowth', 'snorlax',
          'gengar', 'mewtwo', 'mew', 'raichu',
          'lapras', 'dragonite', 'articuno', 'zapdos'
        ];
        const promises = pokemonNames.map(async (name) => {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          const speciesResponse = await axios.get(response.data.species.url);

          return {
            name: response.data.name,
            types: response.data.types.map((typeInfo) => typeInfo.type.name),
            height: convertHeight(response.data.height),
            weight: convertWeight(response.data.weight),
            description: getFlavorText(
              speciesResponse.data.flavor_text_entries
            ),
            image: response.data.sprites.front_default,
          };
        });

        const pokemons = await Promise.all(promises);
        console.log("Pokémon data received:", pokemons);
        setPokemonList(pokemons);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
  }, []);

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
    const flavorTextEntry = entries.find(
      (entry) => entry.language.name === "en"
    );
    return flavorTextEntry
      ? flavorTextEntry.flavor_text.replace(/\n/g, " ")
      : "No description available.";
  };

  useEffect(() => {
    console.log("HomePage component rendered"); // Debugging line
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Monster Dex</h1>
      <Search />
      <h2 className="text-2xl font-bold mt-6">Pokémon Cards</h2>
      <PokemonCards pokemonList={pokemonList} />
    </div>
  );
}

export default HomePage;
