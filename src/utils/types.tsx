import { ThunkAction } from "redux-thunk"
import { TUserAuthActions } from "../services/actions/checkUserAuth"
import { TOrderActions } from "../services/actions/createOrder"
import { TConstructorIngredientsActions } from "../services/actions/currentConstructorIngredients"
import { TCurrentIngredientActions } from "../services/actions/currentIngredient"
import { TForgotPasswordActions } from "../services/actions/forgotPassword"
import { TGetIngredientsAction } from "../services/actions/getIngredients"
import { TTabActions } from "../services/actions/switchTab"
import { RootState } from ".."
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
  } from "react-redux";

export type TIngredient = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    counter?: number,
    uid?: string
}

export type TIngredientResponse = {
    data: TIngredient[],
    success: boolean
}

export type TOrder = {
    success: boolean,
    name: string,
    order: {
        number: number
    }
}

export type HandleCloseFunction = (ingredient: TIngredient ) => void;

export type User = {
    email: string;
    name: string
}

export type TOptions = {
    method: string;
    headers: {
        'Content-Type': string;
        authorization: string
    }
}

export type TLogin = {
    email: string;
    password: string
}

export type TRegister = TLogin & {
    name: string
}

export type TResponse = {
    accessToken: string;
    refreshToken: string;
    user: User;
    success: boolean
}

export type TPassResponse = {
    message: string;
    success: boolean
}

export type TPatchResponse = {
    success: boolean;
    user: User
}

export type TBackground = {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: null;
}

// типы экшенов всех редьюсеров в один тип
export type AppActions = 
    | TUserAuthActions
    | TOrderActions
    | TConstructorIngredientsActions
    | TCurrentIngredientActions
    | TForgotPasswordActions
    | TGetIngredientsAction
    | TTabActions

// тип для ассинхронных экшенов (thunk)
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AppActions
>
// тип диспатча
export type AppDispatch<TReturnType = void> = (
    action: AppActions | AppThunk<TReturnType>
  ) => TReturnType;

// типизация хуков
export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;