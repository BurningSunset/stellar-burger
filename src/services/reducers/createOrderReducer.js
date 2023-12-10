import { ORDER_SUBMIT, ORDER_FAILURE, ORDER_SUCCESS } from "../actions/createOrder";

const initialState = {
    order: null,
    orderError: false,
    orderSubmit: false
}

export const createOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_SUBMIT: {
            return {
                ...state,
                orderSubmit: true
            }
        }
        case ORDER_SUCCESS: {
            console.log(action.order)
            return {
                ...state,
                orderSubmit: false,
                order: action.order
            }
        }
        case ORDER_FAILURE: {
            console.log(action.error)
            return {
                ...state,
                orderSubmit: false,
                orderError: action.error
            }
        } default: {
            return state
        }
    }
}