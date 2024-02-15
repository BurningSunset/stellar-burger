import {    
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS
} from "../actions/wsActions";
import { wsReducer, initialState } from "./wsReducer";

describe('ws reducer', () => {
    it('should return initial state', () => {
        expect(wsReducer(undefined, {})).toEqual(initialState)
    })
})

it('should handle WS_CONNECTION_SUCCESS', () => {
    const action = { 
        type: WS_CONNECTION_SUCCESS,
        wsConnected: true
    }
    expect(wsReducer(initialState, action)).toEqual({
        ...initialState,
        wsConnected: true,
    })
})

it('should handle WS_CONNECTION_ERROR', () => {
    const action = { 
        type: WS_CONNECTION_ERROR,
        payload: true
    }
    expect(wsReducer(initialState, action)).toEqual({
        ...initialState,
        wsError: true
    })
})

it('should handle WS_CONNECTION_CLOSED', () => {
    const action = { 
        type: WS_CONNECTION_CLOSED,
        wsConnected: false
    }
    expect(wsReducer(initialState, action)).toEqual({
        ...initialState,
        wsConnected: false
    })
})

it('should handle WS_GET_ORDERS', () => {
    const action = { 
        type: WS_GET_ORDERS,
        payload: '{a lot of different stuff}'
    }
    expect(wsReducer(initialState, action)).toEqual({
        ...initialState,
        response: '{a lot of different stuff}'
    })
})