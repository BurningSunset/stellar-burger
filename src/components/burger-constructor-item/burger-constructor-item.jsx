import styles from './burger-constructor-item.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types'

const BurgerConstructorItem = ({item, isLocked, extraClass, type, handleClose}) => {
    return (
        <div className={styles.itemBlock}>
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
                        text={item.name}
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

// BurgerConstructorItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//     type: PropTypes.string,
//     isLocked: PropTypes.bool,
//     extraClass: PropTypes.string
// }

export default BurgerConstructorItem