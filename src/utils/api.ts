import { fetchWithRefresh } from "./fetchWithRefresh";
import { checkResponse } from "./checkResponse";
import { URL } from "./apiConst";
import { setUser, setAuthChecked } from "../services/actions/checkUserAuth";
import { Dispatch } from "redux";
import { TLogin, TResponse, TRegister, TPassResponse, TPatchResponse } from "./types";

export const getUser = () => {
  return async (dispatch: Dispatch<any>) => {
      fetchWithRefresh(`${URL}/auth/user`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  authorization: localStorage.getItem('accessToken') || '',
              },
          })
          .then((response: any) => {
              if (response.success) {
                  dispatch(setUser(response.user));
              } else {
                  return Promise.reject('Ошибка данных с сервера');
              }
          });
  };
};

export const checkUserAuth = () => {
  return async (dispatch: Dispatch<any>) => {
      if (localStorage.getItem("accessToken")) {
        try {
          await dispatch(getUser())
        } catch (error) {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  dispatch(setUser(null));
              }
          finally { 
            dispatch(setAuthChecked(true))
          };
      } else {
          dispatch(setAuthChecked(true));
      }
  }
};

export const login = ({ email, password }: TLogin) => {
  return async (dispatch: Dispatch<any>) => {
  const response: TResponse = await fetch(`${URL}/auth/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          email: email,
          password: password
      })
  }).then(checkResponse)
  dispatch(setUser(response.user));
  localStorage.setItem('accessToken', response.accessToken);
  localStorage.setItem('refreshToken', response.refreshToken);
  return response.user;
}
}

export const logout = () => {
  return async (dispatch: Dispatch<any>) => {
  fetch(`${URL}/auth/logout`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          token: localStorage.getItem('refreshToken')
      })
  }).then(checkResponse)
  dispatch(setUser(null));
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}
}

export const register = ({ name, email, password }: TRegister) => {
  return async (dispatch: Dispatch<any>) => {
  const response: TResponse = await fetch(`${URL}/auth/register`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          name: name,
          email: email,
          password: password
      })
  }).then(checkResponse)
  dispatch(setUser(response.user))
  localStorage.setItem('accessToken', response.accessToken);
  localStorage.setItem('refreshToken', response.refreshToken);
  return response.user;
  }
}

export const forgot = ({ email }: {email: string}) => {
  return async () => {
    const response: TPassResponse = await fetch(`${URL}/password-reset`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          email: email,
      })
  }).then(checkResponse)
  return response;
  }
}

export const reset = ({ password, token }: {password: string; token: string}) => {
  return async () => {
    const response: TPassResponse = await fetch(`${URL}/password-reset/reset`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          password: password,
          token: token
      })
  }).then(checkResponse)
  return response;
  }
}

export const patchUser = ({ name, email, password }: TRegister) => {
  return async () => {
    const response: TPatchResponse = await fetch(`${URL}/auth/user`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.accessToken
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
    })
  }).then(checkResponse)
  return response
  }
}

export const forgotTokenConfirm = () => {
  return async () => {
      if (!localStorage.getItem("forgotToken")) {
        localStorage.setItem("forgotToken", 'true');
      }
  }
};
export const forgotTokenDelete = () => {
  return async () => {
      if (localStorage.getItem("forgotToken")) {
        localStorage.removeItem("forgotToken");
      }
  }
};