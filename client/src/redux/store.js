import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {getDataReducers} from './reducers/contactReducers';

const middleware = [thunk];

const reducers = combineReducers({
    contacts : getDataReducers
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;