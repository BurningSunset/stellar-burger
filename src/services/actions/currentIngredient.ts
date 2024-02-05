import { TIngredient } from "../../utils/types"

export const SET_CURRENT_INGREDIENT: 'SET_CURRENT_INGREDIENT' = 'SET_CURRENT_INGREDIENT'
export const CLEAR_CURRENT_INGREDIENT: 'CLEAR_CURRENT_INGREDIENT' = 'CLEAR_CURRENT_INGREDIENT'

export interface ISetCurrentIngredient {
    readonly type: typeof SET_CURRENT_INGREDIENT
    readonly ingredient: TIngredient
}
export interface IClearCurrentIngredient {
    readonly type: typeof CLEAR_CURRENT_INGREDIENT
    readonly ingredient: TIngredient
}

export type TCurrentIngredientActions = 
    | ISetCurrentIngredient
    | IClearCurrentIngredient

export const setCurrentIngredient = (item: TIngredient): ISetCurrentIngredient => ({
    type: SET_CURRENT_INGREDIENT,
    ingredient: item
})
export const clearCurrentIngredient = (item: TIngredient): IClearCurrentIngredient => ({
    type: CLEAR_CURRENT_INGREDIENT,
    ingredient: item
})