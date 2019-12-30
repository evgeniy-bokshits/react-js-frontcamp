import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/root-reducer';

const initialState = {
    films : [],
    total : 0,
    loading : true
};

const middlewares = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;