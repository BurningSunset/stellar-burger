import { useRef, FC, RefObject } from 'react';
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category'
import { useSelector, useDispatch } from '../../utils/types';
import { switchTabDispatch } from '../../services/actions/switchTab';

const BurgerIngredients: FC = () => {

    const { currentTab }: {currentTab: string} = useSelector(state => state.switchTab)

    const dispatch = useDispatch()
    const tabSwitcher = (tab: string): void => {dispatch(switchTabDispatch(tab));}
    const bunRef = useRef<HTMLDivElement>(null)
    const sauceRef = useRef<HTMLDivElement>(null)
    const mainRef = useRef<HTMLDivElement>(null)
    const ingredientBlockRef = useRef<HTMLDivElement>(null)
    const categoryScroll = (): void => {
        const bunRect = bunRef.current?.getBoundingClientRect();
        const sauceRect = sauceRef.current?.getBoundingClientRect();
        const mainRect = mainRef.current?.getBoundingClientRect();
    
        const blockTop = ingredientBlockRef.current?.getBoundingClientRect()?.top || 0;
    
        if (blockTop >= bunRect?.top! && blockTop < sauceRect?.top!) {
            tabSwitcher('bun');
        } else if (blockTop >= sauceRect?.top! && blockTop < mainRect?.top!) {
            tabSwitcher('sauce');
        } else if (blockTop >= mainRect?.top!) {
            tabSwitcher('main');
        }
    }

    const tabClickHandler = (ref: RefObject<HTMLElement> | null, tab: string) => {
        if (ref && ref.current)
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
                <BurgerIngredientsCategory type="bun" ref={bunRef} categoryHeading="Булки"/>
                <BurgerIngredientsCategory type="sauce" ref={sauceRef} categoryHeading="Соусы"/>
                <BurgerIngredientsCategory type="main" ref={mainRef} categoryHeading="Начинки"/> 
            </div>
        </section>
    )
}

export default BurgerIngredients