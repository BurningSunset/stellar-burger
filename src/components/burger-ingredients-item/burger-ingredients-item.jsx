import React from 'react';
import styles from './burger-ingredients-item.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
const BurgerIngredientsItem = (props) => {
    return (
        <div className={`${styles.card}`} onClick={props.showModal}>
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

export default BurgerIngredientsItem