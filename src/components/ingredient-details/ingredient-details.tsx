import { FC } from 'react';
import styles from './ingredient-details.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

type TIngredientDetailsParams = {
    ingredientId?: string
}

const IngredientDetails: FC = () => {
    // игнор так как по условию спринта
    // можно пока что не типизировать стор
    // @ts-ignore
    let currentIngredient = useSelector((state) => state.currentIngredient.ingredient);
    // @ts-ignore
    let ingredients = useSelector((state) => state.getIngredients.ingredients)
    const { ingredientId }: TIngredientDetailsParams = useParams()

    // срабатывает, если страница открыта не через модалку
    if (!currentIngredient) {
        // структура ингредиента как в одном из функциональных файлов
        // сделать тип также в отдельный файл?
        // @ts-ignore
        currentIngredient = ingredients.find(ingredient => ingredient._id === ingredientId);
        console.log(currentIngredient)
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
