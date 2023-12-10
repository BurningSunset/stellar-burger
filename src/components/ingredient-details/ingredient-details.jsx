import styles from './ingredient-details.module.css'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ingredientType from '../../utils/PropTypes'
import { useSelector } from 'react-redux'

const IngredientDetails = () => {

    const currentIngredient = useSelector((state) => state.currentIngredient.ingredient);

    return (
        <div className={styles.ingredientContainer}>
            {currentIngredient ? (
                <>
                    <img className={styles.ingredientImage} src={currentIngredient.image} alt={currentIngredient.name}></img>
                    <p className="text text_type_main-medium mb-8 mt-4">{currentIngredient.name}</p>
                    <div className={`text text_type_main-default text_color_inactive ${styles.ingredientParamList}`}>
                        <div className={`mr-5 ${styles.ingredientParam}`}>
                            <p>Калории,ккал</p>
                            <p className="text text_type_digits-default">{currentIngredient.calories}</p>
                        </div>
                        <div className={`mr-5 ${styles.ingredientParam}`}>
                            <p>Белки,г</p>
                            <p className="text text_type_digits-default">{currentIngredient.proteins}</p>
                        </div>
                        <div className={`mr-5 ${styles.ingredientParam}`}>
                            <p>Жиры,г</p>
                            <p className="text text_type_digits-default">{currentIngredient.fat}</p>
                        </div>
                        <div className={styles.ingredientParam}>
                            <p>Углеводы,г</p>
                            <p className="text text_type_digits-default">{currentIngredient.carbohydrates}</p>
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
