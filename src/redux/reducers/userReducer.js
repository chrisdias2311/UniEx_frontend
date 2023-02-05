import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    user:[]
}



export const userReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SIGNUP_USER:
            console.log("Called from userreducer")
            return { ...state, user: payload };
        default:
            return state;    
    }
}

export const setUser = (state=initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_USER:
            console.log("Called from userreducer")
            return { ...state, user: payload };
        default:
            return state;    
    }
}



// export const userReducer = (state = {}, action) => {
//     switch(action.type){
//         case ActionTypes.ADD_USER:
//             const user = state.users.concat(action.pauload);
//             return{...state, user};
//     }
// }