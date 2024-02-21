import { createOrderDummy } from "../../utils/consts";
import { ORDER_SUBMIT, ORDER_FAILURE, ORDER_SUCCESS/* , CLEAR_ORDER */ } from "../actions/createOrder";
import { createOrderReducer, initialState } from "./createOrderReducer";

describe('create order reducer', () => {
    it('should return initial state', () => {
        expect(createOrderReducer(undefined, {})).toEqual(initialState)
    })
})
it('should handle ORDER_SUBMIT', () => {
    const action = {
        type: ORDER_SUBMIT,
        orderSubmit: true
    }
    expect(createOrderReducer(initialState, action)).toEqual({
        ...initialState,
        orderSubmit: true
    })
})
it('should handle ORDER_FAILURE', () => {
    const action = {
        type: ORDER_FAILURE,
        error: true
    }
    expect(createOrderReducer(initialState, action)).toEqual({
        ...initialState,
        orderError: true
    })
})
it('should handle ORDER_SUCCESS', () => {
    const action = {
        type: ORDER_SUCCESS,
        order: createOrderDummy
    }
    expect(createOrderReducer(initialState, action)).toEqual({
        ...initialState,
        order: createOrderDummy
    })
})