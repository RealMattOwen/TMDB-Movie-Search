import React from 'react';
import { shallow } from 'enzyme';
import movies from '../fixtures/movies';
import { startRequestResults, startRequestDetails } from '../../actions/movies';
import { SearchBar } from '../../components/SearchBar';

test('should render SearchBar correctly', () => {
    const wrapper = shallow(<SearchBar startRequestDetails={startRequestDetails} startRequestResults={startRequestResults} movies={movies} />);
    expect(wrapper).toMatchSnapshot();
});