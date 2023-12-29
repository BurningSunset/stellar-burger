import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import Modal from "../modal/modal";

import IngredientDetails from "../ingredient-details/ingredient-details";
import Home from "../../pages/home/home";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  useEffect(() => {
    navigate()
  },[])

  return (
    <div className={styles.app}>
      <AppHeader />
        <Routes location={background || location}>
          <Route path='/' element={<Home />}/>
          <Route path='/ingredients/:ingredientId' element={<IngredientDetails/>}/>
        </Routes>

        {background && (
          <Routes>
            <Route 
              path='/ingredients/:ingredientId' 
              element={
                <Modal>
                  <IngredientDetails />
                </Modal>
              }
            />
          </Routes>
        )}
    </div>
  );
}

export default App;
