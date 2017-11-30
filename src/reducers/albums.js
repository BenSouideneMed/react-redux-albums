export function albums(state = [], action) {
    switch (action.type) {
        case 'ALBUMS_FETCH_DATA_SUCCESS':
            return action.albums;

        default:
            return state;
    }
}