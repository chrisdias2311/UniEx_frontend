import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    // validateUsers: [],
    myProducts: [],
    wishlist: [],
    allProducts: [],
    stationery:[],
    notes:[],
    enotes:[],
    previouspapers:[],
    buttons:{
        allProducts:true,
        stationery:false,
        notes:false,
        previouspapers:false,
        enotes:false
    }
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            console.log("Called from products reducer")
            return { ...state, allProducts: payload };
        case ActionTypes.SET_STATIONERY:
            console.log("Called from products reducer")
            return { ...state,  stationery: state.allProducts.filter((item) => item.category === "Stationery and Equipments"), };
        case ActionTypes.SET_NOTES:
            console.log("Called from products reducer")
            return { ...state,  notes: state.allProducts.filter((item) => item.category === "Notes & Study Material"), };
        case ActionTypes.SET_ENOTES:
            console.log("Called from products reducer")
            return { ...state,  enotes: state.allProducts.filter((item) => item.category === "E-notes and Study Material"), };
        case ActionTypes.SET_PREVIOUS_PAPERS:
            console.log("Called from products reducer")
            return { ...state,  previouspapers: state.allProducts.filter((item) => item.category === "Previous Papers"), };

            
        case ActionTypes.SET_ALL_PRODUCTS_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: {...state.buttons,allProducts:true, stationery: false, notes: false, previouspapers: false, enotes:false}};   
        case ActionTypes.SET_STATIONERY_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: {...state.buttons,allProducts:false, stationery: true, notes: false, previouspapers: false, enotes:false}};
        case ActionTypes.SET_NOTES_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: {...state.buttons,allProducts:false, stationery: false, notes: true, previouspapers: false, enotes:false}};
        case ActionTypes.SET_PREVIOUS_PAPERS_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: {...state.buttons,allProducts:false, stationery: false, notes: false, previouspapers: true, enotes:false}};
        case ActionTypes.SET_ENOTES_BUTTON:
            console.log("Called from products reducer")
            return { ...state, buttons: {...state.buttons,allProducts:false, stationery: false, notes: false, previouspapers: false, enotes:true}};
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