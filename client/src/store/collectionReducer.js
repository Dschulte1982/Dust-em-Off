import { collectionTypes } from '../types/collectionTypes';

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

export function collectionReducer(state = {}, action) {
    switch(action.type) {
        case collectionTypes.GETONE_REQUEST:
            return {};
        case collectionTypes.GETONE_SUCCESS:
            return {
                collection: action.collection
            };
        case collectionTypes.GETONE_FAILURE:
            return {};
        case collectionTypes.GETALL_REQUEST:
            return {};
        case collectionTypes.GETALL_SUCCESS:
            return {
                collections: action.collections
            };
        case collectionTypes.GETALL_FAILURE:
            return {};
        case collectionTypes.CREATE_SUCCESS:
            return {
                collections: action.collection
            };
        case collectionTypes.CREATE_FAILURE:
            return {}
        case collectionTypes.DELETE_REQUEST:
            return {};
        case collectionTypes.DELETE_SUCCESS:
            return {};
        case collectionTypes.DELETE_FAILURE:
            return {};
        default:
            return state;
    }
}
