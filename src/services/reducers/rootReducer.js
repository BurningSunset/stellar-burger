import { combineReducers } from 'redux'
import { getIngredientsReducer } from './getIngredientsReducer'
import { currentConstructorIngredientsReducer } from './currentConstructorIngredientsReducer'
import { switchTabReducer } from './switchTabReducer'
import { currentIngredientReducer } from './currentIngredientReducer'
import { createOrderReducer } from './createOrderReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    getIngredients: getIngredientsReducer,
    currentConstructorIngredients: currentConstructorIngredientsReducer,
    switchTab: switchTabReducer,
    currentIngredient: currentIngredientReducer,
    createOrder: createOrderReducer,
    user: userReducer
})