import { ORDER_SUBMIT, ORDER_FAILURE, ORDER_SUCCESS, CLEAR_ORDER } from "../actions/createOrder";

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
            return {
                ...state,
                orderSubmit: false,
                order: action.order
            }
        }
        case ORDER_FAILURE: {
            return {
                ...state,
                orderSubmit: false,
                orderError: action.error
            }
        }
        case CLEAR_ORDER: {
            return {
                ...state,
                order: action.null
            }
        }
        default: {
            return state
        }
    }
}