export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT'
export const CLEAR_CURRENT_INGREDIENT= 'CLEAR_CURRENT_INGREDIENT'

export const setCurrentIngredient = (item) => ({
    type: SET_CURRENT_INGREDIENT,
    ingredient: item
})
export const clearCurrentIngredient = (item) => ({
    type: CLEAR_CURRENT_INGREDIENT,
    ingredient: item
})