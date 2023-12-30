import { CODE_REQUEST } from "../actions/forgotPassword";

const initialState = {
    user: null,
    isAuthChecked: false,
};

export const resetPasswordReducer = (state = initialState, action) => {
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