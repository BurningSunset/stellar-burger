import styles from './ingredient-info-page.module.css'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIngredients } from '../../services/actions/getIngredients'

const IngredientInfoPage = () => {
    const { ingredientId } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getIngredients());
    }, [ingredientId]);
    const { ingredients } = useSelector(state => state.getIngredients)
    const currentIngredient = useMemo(() => ingredients.find(ingredient => ingredient._id === ingredientId))

    return (
        <div className={styles.ingredientContainer}>
            {currentIngredient ? 
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
         : <div className={styles.loader}></div>}
        </div>
    )
}

export default IngredientInfoPage