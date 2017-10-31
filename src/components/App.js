import React from 'react';
import { Header } from './Header';
import { MovieDetails } from './MovieDetails';

class App extends React.Component {
    state = {
        movie: {
            id: 11,
            backgroundImage: '/c4zJK1mowcps3wvdrm31knxhur2.jpg',
            coverImage: '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
            title: 'Star Wars',
            tagLine: 'A long time ago in a galaxy far, far away...',
            overview: 'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
            releaseDate: '1977-05-25',
            runtime: 121,
            boxOffice: 775398007,
            voteAverage: 8.1
        }
    };
    updateMovie = (movie, cb) => {
        this.setState(movie, cb);
    };
    render() {
        document.getElementsByTagName('body')[0].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://image.tmdb.org/t/p/original/${this.state.movie.backgroundImage}?api_key=375d33fe34920fdf8cb02b7ce3600ba7')`;
        return (
            <div className="app">
                <Header update={this.updateMovie} />
                <MovieDetails movie={this.state.movie} />
            </div>
        );
    }
}

export default App;