import { React, useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import {constructorList} from '../../utils/data.js'
import styles from './app.module.css';
import useApi from '../../hooks/useApi';

function App() {
  const url = 'https://norma.nomoreparties.space/api/ingredients'
  // создаём экземпляр useApi
  const api = useApi(url)
  const [ingredientsData, setIngredientsData] = useState([])
  useEffect(() => {
    api.getIngredientList()
    .then((response) => {
      setIngredientsData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.mainDiv}>
        <BurgerIngredients ingredients={ingredientsData}/>
        {/* пока что мы не можем динамично изменять данные для конструктора */}
        {/* мб когда будет реализован drag n drop сделать массив, в который добавляются */}
        {/* ингредиенты? первый элемент будет фиксированно булочкой */}
        <BurgerConstructor ingredients={ingredientsData} img={constructorList[0].image}/>
      </main>
    </div>
  );
}

export default App;
