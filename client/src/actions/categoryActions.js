import { categoryTypes } from '../types/categoryTypes';
import { categoryService } from '../services/categoryService';

export const categoryActions = {
    getCategory
};

function getCategory(categoryId) {
    return dispatch => {
        dispatch(request({ categoryId }));

        categoryService.getCategory(categoryId)
            .then(category => {
                dispatch(success(category));
                // history.push(from);
            },
            error => {
                dispatch(failure(error.toString()));
                // dispatch(alertActions.error(error.toString()));
            });
    }
    function request(category) { return { type: categoryTypes.GETONE_REQUEST, category } }
    function success(category) { return { type: categoryTypes.GETONE_SUCCESS, category } }
    function failure(error) { return { type: categoryTypes.GETONE_FAILURE, error } }
}

// function logout() {
//     userService.logout();
//     return { type: userTypes.LOGOUT };
// }

// function register(user) {
//     return dispatch => {
//         dispatch(request(user));

//         userService.register(user)
//             .then(user => {
//                 dispatch(success());
//                 history.push('/home');
//                 // dispatch(alertActions.success('Registration successful'));
//             },
//             error => {
//                 dispatch(failure(error.toString()));
//                 // dispatch(alertActions.error(error.toString()));
//             });
//     }
//     function request(user) { return { type: userTypes.REGISTER_REQUEST, user } }
//     function success(user) { return { type: userTypes.REGISTER_SUCCESS, user} }
//     function failure(error) { return { type: userTypes.REGISTER_FAILURE, error } }
// }
