import { URL } from "../../utils/apiConst"
import { checkResponse } from "../../utils/checkResponse"


export const ORDER_SUBMIT = 'ORDER_SUBMIT'
export const ORDER_SUCCESS = 'ORDER_SUCCESS'
export const ORDER_FAILURE = 'ORDER_FAILURE'

export const CLEAR_ORDER = 'CLEAR_ORDER'

export const submitOrder = (ingredients) => {
    return function(dispatch) {
        fetch(`${URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ ingredients: ingredients.map(item => item._id) })
        })
        .then(checkResponse)
        .then(response => {
            dispatch({
                type: ORDER_SUCCESS,
                order: response
            })
        }).catch(error => {
            dispatch ({
                type: ORDER_FAILURE,
                error: `Error catched: ${error}`
            })
        })
    }
}

export const clearOrder = () => {
    return {
        type: CLEAR_ORDER
    }
}