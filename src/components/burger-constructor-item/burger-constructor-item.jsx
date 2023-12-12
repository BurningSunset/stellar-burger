import styles from './burger-constructor-item.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../utils/PropTypes'
import PropTypes from 'prop-types'
import { swapItems } from '../../services/actions/currentConstructorIngredients'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

const BurgerConstructorItem = ({item, uid, isLocked, extraClass, type, handleClose}) => {
    const ref = useRef(null)
    const dispatch = useDispatch()

    const [, drag] = useDrag({
        type: "sort",
        item: {uid}
    })
    const [, drop] = useDrop({
        accept: "sort",
        drop(item) {
            if (uid !== item.uid) {
                dispatch(
                    swapItems(uid, item.uid)
                )
            }
        }
    })
    drag(drop(ref))
    return (
        <div className={styles.itemBlock} ref={ref}>
            {isLocked !== true &&
                <DragIcon type="primary" />
            }
            {!item ? ( 
                    <ConstructorElement
                        extraClass={extraClass ? `${extraClass} ml-2 ${styles.spanOnMiddle}` : `ml-2 ${styles.spanOnMiddle}`}
                        text='Заглушка'
                        price='Заглушка'
                        thumbnail='Заглушка'
                        type={type}
                        isLocked={isLocked}
                    /> ) : (
                    <ConstructorElement
                        extraClass={extraClass ? `${extraClass} ml-2 ${styles.spanOnMiddle}` : `ml-2 ${styles.spanOnMiddle}`}
                        text={type === 'top' ? `${item.name} (верх)` : type === 'bottom' ? `${item.name} (низ)` : item.name}
                        price={item.price}
                        thumbnail={item.image}
                        type={type}
                        isLocked={isLocked}
                        handleClose={handleClose && type !== 'bun' ? () => handleClose({item}) : undefined}
                    />
                )
            }
        </div>
    )
}

BurgerConstructorItem.propTypes = {
    item: ingredientType,
    uid: PropTypes.string,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    extraClass: PropTypes.string,
    handleClose: PropTypes.func
}

export default BurgerConstructorItem