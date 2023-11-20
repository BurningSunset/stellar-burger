import React from 'react';
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category'
function BurgerIngredients(ingredients) {
    const [current, setCurrent] = React.useState('one')
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
                <BurgerIngredientsCategory ingredients={ingredients} type="bun" categoryHeading="Булки" />
                <BurgerIngredientsCategory ingredients={ingredients} type="sauce" categoryHeading="Соусы" />
                <BurgerIngredientsCategory ingredients={ingredients} type="main" categoryHeading="Начинки" />
            </div>
        </section>
        
    )
}

export default BurgerIngredients