/**
    same actions for not replay and loading
    i will use the same two actions for getting Albums and Photos
**/

//action if no data recieved
export function dataHasErrored(bool) {
    return {
        type: 'DATA_HAS_ERRORED',
        hasErrored: bool
    };
}

//action if data is loading
export function dataIsLoading(bool) {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}
