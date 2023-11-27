import styles from './burger-ingredients-item.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
const BurgerIngredientsItem = (props) => {
    const handleClick = () => {
        props.onClick(props.id)
        props.showModal()
    }

    return (
        <div className={`${styles.card}`} onClick={handleClick}>
            <div className={styles.counter}>
                {props.counterValue !== undefined && <Counter count={props.counterValue}/> }
            </div>
            <img src={props.ingImage} alt={props.name} className='ml-4 mr-4'></img>
            <span className={styles.itemPrice}>
                <p className="text text_type_digits-default mr-1 mb-2">{props.price}</p>
                <CurrencyIcon type="primary" />
            </span>
            <p className={`text text_type_main-default ${styles.ingName}`}>{props.name}</p>
        </div>
    )
}

BurgerIngredientsItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
    counterValue: PropTypes.number.isRequired,
    ingImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}
export default BurgerIngredientsItem

// item при клике делает переменную состояния равной своему _id
// IngredientDetails получает _id и ищет элемент в переданном массиве с данными
// Обрабатывает
// Сразу после этого вызывается модалка с этим IngredientDetails