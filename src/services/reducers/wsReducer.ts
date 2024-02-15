import { TOrderResponse } from "../../utils/types";
import {    
            WS_CONNECTION_SUCCESS,
            WS_CONNECTION_ERROR,
            WS_CONNECTION_CLOSED,
            WS_GET_ORDERS,
            TWsActions
        } from "../actions/wsActions";

type TWsState = {
    wsConnected: boolean;
    wsError: Error | boolean;
    response: string | null;
}

export const initialState: TWsState = {
    wsConnected: false,
    wsError: false,
    response: null
}

export const wsReducer = (state = initialState, action: TWsActions): TWsState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
          return {
            ...state,
            wsConnected: true
          }
        case WS_CONNECTION_ERROR:
          return {
            ...state,
            wsError: action.payload
          }
        case WS_CONNECTION_CLOSED:
          return {
            ...state,
            wsConnected: false
          }
        case WS_GET_ORDERS:
          return {
            ...state,
            response: action.payload
          }
        default:
          return state;    
      }
    };