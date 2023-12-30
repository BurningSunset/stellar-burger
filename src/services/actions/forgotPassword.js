export const CODE_REQUEST = "CODE_REQUEST";
export const SET_FORGOT_TOKEN = 'SET_FORGOT_TOKEN'

export const codeRequest = (value) => ({
  type: CODE_REQUEST,
  payload: value,
})

export const setForgotToken = (value) => ({
  type: SET_FORGOT_TOKEN,
  payload: value,
})