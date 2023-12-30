import { fetchWithRefresh } from "./fetchWithRefresh";
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

export const forgot = async ({ email }) => {
  const response = await fetch(`${URL}/password-reset`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          email: email,
      })
  }).then(checkResponse)
  console.log(response)
  return response;
}

export const reset = async ({ password, token }) => {
  const response = await fetch(`${URL}/password-reset/reset`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          password: password,
          token: token
      })
  }).then(checkResponse)
  console.log(response)
  return response;
}

export const patchUser = async ({ name, email, password }) => {
  const response = await fetch(`${URL}/auth/user`, {
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
      console.log(response)
      return response
}

export const forgotTokenConfirm = () => {
  return async () => {
    console.log('trig')
      if (!localStorage.getItem("forgotToken")) {
        localStorage.setItem("forgotToken", true);
      }
  }
};
export const forgotTokenDelete = () => {
  return async () => {
      if (localStorage.getItem("forgotToken")) {
        localStorage.deleteItem("forgotToken", false);
      }
  }
};

// export const getUserInfo = async () => {
//     const response = await fetch(`${URL}/auth/user`, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//           authorization: localStorage.accessToken
//       },
      
//   }).then(checkResponse)
//   .then(
//     dispatch(setUser(response.user))
//   )
//   return response.user;
// };

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

export const forgotAsync = createAsyncThunk(
  'api/password-reset',
  forgot
);

export const resetAsync = createAsyncThunk(
  'api/password-reset/reset',
  reset
);

export const patchUserAsync = createAsyncThunk(
  'api/password-reset/reset',
  patchUser
);

export const api = {
  loginAsync,
  logoutAsync,
  registerAsync,
  forgotAsync,
  resetAsync,
  patchUserAsync
};