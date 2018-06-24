import get from 'lodash/get';
import * as fromReducer from './reducer';

export const getRecentPhotos = (state) => {
    const instagramState = get(state, 'instagram');

    return fromReducer.getRecentPhotos(instagramState);
};
