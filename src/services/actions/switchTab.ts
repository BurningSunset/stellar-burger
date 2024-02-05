export const TAB_SWITCH: 'TAB_SWITCH' = 'TAB_SWITCH'

export interface ISwitchTabDispatch {
    readonly type: typeof TAB_SWITCH
    readonly currentTab: string
}

export type TTabActions = ISwitchTabDispatch

export const switchTabDispatch = (tab: string): ISwitchTabDispatch => ({
    type: TAB_SWITCH,
    currentTab: tab 
})