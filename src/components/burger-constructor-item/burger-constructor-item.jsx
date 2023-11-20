import React from 'react';
import styles from './burger-constructor-item.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructorItem = (props) => {
    return (
        <ConstructorElement
            extraClass={props.extraClass}
            text={props.name}
            price={props.price}
            thumbnail={props.image}
            type={props.type}
            isLocked={props.isLocked}
        />
    )
}
export default BurgerConstructorItem