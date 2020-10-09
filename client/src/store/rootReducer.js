import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { registrationReducer } from './registrationReducer';
import { collectionReducer } from './collectionReducer';
import { categoryReducer } from './categoryReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    register: registrationReducer,
    collection: collectionReducer,
    category: categoryReducer
});

export default rootReducer;
