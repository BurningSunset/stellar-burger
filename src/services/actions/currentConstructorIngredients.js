import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM ='DELETE_ITEM'
export const SET_BUN = 'SET_BUN'

export const SWAP_ITEMS = 'SWAP_ITEMS'

export const swapItems = (item1, item2) => ({
    type: SWAP_ITEMS,
    item1: item1,
    item2: item2
})

export const addIngredient = (item) => ({
    type: ADD_ITEM,
    item: {
        ...item,
        uid: uuidv4()
    }
})

export const setBun = (item) => ({
    type: SET_BUN,
    item: item
})

export const deleteIngredient = (item) => ({
    type: DELETE_ITEM,
    uid: item.uid
})