import { User } from "../../utils/types";

export const SET_AUTH_CHECKED: "SET_AUTH_CHECKED" = "SET_AUTH_CHECKED";
export const SET_USER: "SET_USER" = "SET_USER";

export interface ISetAuthChecked {
  readonly type: typeof SET_AUTH_CHECKED
  readonly payload: boolean
}

export interface ISetUser {
  readonly type: typeof SET_USER
  readonly payload: User | null
}

export type TUserAuthActions = 
  | ISetAuthChecked
  | ISetUser

export const setAuthChecked = (value: boolean): ISetAuthChecked => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user: User | null): ISetUser => ({
  type: SET_USER,
  payload: user,
});
