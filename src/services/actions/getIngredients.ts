import { URL } from '../../utils/apiConst'
import { checkResponse } from '../../utils/checkResponse'
import { AppThunk, TIngredient, TIngredientResponse } from '../../utils/types'

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILURE: 'GET_INGREDIENTS_FAILURE' = 'GET_INGREDIENTS_FAILURE'

export const INCREASE_COUNTER: 'INCREASE_COUNTER' = 'INCREASE_COUNTER'
export const DECREASE_COUNTER: 'DECREASE_COUNTER' = 'DECREASE_COUNTER'

export interface IGetIngredientsRequest {
    readonly type: typeof GET_INGREDIENTS_REQUEST
}
export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS
    readonly ingredients: TIngredient[]
}
export interface IGetIngredientsFailure {
    readonly type: typeof GET_INGREDIENTS_FAILURE
    readonly error: Error
}

export interface IIncreaseCounter {
    readonly type: typeof INCREASE_COUNTER
    payload: TIngredient
}
export interface IDecreaseCounter {
    readonly type: typeof DECREASE_COUNTER
    payload: string
}

export type TGetIngredientsAction = 
    | IGetIngredientsRequest
    | IGetIngredientsSuccess
    | IGetIngredientsFailure
    | IIncreaseCounter
    | IDecreaseCounter

export const getIngredientsRequest = (): IGetIngredientsRequest => ({
    type: GET_INGREDIENTS_REQUEST
})
export const getIngredientsSuccess = (ingredientList: TIngredient[]): IGetIngredientsSuccess => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: ingredientList
})
export const getIngredientsFailure = (error: Error): IGetIngredientsFailure => ({
    type: GET_INGREDIENTS_FAILURE,
    error: error
})

export const getIngredients = (): AppThunk => {
    return function(dispatch) {
        dispatch(getIngredientsRequest())
        fetch(`${URL}/ingredients`, {
            method: 'GET'
        })
        .then(checkResponse)
        .then((response: TIngredientResponse) => {
            const ingredientList: TIngredient[] = response.data.map((item: TIngredient) => ({...item, counter: 0}))
            dispatch(getIngredientsSuccess(ingredientList))
        }
        ).catch((error: Error) => {
            dispatch (getIngredientsFailure(error))
        })
    }
}

export const incrementCounter = (ingredient: TIngredient): IIncreaseCounter => ({
    type: INCREASE_COUNTER,
    payload: ingredient 
})

export const decreaseCounter = (ingredient: string): IDecreaseCounter => ({
    type: DECREASE_COUNTER,
    payload: ingredient
})