import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import {ingredientsList, constructorList} from '../../utils/data.js'
import styles from './app.module.css';


function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.mainDiv}>
        <BurgerIngredients ingredients={ingredientsList}/>
        <BurgerConstructor ingredients={constructorList} img={constructorList[0].image}/>
      </div>
    </div>
  );
}

export default App;
