import React from 'react';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import { startRequestResults, startRequestDetails } from '../actions/movies';

export const SearchBar = props => (
    <AutoComplete
        dataSource={
            props.movies.results.map(result => {
                return {
                    title: result.title,
                    id: result.id
                };
            })
        }
        dataSourceConfig={{
            text: 'title',
            value: 'id'
        }}
        filter={(searchText, key) => true}
        fullWidth={true}
        hintStyle={{color: '#fff'}}
        hintText="Search Movie Title"
        inputStyle={{color: '#fff'}}
        onUpdateInput={props.startRequestResults}
        onNewRequest={(chosenRequest, index) => props.startRequestDetails(props.movies.results[index].id)}
        underlineFocusStyle={{borderBottomColor: 'rgba(1,207,115,1)'}}
    />
);

const mapStateToProps = (state, props) => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    startRequestResults: userInput => dispatch(startRequestResults(userInput)),
    startRequestDetails: movieId => dispatch(startRequestDetails(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);