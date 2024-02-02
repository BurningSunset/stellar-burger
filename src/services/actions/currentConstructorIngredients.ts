import { v4 as uuidv4 } from 'uuid';
import { TIngredient } from '../../utils/types';

export const ADD_ITEM: 'ADD_ITEM' = 'ADD_ITEM'
export const DELETE_ITEM: 'DELETE_ITEM' = 'DELETE_ITEM'
export const SET_BUN: 'SET_BUN' = 'SET_BUN'

export const SWAP_ITEMS: 'SWAP_ITEMS' = 'SWAP_ITEMS'

export interface ISwapItems {
    readonly type: typeof SWAP_ITEMS
    readonly item1: TIngredient['uid']
    readonly item2: TIngredient['uid']
}

export interface IAddIngredient {
    readonly type: typeof ADD_ITEM
    readonly item: TIngredient
}

export interface ISetBun {
    readonly type: typeof SET_BUN
    readonly item: TIngredient
}

export interface IDeleteIngredient {
    readonly type: typeof DELETE_ITEM
    readonly uid: TIngredient['uid']
}

export type TConstructorIngredientsActions = 
    | ISwapItems
    | IAddIngredient
    | ISetBun
    | IDeleteIngredient

export const swapItems = (item1: TIngredient['uid'], item2: TIngredient['uid']): ISwapItems => ({
    type: SWAP_ITEMS,
    item1: item1,
    item2: item2
})

export const addIngredient = (item: TIngredient): IAddIngredient => ({
    type: ADD_ITEM,
    item: {
        ...item,
        uid: uuidv4()
    }
})

export const setBun = (item: TIngredient): ISetBun => ({
    type: SET_BUN,
    item: item
})

export const deleteIngredient = (item: TIngredient): IDeleteIngredient => ({
    type: DELETE_ITEM,
    uid: item.uid
})