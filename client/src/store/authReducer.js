const LOGIN = 'auth/login';
const LOGOUT = 'auth/logout';


export default function authReducer(state = {}, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case LOGIN:
          newState["id"] = action.id;
          newState["username"] = action.username;
          newState["email"] = action.email;
          newState["firstName"] = action.firstName;
          newState["lastName"] = action.lastName
            return newState;
        case LOGOUT:
            return {};
        default:
            return state;
    }
}

export const setUser = (id, username, email, firstName, lastName) => {
    return {
        type: LOGIN,
        id,
        username,
        email,
        firstName,
        lastName
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT
    }
}

export const login = (username, password) => {
    return async(dispatch) => {
        const res = await fetch("/api/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        if (res.ok) {
            let currentUser = await res.json();
            dispatch(setUser(currentUser.id, currentUser.username, currentUser.email, currentUser.firstName, currentUser.lastName))
        }
    }
}

export const logout = () => {
    return async function(dispatch) {
        let res = await fetch("/api/users/logout", {
            method: "DELETE",
        });
        if(res.ok) {
            dispatch(logoutUser());
            return "success";
        }
    }
}

export const signUp = (username, email, firstName, lastName, password)=> {
    return async (dispatch) => {
        const res = await fetch("/api/users/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, email, firstName, lastName, password})
        })
        res.data = await res.json();
        const { error } = res.data;

        if (res.data.error) {
            alert(error);
        }
        else if (res.ok && !res.data.error) {
            dispatch(setUser(res.data.id, res.data.username, res.data.email, res.data.firstName, res.data.lastName))
        }
    }
}
