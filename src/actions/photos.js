/**
 * Action for getting Albums
 */

import { dataHasErrored, dataIsLoading } from './dataAPI';

export function photosFetchDataSuccess(photos) {
    return {
        type: 'PHOTOS_FETCH_DATA_SUCCESS',
        photos
    };
}

export function photosFetchData(url) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(dataIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((photos) => dispatch(photosFetchDataSuccess(photos)))
            .catch(() => dispatch(dataHasErrored(true)));
    };
}