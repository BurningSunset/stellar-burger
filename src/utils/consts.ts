// данные для тестов
export const ingredientDummy = {
    _id: 'nonBunId',
    name: 'string',
    type: 'string',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: 'string',
    image_mobile: 'string',
    image_large: 'string',
    __v: 0,
}
export const ingredientBunDummy = {
    ...ingredientDummy,
    _id: 'bunId',
    type: 'bun'
}

// для order-info
export const orderDummy = {
    ingredients: ['111', '222', '333'],
    _id: '_id',
    status: 'done',
    number: '1111',
    createdAt: '01.01',
    updatedAt: '02.01',
    name: 'test burger'
}

export const dummyOrderResponse = {
    success: true,
    orders: [orderDummy],
    total: 1,
    totalToday: 2
}
// для create-order
export const createOrderDummy = {
    success: true,
    name: 'test',
    order: {
        number: 333
    }
}
