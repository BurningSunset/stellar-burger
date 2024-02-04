import { TOrderResponse } from "../../utils/types";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS'; 
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';

export interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string
}

export interface IWsConnectionSuccess {
    type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: any
}

export interface IWsConnectionClosed {
    type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetOrders {
    readonly type: typeof WS_GET_ORDERS;
    readonly payload: object;
}

export const wsConnectionStartDispatch = (payload?: string) => ({
    type: WS_CONNECTION_START,
    payload: payload
})
export const wsConnectionSuccessDispatch = () => ({
    type: WS_CONNECTION_SUCCESS
})
export const wsConnectionErrorDispatch = (payload?: string) => ({
    type: WS_CONNECTION_ERROR,
    payload: payload
})
export const wsConnectionClosedDispatch = () => ({
    type: WS_CONNECTION_CLOSED
})
export const wsgetOrdersDispatch = (payload?: TOrderResponse[]) => ({
    type: WS_GET_ORDERS,
    payload: payload
})

export type TWsActions =
    | IWsConnectionStart
    | IWsConnectionSuccess
    | IWsConnectionError
    | IWsConnectionClosed
    | IWsGetOrders

