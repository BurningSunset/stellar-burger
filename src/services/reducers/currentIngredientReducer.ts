import { TIngredient } from "../../utils/types";
import { SET_CURRENT_INGREDIENT, CLEAR_CURRENT_INGREDIENT, TCurrentIngredientActions } from "../actions/currentIngredient";

type TCurrentIngredientState = {
    ingredient: TIngredient | null
}

export const initialState: TCurrentIngredientState = {
    ingredient: null
}

export const currentIngredientReducer = (state = initialState, action: TCurrentIngredientActions): TCurrentIngredientState => {
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