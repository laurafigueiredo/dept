import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// Reducers
import instagramReducer from './instagram';

export const reducer = combineReducers({
    instagram: instagramReducer,
});

export function initializeStore(initialState = {}) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware)),
    );
}
