import { TAB_SWITCH, TTabActions } from '../actions/switchTab'

type TTabState = {
    currentTab: string
}

const initialState: TTabState = {
    currentTab: 'bun'
}

export const switchTabReducer = (state = initialState, action: TTabActions): TTabState => {
    switch (action.type) {
        case TAB_SWITCH: {
            return {
                ...state,
                currentTab: action.currentTab
            }
        } default: return state
    }
}