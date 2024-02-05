import { checkResponse } from "../../utils/checkResponse"
import { AppThunk, TOrderItem, TOrderResponse } from "../../utils/types"
import { URL } from "../../utils/apiConst"

export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST'
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS'
export const GET_ORDER_FAILURE: 'GET_ORDER_FAILURE' = 'GET_ORDER_FAILURE'

export interface IGetOrderRequest {
    readonly type: typeof GET_ORDER_REQUEST
}
export interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS
    readonly payload: TOrderResponse
}
export interface IGetOrderFailure {
    readonly type: typeof GET_ORDER_FAILURE
    readonly error: Error
}

export type TGetOrderActions = 
    | IGetOrderRequest
    | IGetOrderSuccess
    | IGetOrderFailure

export const getOrderRequest = (): IGetOrderRequest => ({
    type: GET_ORDER_REQUEST
})
export const getOrderSuccess = (order: TOrderResponse): IGetOrderSuccess => ({
    type: GET_ORDER_SUCCESS,
    payload: order
})
export const getOrderFailure = (error: Error): IGetOrderFailure => ({
    type: GET_ORDER_FAILURE,
    error: error
})

export const getOrder = (number: number): AppThunk => {
    return function(dispatch) {
        dispatch(getOrderRequest())
        fetch(`${URL}/orders/${number}`, {
            method: 'GET'
        })
        .then(checkResponse)
        .then((response: TOrderResponse) => {
            dispatch(getOrderSuccess(response))
        }
        ).catch((error: Error) => {
            dispatch (getOrderFailure(error))
        })
    }
}