import { URL } from "../../utils/apiConst"


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
        }).then(response => {
            console.log(response)
            if (!response.ok) {
                return Promise.reject(`Error (submitOrder action): ${response.status}`);
            } else {
                return response.json()
            }
        }).then(response => {
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
    console.log('dismount')
    return {
        type: CLEAR_ORDER
    }
}