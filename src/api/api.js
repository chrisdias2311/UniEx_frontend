// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ActionTypes } from "../redux/constants/actionTypes";
import { setInvalidUsers } from "../redux/actions/formActions";


// export const getInvalidUser = () => {
//     axios
//         .get("http://localhost:5000/api/user/unvalidusers")
//         .then((response) => {
//             console.log(response.data);
//             setInvalidUsers(response.data)
//             return (response.data)
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }