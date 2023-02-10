import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    validateUsers:[]
}



export const userReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SIGNUP_USER:
            console.log("Called from userreducer")
            return { ...state, user: payload };
        case ActionTypes.SET_INVALID_USERS:
            console.log("Called from userreducer")
            return {...state, validateUsers: payload}
        default:
            return state;    
    }
}

// export const setUser = (state=initialState, {type, payload}) => {
//     switch(type){
//         case ActionTypes.SET_USER:
//             console.log("Called from userreducer")
//             return { ...state, user: payload };
//         default:
//             return state;    
//     }
// }

// export const setUnvalidUsers = (state=initialState, {type, payload}) => {
//     switch(type){

//     }
// }



// export const userReducer = (state = {}, action) => {
//     switch(action.type){
//         case ActionTypes.ADD_USER:
//             const user = state.users.concat(action.pauload);
//             return{...state, user};
//     }
// }