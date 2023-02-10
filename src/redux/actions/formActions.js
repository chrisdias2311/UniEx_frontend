import { ActionTypes } from "../constants/actionTypes"


// export const signUpUser = (user) => {
//     console.log("Called from actions")
//     return{
//         type:ActionTypes.SIGNUP_USER,
//         payload: user,
//     }
// }
export const setUser = (user) => {
  console.log("Set user called")
    return{
        type:ActionTypes.SET_USER,
        payload:user
    }
}

export const setInvalidUsers = (users) => {
  console.log("Set invalid users called from formActons: ");
  return{
    type: ActionTypes.SET_INVALID_USERS,
    payload:users
  }
}





