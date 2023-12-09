import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
import ingredientType from '../../utils/PropTypes'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../utils/itemTypes';
import { ADD_ITEM, DELETE_ITEM, SET_BUN } from '../../services/actions/currentConstructorIngredients'
import { useDispatch } from 'react-redux';

const BurgerConstructor = ({ showModal }) => {
    const { bun, ingredientList } = useSelector(state => state.currentConstructorIngredients)

    const [{ canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.INGREDIENT,
        drop (ingredient) {
            acceptIngredient(ingredient)
        },
        collect: (monitor) => ({
          canDrop: monitor.canDrop(),
        }),
      }))
      const dispatch = useDispatch()
      const acceptIngredient = (item) => {
        const ingredient = {
            ...item.item,
            uid: uuidv4(),
        }
        if (ingredient.type === 'bun') {
            dispatch({
                type: SET_BUN,
                item: ingredient
            })
        } else if (ingredient.type !== 'bun') {
            dispatch({
                type: ADD_ITEM,
                item: ingredient
            })
        }
      }

      const handleClose = (ingredient) => {
        console.log(ingredient.item.uid ? ingredient.item.uid : ingredient)
        dispatch({
            type: DELETE_ITEM,
            uid: ingredient.item.uid
        })
      }

    return (
        <section className={`pt-25 ${styles.section} ml-4 mr-4`}>
            <div ref={drop} className={`${styles.block}`}>
                {bun && <BurgerConstructorItem
                    extraClass='ml-8'
                    type="top"
                    isLocked
                    item={bun}
                />}
                {!bun && <BurgerConstructorItem
                    extraClass='ml-8'
                    type="top"
                    isLocked
                />}
                <div className={`mt-4 mb-4 ${styles.ingredientBlock}`}>
                    {(ingredientList.length > 0) && ingredientList?.map((item, index) => (
                    <BurgerConstructorItem
                        uid={item.uid}
                        key={index}
                        item={item}
                        handleClose={handleClose}
                    />
                ))}
                </div>
                {bun && <BurgerConstructorItem
                    extraClass='ml-8'
                    type="bottom"
                    isLocked
                    item={bun}
                />}
                {!bun && <BurgerConstructorItem
                    extraClass='ml-8'
                    type="bottom"
                    isLocked
                />}
            </div>
            <div className={`${styles.purchase} mt-10 mr-10 mb-5`}>
                <span className={`${styles.itemPrice} mr-10`}>
                    <p className="text text_type_digits-medium mr-1 mb-2">{1000}
                    <CurrencyIcon type="primary" /></p>
                </span>
                <Button onClick={showModal} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

// BurgerConstructor.propTypes = {
//     ingredients: PropTypes.arrayOf(ingredientType).isRequired,
//     img: PropTypes.string.isRequired, 
//     showModal: PropTypes.func.isRequired
// }

export default BurgerConstructor