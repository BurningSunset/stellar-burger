import { ingredientDummy } from "../../utils/consts";
import { SET_CURRENT_INGREDIENT, CLEAR_CURRENT_INGREDIENT } from "../actions/currentIngredient";
import { currentIngredientReducer, initialState } from "./currentIngredientReducer";

describe('current ingredient reducer', () => {
    it('should return initial state', () => {
        expect(currentIngredientReducer(undefined, {})).toEqual(initialState)
    })
})

it('should handle SET_CURRENT_INGREDIENT', () => {
    const action = {
        type: SET_CURRENT_INGREDIENT,
        ingredient: ingredientDummy
    }
    expect(currentIngredientReducer(initialState, action)).toEqual({
        ingredient: ingredientDummy
    })
})
it('should handle CLEAR_CURRENT_INGREDIENT', () => {
    const action = {
        type: CLEAR_CURRENT_INGREDIENT,
        ingredient: null
    }
    expect(currentIngredientReducer(initialState, action)).toEqual({
        ingredient: null
    })
})