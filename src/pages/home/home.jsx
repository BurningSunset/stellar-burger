import { useEffect, useState } from "react";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import OrderDetails from "../../components/order-details/order-details";
import styles from "./home.module.css";

import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/getIngredients";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

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
    navigate(-1);
    setIngredientModalVisible(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div className={styles.home}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients
            showModal={showIngredientModal}
          />
          <BurgerConstructor showModal={showOrderModal} />
        </DndProvider>
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
    </div>
  );
}

export default Home;
