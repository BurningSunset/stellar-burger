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
    uid?: number
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