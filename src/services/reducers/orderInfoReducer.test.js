import { getOrderInfoReducer, initialState } from "./orderInfoReducer";
import { GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILURE} from '../actions/orderInfo'

import { dummyOrderResponse } from "../../utils/consts";

describe('order info reducer', () => {
    it('should return initial state', () => {
        expect(getOrderInfoReducer(undefined, {})).toEqual(initialState)
    })
})

it('should handle GET_ORDER_REQUEST', () => {
    const action = {
        type: GET_ORDER_REQUEST,
        orderRequest: true
    }
    expect(getOrderInfoReducer(initialState, action)).toEqual({
        ...initialState,
        orderRequest: true
    })
})

it('should handle GET_ORDER_SUCCESS', () => {
    const action = {
        type: GET_ORDER_SUCCESS,
        payload: dummyOrderResponse
    }
    expect(getOrderInfoReducer(initialState, action)).toEqual({
        ...initialState,
        orderRequest: false,
        order: dummyOrderResponse
    })
})

it('should handle GET_ORDER_FAILURE', () => {
    const action = {
        type: GET_ORDER_FAILURE,
        error: true
    }
    expect(getOrderInfoReducer(initialState, action)).toEqual({
        ...initialState,
        orderRequest: false,
        orderError: true
    })
})