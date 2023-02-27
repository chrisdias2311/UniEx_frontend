import {combineReducers} from 'redux';
import { userReducer, setUser } from './userReducer';
import { productReducer } from './productReducer';
import { userDashboardReducer } from './userDashboardReducer';

const reducers = combineReducers({
    users: userReducer,
    products: productReducer,
    userdashboard: userDashboardReducer

});

export default reducers