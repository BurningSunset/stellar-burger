import { TAB_SWITCH } from '../actions/switchTab'
import { initialState, switchTabReducer } from './switchTabReducer'

describe('switch tab reducer', () => {
    it('should return initial state', () => {
        expect(switchTabReducer(undefined, {})).toEqual(initialState)
    })
})

it('should handle TAB_SWITCH', () => {
    const action = {
        type: TAB_SWITCH,
        currentTab: 'main' 
    }
    expect(switchTabReducer(initialState, action)).toEqual({
        currentTab: 'main'
    })
})