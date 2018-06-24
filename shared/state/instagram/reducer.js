import get from 'lodash/get';
import serializeErr from 'serialize-error';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

export const initialState = {
    isLoading: false,
    recentPhotos: [],
    error: null,
};

export const isLoading = (state = initialState.isLoading, action = {}) => {
    switch (action.type) {
    case actionTypes.FETCH_RECENT_PHOTOS_START:
        return true;
    case actionTypes.FETCH_RECENT_PHOTOS_SUCCESS:
    case actionTypes.FETCH_RECENT_PHOTOS_FAIL:
        return false;
    default:
        return state;
    }
};

export const recentPhotos = (state = initialState.recentPhotos, action = {}) => {
    switch (action.type) {
    case actionTypes.FETCH_RECENT_PHOTOS_SUCCESS:
        return get(action, 'payload.recentPhotos', []);
    case actionTypes.FETCH_RECENT_PHOTOS_FAIL:
        return state;
    default:
        return state;
    }
};

export const error = (state = initialState.error, action = {}) => {
    switch (action.type) {
    case actionTypes.FETCH_RECENT_PHOTOS_FAIL:
        return serializeErr(get(action, 'payload.error'));
    case actionTypes.FETCH_RECENT_PHOTOS_SUCCESS:
        return initialState.error;
    default:
        return state;
    }
};

export const getLoadingStatus = (state = {}) => get(state, 'isLoading', initialState.isLoading);
export const getRecentPhotos = (state = {}) => get(state, 'recentPhotos', initialState.recentPhotos);
export const getError = (state = {}) => get(state, 'error', initialState.error);

const reducer = combineReducers({
    isLoading,
    recentPhotos,
    error,
});

export default reducer;
