import { combineReducers } from 'redux'
import {getIngredientsReducer} from './getIngredientsReducer'
export const rootReducer = combineReducers({
    getIngredients: getIngredientsReducer
})