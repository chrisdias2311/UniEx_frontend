// import { useNavigate } from "react-router-dom";

// export const getInvalidUser = () => {
//     if (!localStorage.getItem("admin")) {
//         navigate("/");
//     } else {
//         axios
//             .get("http://localhost:5000/api/user/unvalidusers")
//             .then((response) => {
//                 console.log(response.data);
//                 return(response.data)
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
// }