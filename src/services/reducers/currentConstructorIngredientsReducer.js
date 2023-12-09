import {
    ADD_ITEM,
    DELETE_ITEM,
    SET_BUN
} from '../actions/currentConstructorIngredients'

const initialState = {
    bun: null,
    ingredientList: [],
}

export const currentConstructorIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const newItem = {...action.item}
            return {
                ...state,
                ingredientList: [...state.ingredientList, newItem]
            }
        }
        case DELETE_ITEM: {
            const upgradedIngredientList = state.ingredientList.filter(item => item.uid !== action.uid)
            return {
                ...state,
                ingredientList: upgradedIngredientList
            }
        }
        case SET_BUN: {
            return {
                ...state,
                bun: action.item
            }
        }
        default: {
            return state
        }
    }
}