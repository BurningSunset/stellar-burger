import { FC, useEffect } from 'react';
import styles from './order-info.module.css'
import { useParams } from 'react-router-dom';
import { TOrderItem, useSelector, useDispatch } from '../../utils/types';
import { getOrder } from '../../services/actions/orderInfo';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderInfo: FC = () => {
    const { number } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        if (number) {
            const numericValue = parseInt(number, 10)
            dispatch(getOrder(numericValue))
        }
    }, [dispatch, number])

    const allIngredients = useSelector((state) => state.getIngredients.ingredients)

    let currentOrder: TOrderItem
    let orderIngredients: string[]
    let ingredientsLength: number
    let totalPrice: number
    const ingredientCountMap = new Map<string, number>();
    const order = useSelector((state) => state.getOrderInfo)
    if (order && order.order && order.order.orders.length !== 0) {
        currentOrder = order.order.orders[0]
        orderIngredients = currentOrder.ingredients
        ingredientsLength = orderIngredients.length
        totalPrice = orderIngredients
            .map((item) => {
                const ingredient = allIngredients.find((ingredient) => ingredient._id === item);
                return ingredient ? ingredient.price : 0;
            })
            .reduce((acc, price) => acc + price, 0);
            
            orderIngredients.forEach((item) => {
                if (ingredientCountMap.has(item)) {
                    ingredientCountMap.set(item, ingredientCountMap.get(item)! + 1);
                } else {
                    ingredientCountMap.set(item, 1);
                }
            });
    }

    return (
        <section className={styles.orderContainer}>
            {order.orderError && (
                <div>
                    <p>Что-то пошло не так...</p>
                    <p>Ошибка: {order.orderError.toString()}</p>
                </div>
            )}
            {order.order && currentOrder! && (
                <div>
                    <p className={`text text_type_digits-medium mb-10 ${styles.number}`}>#{currentOrder.number}</p>
                    <p className={`text text_type_main-medium mb-3`}>{currentOrder.name}</p>
                    <div className={`text text_type_main-default mb-15`}>
                    {(() => {
                        switch (currentOrder.status) {
                            case "created":
                                return <p>Создан</p>;
                            case "pending":
                                return <p>Готовится</p>;
                            case "done":
                                return <p className={styles.orderDone}>Выполнен</p>;
                            default:
                                return <p>Просчитался. Но где...</p>;
                        }
                    })()}
                    </div>
                    <p className={`text text_type_main-medium mb-6`}>Состав:</p>
                    <div className={`${styles.ingredientsContainer} pr-6`}>
                        {
                    // ставим ! так как уверены что переменные не отрисовались бы до их
                    // инициализации
                    [...ingredientCountMap.entries()].map(([item, count], index) => {
                        const ingredient = allIngredients.find((ingredient) => ingredient._id === item);
                    
                        if (ingredient) {
                            return (
                                <div key={index} className={`mb-4 ${styles.entryContainer}`}>
                                    <img 
                                        src={ingredient.image_mobile}
                                        className={`${styles.image}`} 
                                    />
                                    <div className={`text text_type_main-default ml-4`}>
                                        {ingredient.name}
                                    </div>
                                    <div className={`text text_type_digits-default ml-4 ${styles.price}`}>
                                        {count} x {ingredient.price} <CurrencyIcon type="primary" />
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })
                    
                        }
                    </div>
                    <div className={`${styles.summ} mt-10 mb-6`}>
                        <p className={`text text_type_main-default`}>
                            {currentOrder.createdAt}
                        </p>
                        <div className={`text text_type_digits-default ml-4 ${styles.price}`}>
                            {totalPrice!} <CurrencyIcon type="primary" />
                        </div>
                    </div>


                </div>
            )}
        </section>
    )
}

export default OrderInfo
