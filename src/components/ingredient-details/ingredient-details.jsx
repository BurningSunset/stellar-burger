import styles from './ingredient-details.module.css'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ingredientType from '../../utils/PropTypes'

const IngredientDetails = (props) => {
    const [ingredient, setIngredient] = useState(null)

    useEffect(() => {
        const ingrs = props.data.find(item => item._id === props.id)
        setIngredient(ingrs)
    },[props.data, props.id])
    return (
        <div className={styles.ingredientContainer}>
            {ingredient ? (
                <>
                    <img className={styles.ingredientImage} src={ingredient.image} alt={ingredient.name}></img>
                    <p className="text text_type_main-medium mb-8 mt-4">{ingredient.name}</p>
                    <div className={`text text_type_main-default text_color_inactive ${styles.ingredientParamList}`}>
                        <div className={`mr-5 ${styles.ingredientParam}`}>
                            <p>Калории,ккал</p>
                            <p className="text text_type_digits-default">{ingredient.calories}</p>
                        </div>
                        <div className={`mr-5 ${styles.ingredientParam}`}>
                            <p>Белки,г</p>
                            <p className="text text_type_digits-default">{ingredient.proteins}</p>
                        </div>
                        <div className={`mr-5 ${styles.ingredientParam}`}>
                            <p>Жиры,г</p>
                            <p className="text text_type_digits-default">{ingredient.fat}</p>
                        </div>
                        <div className={styles.ingredientParam}>
                            <p>Углеводы,г</p>
                            <p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

// IngredientDetails.propTypes = {
//     data: PropTypes.arrayOf(ingredientType).isRequired,
//     // указал второй тип object, потому что при инициализации
//     // у нас пропс id - пустой объект
//     // потом становится string
//     id: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.object,
//       ]).isRequired
// }

export default IngredientDetails
