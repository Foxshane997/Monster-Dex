import Link from 'next/link';

const PokemonCard = ({ pokemon }) => {
  const handleClick = () => {
    console.log(`Navigating to Pokémon ID: ${pokemon.id}`);
  };

  return (
    <div className="pokemon-card" onClick={handleClick}>
      <Link href={`/pokemon/${pokemon.id}`}>
        <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
        <img src={pokemon.sprite} alt={pokemon.name} width={100} height={100} />
      </Link>
    </div>
  );
};

export default PokemonCard;
