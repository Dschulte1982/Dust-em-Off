import { authHeader } from '../helpers/authHeader';

export const userService = {
    login,
    logout,
    register
};

function login(username, password) {
    const requestParams = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, password })
    };

    return fetch("/api/users/login", requestParams)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    const requestParams = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ user })
    };

    return fetch("/api/user/register", requestParams)
        .then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.msg) || response.statusText;
            return Promise.reject(error)
        }
        return data;
    })
}
