import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    availableproducts: [],
    bookedproducts: [],
    transactions: []
}

export const userDashboardReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_AVAILABLE_PRODUCTS:
            console.log("Called from ud reducer")
            return { ...state, availableproducts: payload };
        case ActionTypes.SET_BOOKED_PRODUCTS:
            console.log("Called from ud reducer")
            return { ...state, bookedproducts: payload };
        case ActionTypes.SET_TRANSACTION_HISTORY:
            console.log("Called from ud reducer")
            return { ...state, transactions: payload };
        default:
            return state;
    }
}