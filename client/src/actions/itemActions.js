import { itemTypes } from '../types/collectionTypes';
import { collectionTypes } from '../types/collectionTypes';
import { itemService } from '../services/itemService';
import { collectionService } from '../services/collectionService';

export const itemActions = {
    getItem,
    createItem,
    getCollections,
    createCollection,
    getUserItems,
    getAllItems
}

function getItem(itemId) {
    return dispatch => {
        itemService.getItem(itemId)
            .then(item => {
                dispatch(success(item));
            },
            error => {
                dispatch(failure(error.toString()))
            })
    }
    function success(item) { return { type: itemTypes.GETONE_SUCCESS, item } }
    function failure(error) { return { type: itemTypes.GETONE_FAILURE, error } }
}

function getUserItems(userId) {
    return dispatch => {
        itemService.getUserItems(userId)
            .then(items => {
                dispatch(success(items));
            },
            error => {
                dispatch(failure(error.toString()))
            })
    }
    function success(items) { return { type: itemTypes.GETALL_USER_SUCCESS, items } }
    function failure(error) { return { type: itemTypes.GETALL_USER_FAILURE, error } }
}

function getAllItems() {
    return dispatch => {
        itemService.getAllItems()
            .then(items => {
                dispatch(success(items));
            },
            error => {
                dispatch(failure(error.toString()))
            })
    }
    function success(items) { return { type: itemTypes.GETALL_ITEMS_SUCCESS, items } }
    function failure(error) { return { type: itemTypes.GETALL_ITEMS_FAILURE, error } }
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

function createCollection(userId, collection_name, categoryId) {
    return dispatch => {
        collectionService.createOne(userId, collection_name, categoryId)
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

function createItem(name, collectionId, description, condition, year, image) {
    return dispatch => {
        itemService.createItem(name, collectionId, description, condition, year, image)
            .then(items => {
                dispatch(success(items));
            },
            error => {
                dispatch(failure(error.toString()))
            })
    }
    function success(items) { return { type: itemTypes.CREATE_SUCCESS, items } }
    function failure(error) { return { type: itemTypes.CREATE_FAILURE, error } }
}
