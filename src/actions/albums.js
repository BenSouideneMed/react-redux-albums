/**
 * Action for getting Albums
 */
import { dataHasErrored, dataIsLoading } from './dataAPI';

export function albumsFetchDataSuccess(albums) {
    return {
        type: 'ALBUMS_FETCH_DATA_SUCCESS',
        albums
    };
}

export function albumsFetchData(url) {
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
            .then((albums) => dispatch(albumsFetchDataSuccess(albums)))
            .catch(() => dispatch(dataHasErrored(true)));
    };
}