import { useEffect } from "react";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import styles from "./home.module.css";

import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/getIngredients";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { PropTypes } from "react";

const Home = ({showOrderModal}) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div className={styles.home}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor showModal={showOrderModal}/>
        </DndProvider>
    </div>
  );
}

Home.propTypes = {
    showModal: PropTypes.func.isRequired
}

export default Home;
