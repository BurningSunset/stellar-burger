import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../utils/itemTypes';
import { decreaseCounter } from '../../services/actions/getIngredients'
import { submitOrder } from '../../services/actions/createOrder'
import { addIngredient, setBun, deleteIngredient } from '../../services/actions/currentConstructorIngredients';

const BurgerConstructor = ({ showModal }) => {
    const { bun, ingredientList } = useSelector(state => state.currentConstructorIngredients)
    let costPlaceholder = 'Ждём, пока вы добавите ингредиенты...'
    let totalCost = 0

    if (bun && ingredientList.length !== 0 ) {
        totalCost = ingredientList.reduce((sum, ingredient) => sum + ingredient.price, 0);
        totalCost += bun.price * 2
    }
    const [{ canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.INGREDIENT,
        drop (ingredient) {
            acceptIngredient(ingredient);
        },
        collect: (monitor) => ({
          canDrop: monitor.canDrop(),
        }),
      }))
      const dispatch = useDispatch()

      const acceptIngredient = (item) => {
        const ingredient = {
            ...item.item
        }
        if (ingredient.type === 'bun') {
            dispatch(setBun(ingredient))
        } else if (ingredient.type !== 'bun') {
            dispatch(addIngredient(ingredient))
        }
      }

      const handleClose = (ingredient) => {
        dispatch(decreaseCounter(ingredient.item._id))
        dispatch(deleteIngredient(ingredient))
      }

      const clickHandler = () => {
        // соединяем булочки и другие ингредиенты
        let fullIngredientList = [bun, ...ingredientList, bun]
        dispatch(
            submitOrder(fullIngredientList)
          )
          showModal()
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
                    {(ingredientList.length > 0) && ingredientList?.map((item) => (
                    <BurgerConstructorItem
                        key={item.uid}
                        uid={item.uid}
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
            {totalCost !== 0 ? (
                <>
                    <span className={`${styles.itemPrice} mr-10`}>
                        <p className="text text_type_digits-medium mr-1 mb-2">{totalCost}<CurrencyIcon type="primary" /></p>
                    </span>
                    <Button onClick={clickHandler} htmlType="button" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </>
                ) : (
                <span className={`${styles.itemPrice} mr-10`}>
                    <p className="text text_type_main-small">{costPlaceholder}</p>
                </span>
                )}
            </div>
        </section>
    )
}

// BurgerConstructor.propTypes = {
//     showModal: PropTypes.func.isRequired
// }

export default BurgerConstructor