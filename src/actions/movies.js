import axios from 'axios';

export const requestResults = results => ({
    type: 'REQUEST_RESULTS',
    results
});

export const startRequestResults = userInput => {
    return dispatch => {
        return axios.get(`https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=375d33fe34920fdf8cb02b7ce3600ba7`)
            .then(res => {
                if (res.data.results.length) {
                    const movies = res.data.results.slice(0, 5);
                    dispatch(requestResults(movies));
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const requestDetails = details => ({
    type: 'REQUEST_DETAILS',
    details
});

export const startRequestDetails = movieId => {
    return dispatch => {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=375d33fe34920fdf8cb02b7ce3600ba7`)
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

                dispatch(requestDetails(movie));
            })
            .catch(error => {
                console.log(error);
            });
    };
};