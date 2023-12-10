export const TAB_SWITCH = 'TAB_SWITCH'

export const switchTabDispatch = (tab) => ({
    type: TAB_SWITCH,
    currentTab: tab 
})