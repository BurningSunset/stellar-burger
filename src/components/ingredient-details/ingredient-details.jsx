import styles from './ingredient-details.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getIngredients } from '../../services/actions/getIngredients';
import { useEffect } from 'react';
const IngredientDetails = () => {
    const dispatch = useDispatch();

    let currentIngredient = useSelector((state) => state.currentIngredient.ingredient);
    let ingredients = useSelector((state) => state.getIngredients.ingredients)
    const {ingredientId} = useParams()

    // срабатывает, если в сторе нет ингредиентов (например, 
    // когда мы не нажали f5 на странице с модалкой, )
    useEffect(() => {
        if (!ingredients || ingredients.length === 0) {
          dispatch(getIngredients());
        }
      }, [dispatch, ingredients]);

    // срабатывает, если страница открыта не через модалку
    if (!currentIngredient) {
        currentIngredient = ingredients.find(ingredient => ingredient._id === ingredientId);
    }

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

export default IngredientDetails
