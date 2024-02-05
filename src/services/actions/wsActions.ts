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
    readonly type: typeof WS_CONNECTION_SUCCESS;
    readonly payload?: null
}

export interface IWsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: any
}

export interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
    readonly payload?: null
}

export interface IWsGetOrders {
    readonly type: typeof WS_GET_ORDERS;
    readonly payload: TOrderResponse;
}

export const wsConnectionStartDispatch = (payload: string) => ({
    type: WS_CONNECTION_START,
    payload: payload
})
export const wsConnectionSuccessDispatch = () => ({
    type: WS_CONNECTION_SUCCESS,
})
export const wsConnectionErrorDispatch = (payload: string) => ({
    type: WS_CONNECTION_ERROR,
    payload: payload
})
export const wsConnectionClosedDispatch = () => ({
    type: WS_CONNECTION_CLOSED,
})
export const wsgetOrdersDispatch = (payload: TOrderResponse) => ({
    type: WS_GET_ORDERS,
    payload: payload
})

export type TWsActions =
    | IWsConnectionStart
    | IWsConnectionSuccess
    | IWsConnectionError
    | IWsConnectionClosed
    | IWsGetOrders

    export type TWSStoreActions = {
        wsInit: typeof  WS_CONNECTION_START,
        wsGetOrders: typeof  WS_GET_ORDERS,
        onOpen: typeof  WS_CONNECTION_SUCCESS,
        onClose: typeof WS_CONNECTION_CLOSED,
        onError: typeof  WS_CONNECTION_ERROR,
    };

    export const wsActions: TWSStoreActions = {
        wsInit:  WS_CONNECTION_START,
        wsGetOrders:  WS_GET_ORDERS,
        onOpen:  WS_CONNECTION_SUCCESS,
        onClose: WS_CONNECTION_CLOSED,
        onError:  WS_CONNECTION_ERROR,
    };