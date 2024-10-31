import Link from 'next/link';
import { useEffect, useRef } from 'react';

const PokemonCards = ({ pokemonList }) => {
  const scrollContainerRef = useRef(null);
  const extendedPokemonList = [...pokemonList, ...pokemonList];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scrollCards = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollCards);
    };

    scrollCards();

    return () => {
      scrollAmount = 0;
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="scroll-container" ref={scrollContainerRef}>
        {extendedPokemonList.map((pokemon, index) => (
          <div key={`${pokemon.name}-${index}`} className="pokemon-card border rounded-lg p-4 text-center">
            <img src={pokemon.image} alt={pokemon.name} className="mx-auto mb-2" />
            <h3 className="font-bold">{pokemon.name}</h3>
            <p>Types: {pokemon.types.join(', ')}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight} lbs</p>
            <Link href={`/pokemon/${pokemon.name}`} className="text-blue-500 hover:underline">
              More Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCards;
