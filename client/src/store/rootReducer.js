import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { registrationReducer } from './registrationReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    register: registrationReducer,
});

export default rootReducer;
