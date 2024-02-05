export const CODE_REQUEST: 'CODE_REQUEST' = "CODE_REQUEST";
export const SET_FORGOT_TOKEN: 'SET_FORGOT_TOKEN' = 'SET_FORGOT_TOKEN'

export interface ICodeRequest {
  readonly type: typeof CODE_REQUEST
  readonly payload: boolean
}
export interface ISetForgotToken {
  readonly type: typeof SET_FORGOT_TOKEN
  readonly payload: boolean
}

export type TForgotPasswordActions =
  | ICodeRequest
  | ISetForgotToken

export const codeRequest = (value: boolean): ICodeRequest => ({
  type: CODE_REQUEST,
  payload: value,
})

export const setForgotToken = (value: boolean): ISetForgotToken => ({
  type: SET_FORGOT_TOKEN,
  payload: value,
})