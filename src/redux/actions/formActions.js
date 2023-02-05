import { ActionTypes } from "../constants/actionTypes"
import axios from "axios"


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


export const signUpUser = (user) => {
  return (dispatch) => {
    console.log("This is in action user", user);

    dispatch({ type: ActionTypes.SIGNUP_USER });
    axios
      .post("http://localhost:500/api/user/register", user)
      .then((res) => {
        dispatch({ type: "SIGNUP_USER_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_USER_FAIL", payload: err });
      });
  }
}





export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_START" });
    axios
      .get("https://example.com/api/data")
      .then((res) => {
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_DATA_ERROR", payload: err });
      });
  };
};


// export const setUser = userId => {
//   return {
//     type: 'SET_USER',
//     payload: userId
//   }
// }


export const addUser = userObj => {
  return (dispatch) => {
    axios.post('https://localhost:5000/auth/user/signp', { userObj })
      .then(response => {
        console.log(response);
        dispatch({
          type: ActionTypes.ADD_USER,
          payload: response.data
        })
          .catch(error => {
            console.log(error);
          })
      })
  }
}