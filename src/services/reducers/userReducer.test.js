import { initialState, userReducer } from "./userReducer";
import { SET_AUTH_CHECKED, SET_USER } from "../actions/checkUserAuth";

describe('user reducer', () => {
    it('should return initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState)
    })
})

it('should handle SET_AUTH_CHECKED', () => {
    const action = {
        type: SET_AUTH_CHECKED,
        payload: true
    }
    expect(userReducer(initialState, action)).toEqual({
        ...initialState,
        isAuthChecked: true
    })
})

it('should handle SET_USER', () => {
    const action = {
        type: SET_USER,
        payload: {    
            email: 'test',
            name: 'test'
        }
    }
    expect(userReducer(initialState, action)).toEqual({
        ...initialState,
        user: {    
            email: 'test',
            name: 'test'
        }
    })
})