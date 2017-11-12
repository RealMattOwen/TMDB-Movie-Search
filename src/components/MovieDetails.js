import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const MovieDetails = props => (
    <div className="movie-container">
        <div className="content-container">
            <div className="movie-details">
                <div className="section">
                    <img src={`https://image.tmdb.org/t/p/original/${props.movies.movie.coverImage}?api_key=375d33fe34920fdf8cb02b7ce3600ba7`} />
                </div>
                <div className="section">
                    <h1 className="movie-title">{props.movies.movie.title}</h1>
                    <h2 className="movie-description">{props.movies.movie.tagLine}</h2>
                    <p>{props.movies.movie.overview}</p>
                    <div className="details">
                        <div className="detail">
                            <h3>Original Release:</h3>
                            <h2>{props.movies.movie.releaseDate}</h2>
                        </div>
                        <div className="detail">
                            <h3>Running Time:</h3>
                            <h2>{`${props.movies.movie.runtime} mins`}</h2>
                        </div>
                        <div className="detail">
                            <h3>Box Office:</h3>
                            <h2>{numeral(props.movies.movie.boxOffice).format('$0,0')}</h2>
                        </div>
                        <div className="detail">
                            <h3>Vote Average:</h3>
                            <h2>{`${props.movies.movie.voteAverage} / 10`}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state, props) => ({
    movies: state.movies
});

export default connect(mapStateToProps, undefined)(MovieDetails);