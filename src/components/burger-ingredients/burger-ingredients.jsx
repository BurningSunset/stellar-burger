import { useState, useRef } from 'react';
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category'
import ingredientType from '../../utils/PropTypes'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { switchTabDispatch } from '../../services/actions/switchTab';

function BurgerIngredients({showModal, onIngredientClick}) {

    const { currentTab } = useSelector(state => state.switchTab)

    const dispatch = useDispatch()
    const tabSwitcher = (tab) => {dispatch(switchTabDispatch(tab));}
    const bunRef = useRef(null)
    const sauceRef = useRef(null)
    const mainRef = useRef(null)
    const ingredientBlockRef = useRef(null)
    const categoryScroll = () => {
        const bunRect = bunRef.current?.getBoundingClientRect();
        const sauceRect = sauceRef.current?.getBoundingClientRect();
        const mainRect = mainRef.current?.getBoundingClientRect();
        const blockRect = ingredientBlockRef.current?.getBoundingClientRect();

        if (blockRect && bunRect && sauceRect && mainRect) {
            const blockTop = blockRect.top;
            const blockBottom = blockRect.bottom;
    
            if (bunRect.top >= blockTop && bunRect.bottom <= blockBottom) {
                tabSwitcher('bun');
            } else if (sauceRect.top >= blockTop && sauceRect.bottom <= blockBottom) {
                tabSwitcher('sauce');
            } else if (mainRect.top >= blockTop && mainRect.bottom <= blockBottom) {
                tabSwitcher('main');
            }
        }
    };

    const tabClickHandler = (ref, tab) => {
        ref.current.scrollIntoView({
            behavior: `smooth`
        })
        tabSwitcher(tab)
    }

    return (
        <section className={`pr-10 pt-10 ${styles.section}`} >
            <h2 className={`text text_type_main-large ${styles.h2}`}>Соберите бургер</h2>
            <div className={`mt-5 mb-10 ${styles.tab}`}>
                <Tab value="one" active={currentTab === 'bun'} onClick={() => tabClickHandler(bunRef, 'bun')}>
                    Булки
                </Tab>
                <Tab value="two" active={currentTab === 'sauce'} onClick={() => tabClickHandler(sauceRef, 'sauce')}>
                    Соусы
                </Tab>
                <Tab value="three" active={currentTab === 'main'} onClick={() => tabClickHandler(mainRef, 'main')}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredientBlock} ref={ingredientBlockRef} onScroll={categoryScroll}>
                <BurgerIngredientsCategory type="bun" ref={bunRef} categoryHeading="Булки" showModal={showModal} onIngredientClick={onIngredientClick}/>
                <BurgerIngredientsCategory type="sauce" ref={sauceRef} categoryHeading="Соусы" showModal={showModal} onIngredientClick={onIngredientClick}/>
                <BurgerIngredientsCategory type="main" ref={mainRef} categoryHeading="Начинки" showModal={showModal} onIngredientClick={onIngredientClick}/> 
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    showModal: PropTypes.func.isRequired,
    onIngredientClick: PropTypes.func.isRequired, 
}

export default BurgerIngredients