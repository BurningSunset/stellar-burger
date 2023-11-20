import React from 'react';
import styles from './burger-constructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
const BurgerConstructor= ({ingredients, img}) => {
    const filteredData = ingredients.filter(item => item.type !== "bun")
    return (
        <section className={`pt-25 ${styles.section}`}>
            <div className={`${styles.block}`}>
                <BurgerConstructorItem
                    type="top"
                    isLocked={true}
                    name="Краторная булка N-200i (верх)"
                    price={200}
                    image={img}
                />
                <div className={`mt-4 mb-4 ${styles.ingredientBlock}`}>
                    {filteredData.map((item, index) => (
                    <BurgerConstructorItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
                </div>
                <BurgerConstructorItem
                    type="bottom"
                    isLocked={true}
                    name="Краторная булка N-200i (низ)"
                    price={200}
                    image={img}
                />
            </div>
        </section>
    )
}

export default BurgerConstructor