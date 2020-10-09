import { categoryTypes } from '../types/categoryTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function categoryReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case categoryTypes.GETONE_REQUEST:
            // newState["category"] = action.category;
            return {
                searching: true,
                category: action.category
            };
        case categoryTypes.GETONE_SUCCESS:
            // newState["category"] = action.category
            return {
                found: true,
                category: action.category
            };
        case categoryTypes.GETONE_FAILURE:
            return {};
        case categoryTypes.GETALL_REQUEST:
            return {
                searching: true,
                categories: action.categories
            };
        case categoryTypes.GETALL_SUCCESS:
            return {
                found: true,
                categories: action.categoreis
            };
        case categoryTypes.GETALL_FAILURE:
            return {};
        default:
            return state;
    }
}
