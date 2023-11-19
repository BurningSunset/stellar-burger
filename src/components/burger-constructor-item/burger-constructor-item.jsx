import React from 'react';
import styles from './burger-constructor-item.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructorItem = (props) => {
    return (
        <ConstructorElement
            text={props.name}
            price={props.price}
            thumbnail={props.image}
        />
    )
}
export default BurgerConstructorItem