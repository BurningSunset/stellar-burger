import { FC } from "react";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import styles from "./home.module.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type HomeProps = {
  showOrderModal: () => void
}

const Home: FC<HomeProps> = ({showOrderModal}) => {

  return (
    <div className={styles.home}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor showModal={showOrderModal}/>
        </DndProvider>
    </div>
  );
}

export default Home;
