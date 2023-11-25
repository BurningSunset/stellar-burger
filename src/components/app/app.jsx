import { React, useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import {constructorList} from '../../utils/data.js'
import styles from './app.module.css';
import useApi from '../../hooks/useApi';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';


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

  const [isOrderModalVisible, setOrderModalVisible] = useState(false);
  const [isIngredientModalVisible, setIngredientModalVisible] = useState(false);
  const [modalOrderData, setModalOrderData] = useState({})
  const [modalIngredientData, setModalIngredientData] = useState({})
 

  useEffect(() => {
    setModalOrderData(OrderDetails)
  },[])
  console.log(modalOrderData)

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

  return (
    <div className={styles.app}>
      <Modal
        title='Тест'
        isOverlayVisible={isIngredientModalVisible} 
        onHide={closeIngredientModal}>
        <div>Тест тест тест</div>
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
          ingredients={ingredientsData}
          showModal={showIngredientModal}
        />
        {/* пока что мы не можем динамично изменять данные для конструктора */}
        {/* мб когда будет реализован drag n drop сделать массив, в который добавляются */}
        {/* ингредиенты? первый элемент будет фиксированно булочкой */}
        <BurgerConstructor 
          ingredients={ingredientsData} 
          img={constructorList[0].image}
          showModal={showOrderModal}
        />
      </main>
    </div>
  );
}

export default App;
