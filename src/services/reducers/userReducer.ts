import { SET_AUTH_CHECKED, SET_USER, TUserAuthActions } from "../actions/checkUserAuth";
import { User } from "../../utils/types";

type TUserState = { 
  user: User | null,
  isAuthChecked: boolean
}

const initialState: TUserState = {
    user: null,
    isAuthChecked: false,
};

export const userReducer = (state = initialState, action: TUserAuthActions): TUserState => {
  switch (action.type) {
    case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;    
  }
};