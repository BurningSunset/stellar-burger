import {
    ADD_ITEM,
    DELETE_ITEM,
    SET_BUN,
    SWAP_ITEMS
} from '../actions/currentConstructorIngredients'

const initialState = {
    bun: null,
    ingredientList: [],
}

export const currentConstructorIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const newItem = {...action.item}
            return {
                ...state,
                ingredientList: [...state.ingredientList, newItem]
            }
        }
        case DELETE_ITEM: {
            const upgradedIngredientList = state.ingredientList.filter(item => item.uid !== action.uid)
            return {
                ...state,
                ingredientList: upgradedIngredientList
            }
        }
        case SET_BUN: {
            return {
                ...state,
                bun: action.item
            }
        }
        case SWAP_ITEMS: {
            const updatedIngredientList = { ...state };
            const { item1, item2 } = action;
            const index1 = updatedIngredientList.ingredientList.findIndex(item => item.uid === item1);
            const index2 = updatedIngredientList.ingredientList.findIndex(item => item.uid === item2);
            if (index1 !== -1 && index2 !== -1) {
                [updatedIngredientList.ingredientList[index1], updatedIngredientList.ingredientList[index2]] =
                [updatedIngredientList.ingredientList[index2], updatedIngredientList.ingredientList[index1]];
            }
            return updatedIngredientList;
        }
        default: {
            return state
        }
    }
}