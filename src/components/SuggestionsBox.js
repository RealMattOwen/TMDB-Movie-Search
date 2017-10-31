import React from 'react';

const SuggestionsBox = props => (
    <ul className="suggestions-box">
        {props.userInput ? <li className="suggestion active">{props.userInput}</li> : <li className="suggestion active">''</li>}
        {props.movies ? props.movies.map(movie => {
            return <li
                className="suggestion"
                key={movie.id}
                id={movie.id}
                onClick={e => props.movieDetailsRequest(e.target.id)}
            >{movie.title}</li>
        }) : undefined}
    </ul>
);

export default SuggestionsBox;