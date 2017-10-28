import React from 'react';

const SearchBar = () => (
    <input
        list="movies"
        type="text"
        placeholder="Search Movie Title"
        className="text-input"
        onChange={e => this.movieNameRequest(e)}
        onKeyPress={e => this.movieDetailsRequest(e)}
    />
);

export default SearchBar;