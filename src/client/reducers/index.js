import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import usersReducer from './users-reducer';
import adminsReducer from './admins-reducer';

export default combineReducers({
    users: usersReducer,
    auth: authReducer, 
    admins: adminsReducer,
})