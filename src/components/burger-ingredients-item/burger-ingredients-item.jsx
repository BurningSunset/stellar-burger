import styles from './burger-ingredients-item.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../utils/itemTypes'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter } from '../../services/actions/getIngredients'

const BurgerIngredientsItem = ({item, onClick, showModal}) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        onClick(item._id)
        showModal()
    }

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
    // dispatch(incrementCounter(item.id));

    return (
        <div ref={drag} className={`${styles.card}`} style={{ ...styles, opacity }} onClick={handleClick}>
            <div className={`${styles.counter} `}>
                {item.counter !== 0 && <Counter count={item.counter}/> }
            </div>
            <img src={item.image} alt={item.name} className='ml-4 mr-4'></img>
            <span className={styles.itemPrice}>
                <p className="text text_type_digits-default mr-1 mb-2">{item.price}</p>
                <CurrencyIcon type="primary" />
            </span>
            <p className={`text text_type_main-default ${styles.ingName}`}>{item.name}</p>
        </div>
    )
}

// BurgerIngredientsItem.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     id: PropTypes.string.isRequired,
//     showModal: PropTypes.func.isRequired,
//     counterValue: PropTypes.number.isRequired,
//     ingImage: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
// }
export default BurgerIngredientsItem

// item при клике делает переменную состояния равной своему _id
// IngredientDetails получает _id и ищет элемент в переданном массиве с данными
// Обрабатывает
// Сразу после этого вызывается модалка с этим IngredientDetails