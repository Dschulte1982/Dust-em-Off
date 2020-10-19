import { itemTypes } from '../types/collectionTypes';
import { itemService } from '../services/itemService';

export const itemActions = {
    getItem
}

function getItem(itemId) {
    return dispatch => {
        itemService.getItem(itemId)
            .then(item => {
                dispatch(success(item));
                console.log(item)
            },
            error => {
                dispatch(failure(error.toString()))
            })
    }
    function success(item) { return { type: itemTypes.GETONE_SUCCESS, item } }
    function failure(error) { return { type: itemTypes.GETONE_FAILURE, error } }
}
