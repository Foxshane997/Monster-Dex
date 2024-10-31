import { useEffect, useState } from "react";
import axios from "axios";

const HeroComponent = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  if (!pokemonData) return <div>Loading...</div>;
  const animatedSprite = pokemonData.sprites.versions["generation-v"]["black-white"].animated.front_shiny;

  return (
    <div className="hero bg-white-100 p-6 flex flex-col items-center justify-center">
      <img
        src={animatedSprite}
        alt={`${pokemonName} shiny`}
        className="w-64 h-auto"
      />
    </div>
  );
};

export default HeroComponent;
