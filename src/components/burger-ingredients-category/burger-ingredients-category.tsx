import styles from './burger-ingredients-category.module.css'
import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item';
import { useSelector } from 'react-redux';
import { forwardRef, FC, ForwardedRef } from 'react';
import { TIngredient } from '../../utils/types';

type TProps = {
    type: string;
    categoryHeading: string;
    ref: ForwardedRef<HTMLDivElement>
}

const BurgerIngredientsCategory: FC<TProps> = forwardRef(({ type, categoryHeading }, ref) => {
    // игнор так как по условию спринта
    // можно пока что не типизировать стор
    // @ts-ignore
    const { ingredients }: {ingredients: TIngredient[]} = useSelector(state => state.getIngredients)
    const filteredData = ingredients.filter((item: TIngredient) => item.type === type)

    return (
        <div>
            <h3 className='text text_type_main-medium mb-6' ref={ref}>{categoryHeading}</h3>
            <div className={`mb-10 ${styles.block}`}>
                {filteredData.map((item: TIngredient) => (
                    <BurgerIngredientsItem
                        item={item}
                        key={item._id}
                    />
                ))}
            </div>
        </div>
    )
}
)

export default BurgerIngredientsCategory