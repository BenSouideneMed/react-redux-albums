export function photos(state = [], action) {
    switch (action.type) {
        case 'PHOTOS_FETCH_DATA_SUCCESS':
            return action.photos;

        default:
            return state;
    }
}