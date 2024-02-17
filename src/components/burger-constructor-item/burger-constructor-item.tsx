import styles from './burger-constructor-item.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { swapItems } from '../../services/actions/currentConstructorIngredients'
import { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { TIngredient, HandleCloseFunction, useDispatch } from '../../utils/types';

type Item = {
    item?: TIngredient;
    uid?: string;
    isLocked?: boolean;
    extraClass?: string;
    type?: 'top' | 'bottom';
    handleClose?: HandleCloseFunction
}

const BurgerConstructorItem: FC<Item> = ({item, uid, isLocked, extraClass, type, handleClose}) => {
    const ref = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    const [, drag] = useDrag({
        type: "sort",
        item: {uid}
    })
    const [, drop] = useDrop({
        accept: "sort",
        drop(item: Item) {
            if (uid !== item.uid) {
                dispatch(
                    swapItems(uid, item.uid)
                )
            }
        }
    })
    drag(drop(ref))
    return (
        <div className={styles.itemBlock} ref={ref} data-consitem={uid}>
            {isLocked !== true &&
                <DragIcon type="primary" />
            }
            {!item ? ( 
                    <ConstructorElement
                        extraClass={extraClass ? `${extraClass} ml-2 ${styles.spanOnMiddle}` : `ml-2 ${styles.spanOnMiddle}`}
                        text='Заглушка'
                        price={0}
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
                        handleClose={handleClose && !type ? () => handleClose(item) : undefined}
                    />
                )
            }
        </div>
    )
}

export default BurgerConstructorItem