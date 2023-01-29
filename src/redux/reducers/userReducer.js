import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    user:[
        // {
        //     email: 'chrisdias2311@gmail.com',
        //     firstName: "Chris",
        //     lastName: "Dias",
        //     password: "123456",
        //     collegeId: "id.jpg"
        // },
    ]
}

export const userReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SIGNUP_USER:
            return { ...state, user: payload };
        default:
            return state;    
    }
}