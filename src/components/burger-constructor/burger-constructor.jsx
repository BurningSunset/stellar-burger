import React from 'react';
import styles from './burger-constructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
const BurgerConstructor= ({ingredients, img}) => {
    const filteredData = ingredients.filter(item => item.type !== "bun")
    return (
        <section className={`pt-25 ${styles.section}`}>
            <h2 className={`text text_type_main-large ${styles.h2}`}>Конструктор</h2>
            <div className={`${styles.block}`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={img}
                />
                {filteredData.map((item, index) => (
                    <BurgerConstructorItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={img}
                />
            </div>
        </section>
    )
}

export default BurgerConstructor