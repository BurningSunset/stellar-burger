import { combineReducers } from 'redux'
import { getIngredientsReducer } from './getIngredientsReducer'
import { currentConstructorIngredientsReducer } from './currentConstructorIngredientsReducer'
import { switchTabReducer } from './switchTabReducer'
export const rootReducer = combineReducers({
    getIngredients: getIngredientsReducer,
    currentConstructorIngredients: currentConstructorIngredientsReducer,
    switchTab: switchTabReducer
})