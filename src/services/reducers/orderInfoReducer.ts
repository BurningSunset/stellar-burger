import {GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILURE,
    TGetOrderActions} from '../actions/orderInfo'

import { TOrderResponse } from '../../utils/types'

type TGetOrderState = {
    order?: TOrderResponse,
    orderRequest: boolean,
    orderError: Error | boolean
}

export const initialState: TGetOrderState = {
    order: undefined,
    orderRequest: false,
    orderError: false,
}

export const getOrderInfoReducer = (state = initialState, action: TGetOrderActions): TGetOrderState => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                order: action.payload,
                orderRequest: false
            }
        }
        case GET_ORDER_FAILURE: {
            return {
                ...state,
                orderError: action.error,
                orderRequest: false
            }
        }
        default: {
            return state
        }
    }
}