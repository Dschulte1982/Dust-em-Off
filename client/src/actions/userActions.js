import { userTypes } from '../types/userTypes';
import { userService } from '../services/userService';
import { history } from '../helpers/history';

export const userActions = {
    login,
    logout,
};

function login(username, password, from) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(user => {
                dispatch(success(user));
                history.push(from);
            },
            error => {
                dispatch(failure(error.toString()));
                // dispatch(alertActions.error(error.toString()));
            });
    }
    function request(user) { return { type: userTypes.LOGIN_REQUEST, user } }
    function success(user) { return { type: userTypes.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userTypes.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userTypes.LOGOUT };
}
