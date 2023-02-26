import { ActionTypes } from "../constants/actionTypes"
import * as api from '../../api/api'


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

export const registerUser = (uid) => {
  console.log("Register users called from formActons: ");
  return{
    type: ActionTypes.REGISTER_USER,
    payload:uid
  }
}

export const declineUser = (uid) => {
  console.log("Decline users called from formActons: ");
  return{
    type: ActionTypes.DECLINE_USER,
    payload:uid
  }
}

export const setProducts = (products) => {
  return{
    type: ActionTypes.SET_PRODUCTS,
    payload:products
  }
}

export const setStationery = (products) => {
  return{
    type: ActionTypes.SET_STATIONERY,
    payload:products
  }
}

export const setNotes = (products) => {
  return{
    type: ActionTypes.SET_NOTES,
    payload:products
  }
}

export const setPreviousPapers = (products) => {
  return{
    type: ActionTypes.SET_PREVIOUS_PAPERS,
    payload:products
  }
}

export const setEnotes = (products) => {
  return{
    type: ActionTypes.SET_ENOTES,
    payload:products
  }
}

export const setAllProductsButton = () => {
  return{
    type: ActionTypes.SET_ALL_PRODUCTS_BUTTON
  }
}
export const setStationeryButton = () => {
  return{
    type: ActionTypes.SET_STATIONERY_BUTTON
  }
}
export const setNotesButton = () => {
  return{
    type: ActionTypes.SET_NOTES_BUTTON
  }
}
export const setEnotesButton = () => {
  return{
    type: ActionTypes.SET_ENOTES_BUTTON
  }
}
export const setPreviousPapersButton = () => {
  return{
    type: ActionTypes.SET_PREVIOUS_PAPERS_BUTTON
  }
}



export const searchAllProducts = (search) => {
  return{
    type: ActionTypes.SEARCH_ALL_PRODUCTS,
    payload:search
  }
}
export const searchStationery = (search) => {
  return{
    type: ActionTypes.SEARCH_STATIONERY,
    payload:search
  }
}
export const searchNotes = (search) => {
  return{
    type: ActionTypes.SEARCH_NOTES,
    payload:search
  }
}
export const searchPreviousPapers = (search) => {
  return{
    type: ActionTypes.SEARCH_PREVIOUS_PAPERS,
    payload:search
  }
}
export const searchEnotes = (search) => {
  return{
    type: ActionTypes.SEARCH_ENOTES,
    payload:search
  }
}




// export const setInvalidUsers = async() => {
//   console.log("Set invalid users called from formActons: ");
//   // const res = await api.getInvalidUser();
//   const res = 'Empty'
//   console.log("The result:")
//   return{
//     type: ActionTypes.SET_INVALID_USERS,
//     payload:res
//   }
// }





