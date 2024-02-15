import {
    ADD_ITEM,
    DELETE_ITEM,
    SET_BUN,
    SWAP_ITEMS
} from '../actions/currentConstructorIngredients'
import { currentConstructorIngredientsReducer, initialState } from './currentConstructorIngredientsReducer'
import { ingredientBunDummy, ingredientDummy } from '../../utils/consts'

const ing1 = {...ingredientDummy, uid: 'testUid1'}
const ing2 = {...ingredientDummy, uid: 'testUid2'}
const ing3 = {...ingredientDummy, uid: 'testUid3'}
const ingList = [ing1, ing2, ing3]
const extendedInitialState = {...initialState, ingredientList: ingList}

describe('current constructor ingredients reducer', () => {
    it('should return initial state', () => {
        expect(currentConstructorIngredientsReducer(undefined, {})).toEqual(initialState)
    })
})
it('should handle ADD_ITEM', () => {
    const action = {
        type: ADD_ITEM,
        item: ing1
    }
    expect(currentConstructorIngredientsReducer(initialState, action)).toEqual({
        ...initialState,
        ingredientList: [...initialState.ingredientList, ing1]
    })
})
it('should handle DELETE_ITEM', () => {
    expect(ingList.some(item => item.uid === 'testUid1')).toEqual(true) // проверяем есть ли элемент который мы собираемся удалить в исходном массиве
    const action = {
        type: DELETE_ITEM,
        uid: 'testUid1'
    }
    expect(currentConstructorIngredientsReducer(extendedInitialState, action).ingredientList.some(item => item.uid === 'testUid1')).toEqual(false)
})
it('should handle SET_BUN', () => {
    const action = {
        type: SET_BUN,
        item: ingredientBunDummy,
    }
    expect(currentConstructorIngredientsReducer(initialState, action)).toEqual({
        ...initialState,
        bun: ingredientBunDummy
    })
})
it('should handle SWAP_ITEMS', () => {
    const action = {
        type: SWAP_ITEMS,
        item1: 'testUid1',
        item2: 'testUid2'
    }
    expect(currentConstructorIngredientsReducer(extendedInitialState, action)).toEqual({
        ...extendedInitialState,
        ingredientList: [ing2, ing1, ing3] // поменяли местами ингр. 1 и ингр. 2
    })
})
