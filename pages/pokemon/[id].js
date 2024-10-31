import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const { id } = params;

  const pokemonResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const pokemonSpeciesResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  const pokemon = {
    name: pokemonResponse.data.name,
    height: pokemonResponse.data.height,
    weight: pokemonResponse.data.weight,
    types: pokemonResponse.data.types.map((typeInfo) => typeInfo.type.name),
    description: pokemonSpeciesResponse.data.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
    ).flavor_text,
    sprite: pokemonResponse.data.sprites.front_default,
  };

  console.log(pokemon);

  return {
    props: {
      pokemon,
    },
  };
}

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <Image src={pokemon.sprite} alt={pokemon.name} width={200} height={200} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.join(", ")}</p>
      <p>Description: {pokemon.description}</p>
      <Link href="/">Back to List</Link>
    </div>
  );
}
