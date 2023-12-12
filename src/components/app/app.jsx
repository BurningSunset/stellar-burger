import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/getIngredients";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const [isOrderModalVisible, setOrderModalVisible] = useState(false);
  const [isIngredientModalVisible, setIngredientModalVisible] = useState(false);

  const showOrderModal = () => {
    setOrderModalVisible(true);
  };

  const closeOrderModal = () => {
    setOrderModalVisible(false);
  };

  const showIngredientModal = () => {
    setIngredientModalVisible(true);
  };

  const closeIngredientModal = () => {
    setIngredientModalVisible(false);
  };


  return (
    <div className={styles.app}>
      <Modal
        title="Детали ингредиента"
        isOverlayVisible={isIngredientModalVisible}
        onHide={closeIngredientModal}
      >
        <IngredientDetails />
      </Modal>
      <Modal isOverlayVisible={isOrderModalVisible} onHide={closeOrderModal}>
        <OrderDetails />
      </Modal>
      <AppHeader />
      <main className={styles.mainDiv}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients
            showModal={showIngredientModal}
          />
          <BurgerConstructor showModal={showOrderModal} />
        </DndProvider>
      </main>
    </div>
  );
}

export default App;
