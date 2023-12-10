import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILURE,

    INCREASE_COUNTER,
    DECREASE_COUNTER,
} from '../actions/getIngredients'

const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: null,
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

        case INCREASE_COUNTER: {
            const updatedState = { ...state };
            const currentIngredient = state.ingredients.find((item) => item._id === action.payload._id);
        
            if (currentIngredient.type === 'bun') {
                updatedState.ingredients.forEach((item) => {
                    if (item.type === 'bun') {
                        item.counter = 0;
                    }
                });
                currentIngredient.counter = +currentIngredient.counter + 2;
            } else {
                currentIngredient.counter = +currentIngredient.counter + 1;
            }
            return { ...updatedState };
        }
        
        // Проверка на 
        case DECREASE_COUNTER: {
            return {
                ...state,
                ingredients: state.ingredients.map((item) => {
                    if (item._id === action.payload) {
                        return {
                            ...item,
                            counter: Math.max(0, item.counter - 1), // Гарантируем, что счетчик не будет уходить в отрицательные значения
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