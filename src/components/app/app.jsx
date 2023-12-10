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

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  // создаём экземпляр useApi
  const api = useApi(url)
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
        <IngredientDetails /> 
      </Modal>
      <Modal
        isOverlayVisible={isOrderModalVisible} 
        onHide={closeOrderModal}
      >
        <OrderDetails/>
      </Modal>
      <AppHeader />
      <main className={styles.mainDiv}>
				<DndProvider backend={HTML5Backend}>
          <BurgerIngredients 
            showModal={showIngredientModal}
            onIngredientClick={handleIngredientClick}
          />
          <BurgerConstructor 
            showModal={showOrderModal}
          /> 
        </DndProvider>
      </main>
    </div>
  );
}

export default App;
