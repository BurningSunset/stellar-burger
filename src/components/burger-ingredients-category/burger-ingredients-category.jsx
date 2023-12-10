import styles from './burger-ingredients-category.module.css'
import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item';
import ingredientType from '../../utils/PropTypes'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { forwardRef } from 'react';
const BurgerIngredientsCategory = forwardRef(({type, categoryHeading, showModal}, ref) => {
    const { ingredients } = useSelector(state => state.getIngredients)
    const filteredData = ingredients.filter(item => item.type === type)

    return (
        <div>
            <h3 className='text text_type_main-medium mb-6' ref={ref}>{categoryHeading}</h3>
            <div className={`mb-10 ${styles.block}`}>
                {filteredData.map((item) => (
                    <BurgerIngredientsItem
                        showModal={showModal}  
                        item={item}
                        key={item._id}
                    />
                ))}
            </div>
        </div>
    )
}
)

BurgerIngredientsCategory.propTypes = {
    type: PropTypes.string.isRequired,
    categoryHeading: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
}
export default BurgerIngredientsCategory