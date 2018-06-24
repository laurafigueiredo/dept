import sdk from 'shared/sdk';
import * as actionTypes from './actionTypes';

export const loadRecentPhotos = () => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_RECENT_PHOTOS_START });

    try {
        const response = await sdk.instagram.recentPhotos();

        dispatch({
            type: actionTypes.FETCH_RECENT_PHOTOS_SUCCESS,
            payload: { recentPhotos: response.recentPhotos },
        });
    } catch (error) {
        dispatch({ type: actionTypes.FETCH_RECENT_PHOTOS_FAIL, payload: { error } });
    }
};
