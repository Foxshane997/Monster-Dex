import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a Pokémon..."
        className="border rounded p-2"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
}
