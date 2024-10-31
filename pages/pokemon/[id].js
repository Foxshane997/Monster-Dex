export async function getServerSideProps(context) {
  console.log('Context params:', context.params); // Log full context.params

  const { id } = context.params; // Get the ID from the URL parameters

  // Log the ID for debugging
  console.log(`Fetching data for Pokémon ID: ${id}`);

  if (!id) {
    return {
      notFound: true, // Return a 404 page if ID is not present
    };
  }

  try {
    const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonSpeciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

    return {
      props: {
        pokemonData: pokemonResponse.data,
        speciesData: pokemonSpeciesResponse.data,
      },
    };
  } catch (error) {
    console.error(`Error fetching Pokémon data: ${error.message}`);
    return {
      notFound: true, // Return a 404 page on error
    };
  }
}
