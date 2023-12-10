export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM ='DELETE_ITEM'
export const SET_BUN = 'SET_BUN'

export const SWAP_ITEMS = 'SWAP_ITEMS'

export const swapItems = (item1, item2) => ({
    type: SWAP_ITEMS,
    item1: item1,
    item2: item2
})