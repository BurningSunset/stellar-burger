import { CODE_REQUEST, TForgotPasswordActions } from "../actions/forgotPassword";
import { User } from "../../utils/types"
type TResetPasswordState = {
  user: User | null
  isAuthChecked: boolean
}

const initialState = {
    user: null,
    isAuthChecked: false,
};

export const resetPasswordReducer = (state = initialState, action: TForgotPasswordActions): TResetPasswordState => {
    switch (action.type) {
      case CODE_REQUEST:
        return {
          ...state,
          isAuthChecked: action.payload
        }
      default:
        return state;    
    }
  };