const moviesReducerDefaultState = {
    results: [],
    movie: {
        id: 0,
        backgroundImage: '/c4zJK1mowcps3wvdrm31knxhur2.jpg',
        coverImage: '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
        title: '',
        tagLine: '',
        overview: '',
        releaseDate: '',
        runtime: 0,
        boxOffice: 0,
        voteAverage: 0
    }
};

export default (state = moviesReducerDefaultState, action) => {
    switch (action.type) {
        case 'REQUEST_RESULTS':
            return {
                ...state,
                results: action.results
            };
        case 'REQUEST_DETAILS':
            return {
                ...state,
                movie: action.details
            };
        default:
            return state;
    }
};