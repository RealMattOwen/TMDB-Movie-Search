import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startRequestResults,
    requestResults,
    startRequestDetails,
    requestDetails
} from '../../actions/movies';

const createMockStore = configureMockStore([thunk]);

test('should setup request results action object with provided values', () => {
    const results = [{result: 'result 1'}, {result: 'result 2'}];
    const action = requestResults(results);
    expect(action).toEqual({
        type: 'REQUEST_RESULTS',
        results
    });
});

test('should request results action object with data from api', () => {
    const store = createMockStore();
    store.dispatch(startRequestResults('Star Wars')).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REQUEST_RESULTS',
            results: expect.any(Array)
        });
    });
});

test('should setup request details action object with provided values', () => {
    const details = {
        id: 11
    };
    const action = requestDetails(details);
    expect(action).toEqual({
        type: 'REQUEST_DETAILS',
        details
    });
});

test('should request movie action object with data from api', () => {
    const store = createMockStore();
    store.dispatch(startRequestDetails(11)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REQUEST_DETAILS',
            details: expect.any(Object)
        });
    });
});