import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SuggestionsBox from './SuggestionsBox';

export class Header extends React.Component {
    state = {
        userInput: '',
        movies: undefined,
        selectedSuggestion: 0,
        selectedSuggestionText: undefined
    };
    movieNameRequest = e => {
        const userInput = e.target.value.trim();
        if (document.getElementsByClassName('suggestion')[0].classList.contains('active')) {
            this.setState({
                userInput
            }, () => {
                if (userInput.length > 1) {
                    axios.get(`https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=375d33fe34920fdf8cb02b7ce3600ba7`)
                        .then(res => {
                            if (res.data.results.length) {
                                document.getElementsByClassName('suggestions-box')[0].classList.add('show');
                                const movies = res.data.results.slice(0, 5);
                                this.setState({
                                    movies
                                });
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            });
        }
    };
    movieDetailsRequest = movieId => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=375d33fe34920fdf8cb02b7ce3600ba7`)
                .then(res => {
                    const {
                        id,
                        backdrop_path: backgroundImage,
                        poster_path: coverImage,
                        title,
                        tagline: tagLine,
                        overview,
                        release_date: releaseDate,
                        runtime,
                        revenue: boxOffice,
                        vote_average: voteAverage
                    } = res.data;
                    const movie = {
                        id,
                        backgroundImage,
                        coverImage,
                        title,
                        tagLine,
                        overview,
                        releaseDate,
                        runtime,
                        boxOffice,
                        voteAverage
                    };
                    this.state.userInput = movie.title;
                    this.props.update({
                        movie
                    }, () => {
                        document.getElementsByClassName('suggestions-box')[0].classList.remove('show');
                    });
                })
                .catch(error => {
                    console.log(error);
                });
    };
    suggestionChange = e => {
        const userInput = e.target.value.trim();

        if (userInput.length > 1) {
            switch (e.key) {
                case 'ArrowDown':
                    if (this.state.selectedSuggestion > -1) document.getElementsByClassName('suggestion')[this.state.selectedSuggestion].classList.remove('active');
                    this.setState(prevState => ({
                        selectedSuggestion: prevState.selectedSuggestion < document.getElementsByClassName('suggestion').length - 1 ? prevState.selectedSuggestion + 1 : 0
                    }), () => {
                        const selectedSuggestion = document.getElementsByClassName('suggestion')[this.state.selectedSuggestion];
                        selectedSuggestion.classList.add('active');
                        this.setState({
                            selectedSuggestionText: selectedSuggestion.innerText
                        });
                    });
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (this.state.selectedSuggestion > -1) document.getElementsByClassName('suggestion')[this.state.selectedSuggestion].classList.remove('active');
                    this.setState(prevState => ({
                        selectedSuggestion: prevState.selectedSuggestion > 0 ? prevState.selectedSuggestion - 1 : document.getElementsByClassName('suggestion').length - 1
                    }), () => {
                        const selectedSuggestion = document.getElementsByClassName('suggestion')[this.state.selectedSuggestion];
                        selectedSuggestion.classList.add('active');
                        this.setState({
                            selectedSuggestionText: selectedSuggestion.innerText
                        });
                    });
                    break;
                case 'Enter':
                    if (this.state.selectedSuggestion) {
                        this.movieDetailsRequest(document.getElementsByClassName('suggestion')[this.state.selectedSuggestion].id);
                        this.setState({
                            selectedSuggestion: 0,
                            selectedSuggestionText: undefined
                        }, () => {
                            Array.from(document.getElementsByClassName('suggestion')).forEach(suggestion => {
                                suggestion.classList.remove('active');
                            });
                            document.getElementsByClassName('suggestion')[0].classList.add('active');
                        });
                    }
                    break;
                case 'Backspace':
                    if (document.getElementsByClassName('suggestion')[0].classList.contains('active')) {
                        this.setState({
                            selectedSuggestionText: undefined
                        });
                    }
                    break;
                default:
                    break;
            }
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
                            <SearchBar
                                userInput={this.state.userInput}
                                selectedSuggestion={this.state.selectedSuggestionText}
                                movieNameRequest={this.movieNameRequest}
                                suggestionChange={this.suggestionChange}
                            />
                            <SuggestionsBox
                                userInput={this.state.userInput}
                                movies={this.state.movies}
                                movieDetailsRequest={this.movieDetailsRequest}
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
