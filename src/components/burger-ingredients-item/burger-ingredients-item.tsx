import styles from './burger-ingredients-item.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../utils/itemTypes'
import { useDispatch } from 'react-redux'
import { incrementCounter } from '../../services/actions/getIngredients'
import { useLocation, Link } from "react-router-dom";
import { TIngredient } from '../../utils/types'
import { FC } from 'react'

const BurgerIngredientsItem: FC<TIngredient> = (item) => {
    
    const location = useLocation();
    const ingredientId = item['_id'];
    const dispatch = useDispatch()
    const handleDrop = () => {
        dispatch(incrementCounter(item))
    }

    const [{ isDragging }, drag] = useDrag(() => (
        {
        type: ItemTypes.INGREDIENT,
        item: {item},
        end: (item, monitor) => {
            // Проверяем, был ли успешный дроп
            if (monitor.didDrop()) {
                handleDrop();
            }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
    }))
    const opacity = isDragging ? 0.4 : 1

    return (
        <Link
            key={ingredientId}
            to={`/ingredients/${ingredientId}`}
            state={{ background: location }}
            className={styles.link}
        >
            <div ref={drag} className={`${styles.card}`} style={{ ...styles, opacity }}>
                <div className={`${styles.counter} `}>
                    {item.counter !== 0 && <Counter count={item.counter!}/> }
                </div>
                <img src={item.image} alt={item.name} className='ml-4 mr-4'></img>
                <span className={styles.itemPrice}>
                    <p className="text text_type_digits-default mr-1 mb-2">{item.price}</p>
                    <CurrencyIcon type="primary" />
                </span>
                <p className={`text text_type_main-default ${styles.ingName}`}>{item.name}</p>
            </div>
        </Link>
    )
}

export default BurgerIngredientsItem
