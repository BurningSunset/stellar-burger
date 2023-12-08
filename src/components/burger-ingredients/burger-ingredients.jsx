import { useState } from 'react';
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category'
import ingredientType from '../../utils/PropTypes'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
function BurgerIngredients({showModal, onIngredientClick}) {
    const [current, setCurrent] = useState('one')
    return (
        <section className={`pr-10 pt-10 ${styles.section}`}>
            <h2 className={`text text_type_main-large ${styles.h2}`}>Соберите бургер</h2>
            <div className={`mt-5 mb-10 ${styles.tab}`}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredientBlock}>
                <BurgerIngredientsCategory type="bun" categoryHeading="Булки" showModal={showModal} onIngredientClick={onIngredientClick}/>
                <BurgerIngredientsCategory type="sauce" categoryHeading="Соусы" showModal={showModal} onIngredientClick={onIngredientClick}/>
                <BurgerIngredientsCategory type="main" categoryHeading="Начинки" showModal={showModal} onIngredientClick={onIngredientClick}/> 
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    showModal: PropTypes.func.isRequired,
    onIngredientClick: PropTypes.func.isRequired, 
}

export default BurgerIngredients