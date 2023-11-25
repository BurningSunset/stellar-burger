import React from 'react';
import styles from './burger-ingredients-category.module.css'
import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item';
import ingredientType from '../../utils/PropTypes'
import PropTypes from 'prop-types'

const BurgerIngredientsCategory = ({ingredients, type, categoryHeading, showModal, onIngredientClick}) => {
    const filteredData = ingredients.filter(item => item.type === type)
    return (
        <div>
            <h3 className='text text_type_main-medium mb-6'>{categoryHeading}</h3>
            <div className={`mb-10 ${styles.block}`}>
                {filteredData.map((item) => (
                    <BurgerIngredientsItem
                        onClick={onIngredientClick}
                        showModal={showModal}  
                        key={item._id}
                        id={item._id}
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

BurgerIngredientsCategory.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
    type: PropTypes.string.isRequired,
    categoryHeading: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
    onIngredientClick: PropTypes.func.isRequired,
}

export default BurgerIngredientsCategory