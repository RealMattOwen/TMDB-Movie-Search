import React from 'react';
import numeral from 'numeral';

export class MovieDetails extends React.Component {
    render() {
        return (
            <div className="movie-container">
                <div className="content-container">
                    <div className="movie-details">
                        <div className="section">
                            <img src={`https://image.tmdb.org/t/p/original/${this.props.movie.coverImage}?api_key=375d33fe34920fdf8cb02b7ce3600ba7`} />
                        </div>
                        <div className="section">
                            <h1 className="movie-title">{this.props.movie.title}</h1>
                            <h2 className="movie-description">{this.props.movie.tagLine}</h2>
                            <p>{this.props.movie.overview}</p>
                            <div className="details">
                                <div className="detail">
                                    <h3>Original Release:</h3>
                                    <h2>{this.props.movie.releaseDate}</h2>
                                </div>
                                <div className="detail">
                                    <h3>Running Time:</h3>
                                    <h2>{`${this.props.movie.runtime} mins`}</h2>
                                </div>
                                <div className="detail">
                                    <h3>Box Office:</h3>
                                    <h2>{numeral(this.props.movie.boxOffice).format('$0,0')}</h2>
                                </div>
                                <div className="detail">
                                    <h3>Vote Average:</h3>
                                    <h2>{`${this.props.movie.voteAverage} / 10`}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}