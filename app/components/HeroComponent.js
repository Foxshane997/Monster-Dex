import { useEffect, useState } from "react";
import axios from "axios";

const HeroComponent = ({ pokemonName, onFadeOut }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (pokemonName) {
      handleFadeOut();
    }
  }, [pokemonName]);

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemonData(response.data);
      setIsFading(false);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  const handleFadeOut = () => {
    setIsFading(true);
    setTimeout(() => {
      fetchPokemonData();
    }, 300);
  };

  if (!pokemonData) return <div>Loading...</div>;

  const animatedSprite = pokemonData.sprites.versions["generation-v"]["black-white"].animated.front_shiny;

  return (
    <div className={`hero bg-white-100 p-6 flex flex-col items-center justify-center ${isFading ? 'fade-out' : ''}`}>
      <img
        src={animatedSprite}
        alt={`${pokemonName} shiny`}
        className="w-64 h-auto"
      />
    </div>
  );
};

export default HeroComponent;
