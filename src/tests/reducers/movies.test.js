import moviesReducer from '../../reducers/movies';

test('should set default state', () => {
    const defaultState = {
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
    const state = moviesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(defaultState);
});

test('should request movie results', () => {
    const results = [{result: 'result 1'}, {result: 'result 2'}, {result: 'result 3'}];
    const action = {
        type: 'REQUEST_RESULTS',
        results
    };
    const state = moviesReducer(results, action);
    expect(state.results).toEqual(results);
});

test('should request movie details', () => {
    const movie = {
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
    };
    const action = {
        type: 'REQUEST_DETAILS',
        movie
    };
    const state = moviesReducer(movie, action);
    expect(state).toEqual(movie);
});