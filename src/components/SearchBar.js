import React from 'react';

const SearchBar = props => (
    <input
        type="text"
        placeholder="Search Movie Title"
        className="text-input"
        onChange={e => props.movieNameRequest(e)}
        onKeyDown={e => props.suggestionChange(e)}
        value={props.selectedSuggestion ? props.selectedSuggestion : props.userInput}
    />
);

export default SearchBar;