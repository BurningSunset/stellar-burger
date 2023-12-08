import { GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILURE } from '../actions/getIngredients'

const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: null
}

export const getIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsError: false
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsError: false,
                ingredients: action.ingredients
            }
        }
        case GET_INGREDIENTS_FAILURE: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsError: action.error
            }
        }
        default: {
            return state
        }
    }
}