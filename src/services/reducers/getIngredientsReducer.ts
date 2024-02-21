import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILURE,

    INCREASE_COUNTER,
    DECREASE_COUNTER,
} from '../actions/getIngredients'
import { TIngredient } from '../../utils/types'
import { TGetIngredientsAction } from '../actions/getIngredients'

type TGetIngredientsState = {
    ingredients: TIngredient[] | [],
    ingredientsRequest: boolean;
    ingredientsError: Error | boolean
}

export const initialState: TGetIngredientsState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: false,
}

export const getIngredientsReducer = (state = initialState, action: TGetIngredientsAction): TGetIngredientsState => {
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

        case INCREASE_COUNTER: {
            const updatedState = { ...state };
            const currentIngredient = state.ingredients.find((item) => item._id === action.payload._id);
        
            if (currentIngredient?.type === 'bun') {
                updatedState.ingredients.forEach((item) => {
                    if (item.type === 'bun') {
                        item.counter = 0;
                    }
                });
                currentIngredient.counter = (currentIngredient.counter || 0) + 2;
            } else if (currentIngredient) {
                currentIngredient.counter = (currentIngredient.counter || 0) + 1;
            }
            return { ...updatedState };
        }
        
        case DECREASE_COUNTER: {
            return {
                ...state,
                ingredients: state.ingredients.map((item) => {
                    if (item._id === action.payload) {
                        return {
                            ...item,
                            counter: Math.max(0, item.counter! - 1), // Гарантируем, что счетчик не будет уходить в отрицательные значения
                        };
                    } else {
                        // Возвращаем неизмененный элемент
                        return item;
                    }
                }),
            };
        }
        
        default: {
            return state
        }
    }
}