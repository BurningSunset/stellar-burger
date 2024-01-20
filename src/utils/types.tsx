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
    counter?: number
}

export type TOrder = {
    success: boolean,
    name: string,
    order: {
        number: number
    }
}

export type HandleCloseFunction = (ingredient: { item: TIngredient }) => void;