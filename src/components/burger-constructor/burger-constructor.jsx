import React from 'react';
import styles from './burger-constructor.module.css'
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
const BurgerConstructor= ({ingredients, img}) => {
    const filteredData = ingredients.filter(item => item.type !== "bun")
    return (
        <section className={`pt-25 ${styles.section} ml-4 mr-4`}>
            <div className={`${styles.block}`}>
                <BurgerConstructorItem
                    extraClass='ml-8'
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
                    extraClass='ml-8'
                    type="bottom"
                    isLocked={true}
                    name="Краторная булка N-200i (низ)"
                    price={200}
                    image={img}
                />
            </div>
            <div className={`${styles.purchase} mt-10 mr-10 mb-5`}>
                <span className={`${styles.itemPrice} mr-10`}>
                    <p className="text text_type_digits-medium mr-1 mb-2">{1000}
                    <CurrencyIcon type="primary" /></p>
                </span>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

export default BurgerConstructor