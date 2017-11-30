export function wishList(state = [], action) {

    switch (action.type) {

        case 'ADD_PHOTO':
            console.log(state);
            return  [...state,action.photo];


        default:
            return state;
    }
}