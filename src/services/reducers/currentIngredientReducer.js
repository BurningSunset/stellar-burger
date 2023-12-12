import { SET_CURRENT_INGREDIENT, CLEAR_CURRENT_INGREDIENT } from "../actions/currentIngredient";

const initialState = {
    ingredient: null
}

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_INGREDIENT: {
            return {
                ...state,
                ingredient: action.ingredient
            }
        } case CLEAR_CURRENT_INGREDIENT: {
            return {
                ...state,
                ingredient: null
            }
        }
        default: {
            return state
        }
    }
}