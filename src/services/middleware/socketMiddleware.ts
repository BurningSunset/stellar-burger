import type { Middleware, MiddlewareAPI } from 'redux';

import { AppActions, AppDispatch } from '../../utils/types';
import { RootState } from '../..';
import { WS_CONNECTION_START } from '../actions/wsActions';

export const socketMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action: AppActions) => {
      const { dispatch } = store;
      // @ts-ignore
      const { type, payload } = action;
        console.log('if!')
      if (type === WS_CONNECTION_START) {
        socket = new WebSocket(wsUrl);
        console.log('socket trig')
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: 'WS_CONNECTION_SUCCESS'});
        };
        socket.onerror = event => {
          dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
        };
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: 'WS_GET_ORDERS', payload: data });
        };
                // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: 'WS_CONNECTION_CLOSED'});
        };

      }

      next(action);
    };
    }) as Middleware;
};