import { ORDER_SUBMIT, ORDER_FAILURE, ORDER_SUCCESS/* , CLEAR_ORDER */ } from "../actions/createOrder";
import { TOrder } from "../../utils/types";
import { TOrderActions } from "../actions/createOrder";

type TOrderState = {
    order: TOrder | null
    orderError: boolean | Error
    orderSubmit: boolean
}

export const initialState: TOrderState = {
    order: null,
    orderError: false,
    orderSubmit: false
}

export const createOrderReducer = (state = initialState, action: TOrderActions): TOrderState => {
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
        // case CLEAR_ORDER: {
        //     return {
        //         ...state,
        //         order: action.null
        //     }
        // } // необязательный функционал, который я реализую позже
        default: {
            return state
        }
    }
}