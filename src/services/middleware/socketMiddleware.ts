import type { Middleware, MiddlewareAPI } from 'redux';

import { AppActions, AppDispatch } from '../../utils/types';
import { RootState } from '../..';
import { TWSStoreActions, TWsActions } from '../actions/wsActions';

export const socketMiddleware = (wsUrl: string, wsActions: TWSStoreActions): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action: TWsActions) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsGetOrders, onOpen, onClose, onError } = wsActions;
      if (type === wsInit) {
        if (payload !== '/') {
            socket = new WebSocket(`${wsUrl}${payload}`);
        } else {
            socket = new WebSocket(`${wsUrl}?token=${localStorage.getItem('accessToken')?.split('Bearer ').join('')}`);
        }
      }
      if (socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen});
        };
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: wsGetOrders, payload: data });
        };
        // код из примеров не работает...
        // socket.onclose = () => {
        //   dispatch({ type: onClose});
        // };
        if (type === onClose && socket) {
            socket.close()
            socket = null
            dispatch({ type: onClose});
        }
      }

      next(action);
    };
    }) as Middleware;
};