import {combineReducers} from 'redux';
import { userReducer, setUser } from './userReducer';

const reducers = combineReducers({
    loggedIn: setUser
});

export default reducers