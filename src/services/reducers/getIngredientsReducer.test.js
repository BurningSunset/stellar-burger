import {GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILURE,
    INCREASE_COUNTER,
    DECREASE_COUNTER, } from '../actions/getIngredients'

import { getIngredientsReducer, initialState } from './getIngredientsReducer'

import { ingredientBunDummy, ingredientDummy } from '../../utils/consts' 

const bunInitialState = {
    ...initialState,
    ingredients: [
        {...ingredientBunDummy,
        counter: 0},
        {...ingredientDummy,
        counter: 0}
    ]
}

describe('get ingredients reducer', () => {
    it('should return initial state', () => {
        expect(getIngredientsReducer(undefined, {})).toEqual(initialState)
    })
})

it('should handle GET_INGREDIENTS_REQUEST', () => {
    const action = {
        type: GET_INGREDIENTS_REQUEST,
        payload: true
    }
    expect(getIngredientsReducer(initialState, action)).toEqual({
        ...initialState,
        ingredientsRequest: true
    })
})

it('should handle GET_INGREDIENTS_SUCCESS', () => {


    const action = {
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: [ingredientDummy, ingredientDummy]
    }
    expect(getIngredientsReducer(initialState, action)).toEqual({
        ...initialState,
        ingredientsRequest: false,
        ingredients: [ingredientDummy, ingredientDummy]
    })
})

it('should handle GET_INGREDIENTS_FAILURE', () => {
    const action = {
        type: GET_INGREDIENTS_FAILURE,
        error: true
    }
    expect(getIngredientsReducer(initialState, action)).toEqual({
        ...initialState,
        ingredientsRequest: false,
        ingredientsError: true
    })
})

it('should handle INCREASE_COUNTER on non-bun', () => {
    const action = {
        type: INCREASE_COUNTER,
        payload: {
            _id: 'nonBunId'
        }
    }
    expect(getIngredientsReducer(bunInitialState, action).ingredients[1].counter).toEqual(1);
})

it('should handle INCREASE_COUNTER on bun', () => {
    const action = {
        type: INCREASE_COUNTER,
        payload: {
            _id: 'bunId'
        }
    }
    expect(getIngredientsReducer(bunInitialState, action).ingredients[0].counter).toEqual(2);
})

it('should handle DECREASE_COUNTER on non-bun', () => {
    expect(bunInitialState.ingredients[1].counter).toEqual(1) // ожидаем что у нас после прошлого теста counter у булки равен двум
    const action = {
        type: DECREASE_COUNTER,
        payload: 'nonBunId'
    }
    expect(getIngredientsReducer(bunInitialState, action).ingredients[1].counter).toEqual(0);
})
