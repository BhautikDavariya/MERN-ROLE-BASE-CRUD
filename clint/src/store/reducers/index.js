import { combineReducers } from 'redux';
import ragisterReducer from "./ragisterReducer";
import loginReducer from './loginReducer';
import userReducer from './userReducer';

export default combineReducers({
    ragisterUser: ragisterReducer,
    loginUser: loginReducer,
    users: userReducer
})