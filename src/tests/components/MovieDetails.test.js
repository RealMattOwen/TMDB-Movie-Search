import React from 'react';
import { shallow } from 'enzyme';
import movies from '../fixtures/movies';
import { MovieDetails } from '../../components/MovieDetails';

test('should render MovieDetails correctly with movie details', () => {
    const wrapper = shallow(<MovieDetails movies={movies} />);
    expect(wrapper).toMatchSnapshot();
});