import { combineReducers } from 'redux';
import { albums } from './albums';
import { photos } from './photos';
import { dataHasErrored, dataIsLoading } from './dataAPI';
import { wishList } from './addToWishList';

export default combineReducers({
    albums,
    photos,
    dataHasErrored,
    dataIsLoading,
    wishList
});