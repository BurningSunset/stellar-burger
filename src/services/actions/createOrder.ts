import { URL } from "../../utils/apiConst"
import { checkResponse } from "../../utils/checkResponse"
import { AppThunk, TIngredient, TOrder } from "../../utils/types"

export const ORDER_SUBMIT: 'ORDER_SUBMIT' = 'ORDER_SUBMIT'
export const ORDER_SUCCESS: 'ORDER_SUCCESS' = 'ORDER_SUCCESS'
export const ORDER_FAILURE: 'ORDER_FAILURE' = 'ORDER_FAILURE'

export const CLEAR_ORDER: 'CLEAR_ORDER' = 'CLEAR_ORDER'

export interface IOrderSubmitDispatch {
    readonly type: typeof ORDER_SUBMIT;
}

export interface IOrderSuccessDispatch {
    readonly type: typeof ORDER_SUCCESS
    readonly order: TOrder
}

export const orderSuccessDispatch = (response: TOrder): IOrderSuccessDispatch => ({
    type: ORDER_SUCCESS,
    order: response
})

export interface IOrderFailureDispatch {
    readonly type: typeof ORDER_FAILURE
    readonly error: Error
}

export const orderFailureDispatch = (error: Error): IOrderFailureDispatch => ({
    type: ORDER_FAILURE,
    error: error
})

// export interface IOrderClearDispatch {
//     readonly type: typeof CLEAR_ORDER
// } // необязательный функционал, который я реализую позже

export type TOrderActions = 
    | IOrderSubmitDispatch
    | IOrderSuccessDispatch
    | IOrderFailureDispatch
    // | IOrderClearDispatch

export const submitOrder = (ingredients: TIngredient[]): AppThunk => {
    return function(dispatch) {
        fetch(`${URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: `${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ ingredients: ingredients.map(item => item._id) })
        })
        .then(checkResponse)
        .then(response => {
            dispatch(orderSuccessDispatch(response))
        }).catch(error => {
            dispatch (orderFailureDispatch(error))
        })
    }
}

// export const clearOrder = () => {
//     return {
//         type: CLEAR_ORDER
//     }
// }
// ?