import { userTypes } from '../types/userTypes';
import { userService } from '../services/userService';
import { history } from '../helpers/history';

export const userActions = {
    login,
    logout,
    register
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

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(user => {
                dispatch(success());
                history.push('/home');
                // dispatch(alertActions.success('Registration successful'));
            },
            error => {
                dispatch(failure(error.toString()));
                // dispatch(alertActions.error(error.toString()));
            });
    }
    function request(user) { return { type: userTypes.REGISTER_REQUEST, user } }
    function success(user) { return { type: userTypes.REGISTER_SUCCESS, user} }
    function failure(error) { return { type: userTypes.REGISTER_FAILURE, error } }
}
