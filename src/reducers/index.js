
import { combineReducers, createStore,applyMiddleware, compose } from 'redux';

import counterReducer from './CounterReducer'
import ApiRequestReducer from './ApiRequestReducer'
import thunk from 'redux-thunk';

const AppReducers = combineReducers({
    counterReducer,
    ApiRequestReducer
});

const rootReducer = (state, action) => {
    return AppReducers(state,action);
};

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;