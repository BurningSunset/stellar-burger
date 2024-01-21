import { User } from "../../utils/types";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";

export const setAuthChecked = (value: boolean) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user: User | null) => ({
  type: SET_USER,
  payload: user,
});
