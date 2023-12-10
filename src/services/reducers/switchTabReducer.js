import { TAB_SWITCH } from '../actions/switchTab'

const initialState = {
    currentTab: 'bun'
}

export const switchTabReducer = (state = initialState, action) => {
    switch (action.type) {
        case TAB_SWITCH: {
            return {
                ...state,
                currentTab: action.currentTab
            }
        } default: return state
    }
}