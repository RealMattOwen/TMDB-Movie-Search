import React from 'react';
import { shallow } from 'enzyme';
import movies from '../fixtures/movies';
import { startRequestDetails } from '../../actions/movies';
import { App } from '../../components/App';

test('should render App correctly', () => {
    const wrapper = shallow(<App movies={movies} startRequestDetails={startRequestDetails} />);
    expect(wrapper).toMatchSnapshot();
});