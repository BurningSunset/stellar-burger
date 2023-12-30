import { refreshToken, fetchWithRefresh } from "./fetchWithRefresh";
import { checkResponse } from "./checkResponse";
import { URL } from "./apiConst";
import { setUser, setAuthChecked } from "../services/actions/checkUserAuth";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = () => {
  return async (dispatch) => {
      fetchWithRefresh(`${URL}/auth/user`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  authorization: localStorage.getItem('accessToken'),
              },
          })
          .then((response) => {
              if (response.success) {
                  dispatch(setUser(response.user));
              } else {
                  return Promise.reject('Ошибка данных с сервера');
              }
          });
  };
};

export const checkUserAuth = () => {
  return async (dispatch) => {
      if (localStorage.getItem("accessToken")) {
          dispatch(getUser())
              .catch(() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  dispatch(setUser(null));
              })
              .finally(() => dispatch(setAuthChecked(true)));
      } else {
          dispatch(setAuthChecked(true));
      }
  }
};

export const login = async ({ email, password }) => {
  const response = await fetch(`${URL}/auth/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          email: email,
          password: password
      })
  }).then(checkResponse)
  console.log(response)
  localStorage.setItem('accessToken', response.accessToken);
  localStorage.setItem('refreshToken', response.refreshToken);
  return response.user;
}
export const logout = () => {
  console.log('logout')
  fetch(`${URL}/auth/logout`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          token: localStorage.getItem('refreshToken')
      })
  }).then(checkResponse)
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}
export const register = async ({ name, email, password }) => {
  const response = await fetch(`${URL}/auth/register`, {
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
  localStorage.setItem('accessToken', response.accessToken);
  localStorage.setItem('refreshToken', response.refreshToken);
  return response.user;
}

export const loginAsync = createAsyncThunk(
  'auth/login',
  login
);

export const logoutAsync = createAsyncThunk(
  'auth/logout',
  logout
);

export const registerAsync = createAsyncThunk(
  'auth/register',
  register
);

export const api = {
  loginAsync,
  logoutAsync,
  registerAsync
};