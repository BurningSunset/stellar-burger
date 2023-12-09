import styles from './burger-ingredients-category.module.css'
import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item';
import ingredientType from '../../utils/PropTypes'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
const BurgerIngredientsCategory = ({type, categoryHeading, showModal, onIngredientClick}) => {
    const { ingredients } = useSelector(state => state.getIngredients)
    const filteredData = ingredients.filter(item => item.type === type)

    return (
        <div>
            <h3 className='text text_type_main-medium mb-6'>{categoryHeading}</h3>
            <div className={`mb-10 ${styles.block}`}>
                {filteredData.map((item) => (
                    <BurgerIngredientsItem
                        onClick={onIngredientClick}
                        showModal={showModal}  
                        item={item}
                        key={item._id}
                    />
                ))}
            </div>
        </div>
    )
}

BurgerIngredientsCategory.propTypes = {
    type: PropTypes.string.isRequired,
    categoryHeading: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
    onIngredientClick: PropTypes.func.isRequired,
}

export default BurgerIngredientsCategory