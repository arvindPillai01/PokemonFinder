import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Call the onSearch function to pass the search query to the parent component
    onSearch(query);
  };

  return (
    <input
      type="text"
      placeholder="Catch Pokemon"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;