import styles from './order-item.module.css'
import { useLocation, Link } from "react-router-dom";
import { TOrderItem, useDispatch, useSelector } from '../../utils/types'
import { FC } from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon';

type Props = {
    item: TOrderItem;
    statusToggle: boolean
}

const OrderItem: FC<Props> = ({item, statusToggle}) => {
    
    const location = useLocation();
    const orderNumber = item['number'];
    const orderId = item['_id']
    const dispatch = useDispatch()
    // это для получения изображений ингредиентов
    const allIngredients = useSelector((state) => state.getIngredients.ingredients)
    const orderIngredients = item.ingredients
    const ingredientsLength = orderIngredients.length
    const maxVisibleImages = 6
    const totalPrice = orderIngredients
        .slice(0, maxVisibleImages)
        .map((item) => {
            const ingredient = allIngredients.find((ingredient) => ingredient._id === item);

            return ingredient ? (ingredient.type === 'bun' ? ingredient.price * 2 : ingredient.price) : 0;
        })
        .reduce((acc, price) => acc + price, 0);

    return (
        <Link
            key={orderId}
            to={`/feed/${orderId}`}
            state={{ background: location }}
            className={styles.link}
        >
            <div className={`${styles.card} mb-4 mr-4 pt-6 pb-6 pl-4 pr-4`}>
                <span className={`${styles.infoSpan}`}>
                    <p className='text text_type_main-default'>#{orderNumber}</p>
                    <p className='text text_type_main-default text_color_inactive'>{item.createdAt}</p>
                </span>
                <p className="text text_type_main-medium mt-6">{item.name}</p>
                {/* проверено, работает V */}
                {statusToggle && (
                    <span className='text text_type_main-default'>
                    {(() => {
                        switch (item.status) {
                            case "created":
                                return <p>Создан</p>;
                            case "pending":
                                return <p>Готовится</p>;
                            case "done":
                                return <p className={styles.itemDone}>Выполнен</p>;
                            default:
                                return <p>Просчитался. Но где...</p>;
                        }
                    })()}
                    </span>
                )}
                <span className={`${styles.ingredientSpan} mt-6`}>
                    <div>
                        {
                    // урезаем так как лимит в 6 картинок
                        orderIngredients.slice(0, maxVisibleImages).map((item, index) => {
                            const ingredient = allIngredients.find((ingredient) => ingredient._id === item)
                            if (ingredient) {
                                return (
                                    <div key={index} className={styles.imgContainer}>
                                        {ingredientsLength > maxVisibleImages && index + 1 === maxVisibleImages && (
                                            <div className={`${styles.overlay} text text_type_main-default`}>
                                                +{ingredientsLength - maxVisibleImages}
                                            </div>
                                        )}
                                        <img 
                                            src={ingredient.image_mobile}
                                            // затемняем если картинок больше 6
                                            className={`${styles.image} ${index === maxVisibleImages - 1 && ingredientsLength > maxVisibleImages ? styles.blur : ''}`}
                                        />
                                    </div>
                                )
                            } else {
                                return null
                            }
                            })
                        }
                        </div>
                        <span className={`${styles.itemPrice}`}>
                            <p className="text text_type_digits-default mr-1 mb-2">{totalPrice}</p>
                            <CurrencyIcon type="primary" />
                        </span>
                      </span>
            </div>
        </Link>
    )
}

export default OrderItem
