import { FC } from 'react';
import styles from './ingredient-details.module.css'
import { useParams } from 'react-router-dom';
import { TIngredient, useSelector } from '../../utils/types';

const IngredientDetails: FC = () => {
    let currentIngredient: TIngredient | null = useSelector((state) => state.currentIngredient.ingredient);
    let ingredients: TIngredient[] = useSelector((state) => state.getIngredients.ingredients);
    const { ingredientId }: {ingredientId?: string} = useParams()

    // срабатывает, если страница открыта не через модалку
    if (!currentIngredient) {
        currentIngredient = ingredients.find((ingredient: TIngredient) => ingredient._id === ingredientId) as TIngredient;
    }

    return (
        <div className={styles.ingredientContainer}>
            <h2 className="text text_type_main-medium">Детали ингредиента</h2>
            {currentIngredient ? (
                <>  
                    <img className={styles.ingredientImage} src={currentIngredient.image_large} alt={currentIngredient.name}></img>
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