import React from 'react';
import styles from './burger-ingredients-category.module.css'
import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item';

const BurgerIngredientsCategory = ({ingredients, type, categoryHeading, showModal}) => {
    const filteredData = ingredients.filter(item => item.type === type)
    return (
        <div>
            <h3 className='text text_type_main-medium mb-6'>{categoryHeading}</h3>
            <div className={`mb-10 ${styles.block}`}>
                {filteredData.map((item) => (
                    <BurgerIngredientsItem
                        showModal={showModal}  
                        key={item._id}
                        counterValue = {0}
                        ingImage = {item.image}
                        price = {item.price}
                        name = {item.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default BurgerIngredientsCategory