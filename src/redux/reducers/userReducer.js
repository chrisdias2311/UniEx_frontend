import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    validateUsers: [],
    // myProducts: [],
    // wishlist: [],
    // allProducts:[]
    
}



export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SIGNUP_USER:
            console.log("Called from userreducer")
            return { ...state, user: payload };
        case ActionTypes.SET_INVALID_USERS:
            console.log("Called from userreducer")
            return { ...state, validateUsers: payload }
        case ActionTypes.REGISTER_USER:
            console.log("Called from userreducer")
            return { ...state, validateUsers: state.validateUsers.filter((item) => item._id !== payload), }
        case ActionTypes.DECLINE_USER:
            console.log("Called from userreducer")
            return { ...state, validateUsers: state.validateUsers.filter((item) => item._id !== payload), }
        default:
            return state;
    }
}

// export const productReducer = (state = initialState, {type, payload}) => {
//     switch (type) {
//         case ActionTypes.SET_PRODUCTS:
//             console.log("Called from products reducer")
//             return { ...state, allProducts: payload };
//         default:
//             break;
//     }
// }

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