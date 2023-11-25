import React from 'react';
import styles from './burger-constructor-item.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types'

const BurgerConstructorItem = (props) => {
    return (
        <div className={styles.itemBlock}>
            {props.isLocked !== true &&
                <DragIcon type="primary" />
            }
            <ConstructorElement
                extraClass={props.extraClass ? `${props.extraClass} ml-2 ${styles.spanOnMiddle}` : `ml-2 ${styles.spanOnMiddle}`}
                text={props.name}
                price={props.price}
                thumbnail={props.image}
                type={props.type}
                isLocked={props.isLocked}
            />
        </div>

    )
}

BurgerConstructorItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    extraClass: PropTypes.string
}

// <BurgerConstructorItem
// key={index}
// name={item.name}
// price={item.price}
// image={item.image}
// />
// ))}
// </div>
// <BurgerConstructorItem
// extraClass='ml-8'
// type="bottom"
// isLocked={true}
// name="Краторная булка N-200i (низ)"
// price={200}
// image={img}

export default BurgerConstructorItem