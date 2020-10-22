import { itemTypes } from '../types/collectionTypes';
import { collectionTypes } from '../types/collectionTypes';
import { itemService } from '../services/itemService';
import { collectionService } from '../services/collectionService';

export const itemActions = {
    getItem,
    getCollections,
    createCollection
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

function getCollections(userId) {
    return dispatch => {
        collectionService.getAllCollections(userId)
            .then(collections => {
                dispatch(success(collections));
            },
            error => {
                dispatch(failure(error.toString()))
            })
    }
    function success(collections) { return { type: collectionTypes.GETALL_SUCCESS, collections } }
    function failure(error) { return { type: collectionTypes.GETALL_FAILURE, error } }
}

function createCollection(name, category) {
    return dispatch => {
        collectionService.createOne(name, category)
            .then(collection => {
                dispatch(success(collection));
            },
            error => {
                dispatch(failure(error.toString()))
            })
    }
    function success(collection) {return { type: collectionTypes.CREATE_SUCCESS, collection } }
    function failure(error) { return { type: collectionTypes.CREATE_FAILURE, error } }
}
