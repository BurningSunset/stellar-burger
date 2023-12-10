import { url } from '../../utils/api'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE'

export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'


export function getIngredients() {
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        })
        fetch(url, {
            method: 'GET'
        }).then(response => {
            if (!response.ok) {
                return Promise.reject(`Error (getIngredients action): ${response.status}`);
            } else {
                return response.json()
            }
        }).then(response => {
            const ingredientList = response.data.map((item) => ({...item, counter: 0}))
            dispatch({
                type: GET_INGREDIENTS_SUCCESS,
                ingredients: ingredientList
            })
        }
        ).catch((error) => {
            dispatch ({
                type: GET_INGREDIENTS_FAILURE,
                error: `Error catched: ${error}`
            })
        })
    }
}

export const incrementCounter = (ingredient) => ({
    type: INCREASE_COUNTER,
    payload: ingredient 
})

export const decreaseCounter = (ingredient) => ({
    type: DECREASE_COUNTER,
    payload: ingredient
})