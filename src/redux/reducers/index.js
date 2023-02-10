import {combineReducers} from 'redux';
import { userReducer, setUser } from './userReducer';

const reducers = combineReducers({
    invalidUsers: userReducer
});

export default reducers