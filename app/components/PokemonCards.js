// components/PokemonCards.js
import Link from 'next/link';

const PokemonCards = ({ pokemonList }) => {
  // Create a duplicate list for continuous scrolling
  const extendedPokemonList = [...pokemonList, ...pokemonList];

  return (
    <div className="overflow-hidden">
      <div className="scroll-container">
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
