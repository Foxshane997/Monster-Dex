import Link from 'next/link';

export default function PokemonCard({ pokemon, index }) {
  return (
    <div className="pokemon-card">
      <Link href={`/pokemon/${index + 1}`}>
        <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      </Link>
    </div>
  );
}
