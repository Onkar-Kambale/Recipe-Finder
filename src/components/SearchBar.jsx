import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-l w-64"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
