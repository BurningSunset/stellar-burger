import { CODE_REQUEST } from "../actions/forgotPassword";
import { resetPasswordReducer, initialState } from "./resetPasswordReducer";

describe('reset password reducer', () => {
    it('should return initial state', () => {
        expect(resetPasswordReducer(undefined, {})).toEqual(initialState)
    })
})

it('should handle CODE_REQUEST', () => {
    const action = {
        type: CODE_REQUEST,
        payload: true,
    }
    expect(resetPasswordReducer(initialState, action)).toEqual({
        ...initialState,
        isAuthChecked: true
    })
})
