import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MovieDetails from './MovieDetails';
import { startRequestDetails } from '../actions/movies';

export class App extends React.Component {
    componentDidMount() {
        this.props.startRequestDetails(11);
    }
    render() {
        return (
            <div className="app" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://image.tmdb.org/t/p/original${this.props.movies.movie.backgroundImage}')`}}>
                <Header />
                <MovieDetails />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    startRequestDetails: userInput => dispatch(startRequestDetails(userInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);