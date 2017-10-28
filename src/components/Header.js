import React from 'react';
import axios from 'axios';

export class Header extends React.Component {
    state = {
        userInput: undefined,
        movies: undefined
    };
    movieNameRequest = e => {
        const userInput = e.target.value.trim();
        if (userInput.length > 1 && userInput !== this.state.userInput) {
            this.setState({
                userInput
            }, () => {
                axios.get(`https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=375d33fe34920fdf8cb02b7ce3600ba7`)
                    .then(res => {
                        if (res.data.results.length) {
                            const movies = res.data.results.slice(0, 5);
                            this.setState({
                                movies
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
        }
    };
    movieDetailsRequest = e => {
        console.log(e);
        if (e.key === 'Enter') {
            console.log('--------------------------');
            console.log(e);
            // let movieId;
            // const options = Array.from(document.getElementsByTagName('option'));
            // for (let i = 0; i < options.length; i++) {
            //     if (options[i].value === e.target.value) {
            //         movieId = options[i].id;
            //     }
            // }
            //
            // axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=375d33fe34920fdf8cb02b7ce3600ba7`)
            //     .then(res => {
            //         const {
            //             id,
            //             backdrop_path: backgroundImage,
            //             poster_path: coverImage,
            //             title,
            //             tagline: tagLine,
            //             overview,
            //             release_date: releaseDate,
            //             runtime,
            //             revenue: boxOffice,
            //             vote_average: voteAverage
            //         } = res.data;
            //         const movie = {
            //             id,
            //             backgroundImage,
            //             coverImage,
            //             title,
            //             tagLine,
            //             overview,
            //             releaseDate,
            //             runtime,
            //             boxOffice,
            //             voteAverage
            //         };
            //         this.props.update({
            //             movie
            //         });
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
        }
    };
    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <a className="header__logo" href="https://www.themoviedb.org/">
                            <img src="https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg" />
                        </a>
                        <div className="search">
                            <input list="movies" type="text" placeholder="Search Movie Title" className="text-input" onChange={e => this.movieNameRequest(e)} />
                            <datalist id="movies"  onKeyPress={e => this.movieDetailsRequest(e)}>
                                {this.state.movies ? this.state.movies.map(movie => {
                                    return <option key={movie.id} id={movie.id} value={movie.title} />
                                }) : ''}
                            </datalist>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
