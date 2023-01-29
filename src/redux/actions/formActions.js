import { ActionTypes } from "../constants/actionTypes"

export const signUpUser = (user) => {
    return{
        type:ActionTypes.SIGNUP_USER,
        payload: user,
    }
}