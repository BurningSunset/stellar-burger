import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import {constructorList} from '../../utils/data.js'
import styles from './app.module.css';
import useApi from '../../hooks/useApi';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {url} from '../../utils/api'

import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/getIngredients'

function App() {
  // создаём экземпляр useApi
  const api = useApi(url)
  const [ingredientsData, setIngredientsData] = useState([])
  // useEffect(() => {
  //   api.getIngredientList()
  //   .then((response) => {
  //     setIngredientsData(response.data);
  //   })
  //   .catch(console.error)
  // }, [])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      getIngredients()
    )
  }, [])

  const [isOrderModalVisible, setOrderModalVisible] = useState(false);
  const [isIngredientModalVisible, setIngredientModalVisible] = useState(false);
  const [modalIngredientData, setModalIngredientData] = useState({})

  const showOrderModal = () => {
    setOrderModalVisible(true)
  }

  const closeOrderModal = () => {
    setOrderModalVisible(false)
  }

  const showIngredientModal = () => {
    setIngredientModalVisible(true)
  }

  const closeIngredientModal = () => {
    setIngredientModalVisible(false)
  }

  const handleIngredientClick = (ingredientId) => {
    setModalIngredientData(ingredientId)
  }

  return (
    <div className={styles.app}>
      <Modal
        title='Детали ингредиента'
        isOverlayVisible={isIngredientModalVisible} 
        onHide={closeIngredientModal}
      >
        <IngredientDetails
          id={modalIngredientData}
          data={ingredientsData}
        />
      </Modal>
      <Modal
        isOverlayVisible={isOrderModalVisible} 
        onHide={closeOrderModal}
      >
          {/* child */}
        <OrderDetails 
            id='034536'
        />
      </Modal>
      <AppHeader />
      <main className={styles.mainDiv}>
        <BurgerIngredients 
          showModal={showIngredientModal}
          onIngredientClick={handleIngredientClick}
        />
        {/* пока что мы не можем динамично изменять данные для конструктора */}
        {/* мб когда будет реализован drag n drop сделать массив, в который добавляются */}
        {/* ингредиенты? первый элемент будет фиксированно булочкой */}
        {/* <BurgerConstructor 
          ingredients={ingredientsData} 
          img={constructorList[0].image}
          showModal={showOrderModal}
        /> */}
      </main>
    </div>
  );
}

export default App;
