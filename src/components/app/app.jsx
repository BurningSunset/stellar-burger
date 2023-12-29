import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import Modal from "../modal/modal";

import IngredientDetails from "../ingredient-details/ingredient-details";
import Home from "../../pages/home-page/home";
import LoginPage from "../../pages/login-page/login";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RegistrerPage from "../../pages/register-page/register";


function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const onHide = () => {
    navigate(-1);
  }

  return (
    <div className={styles.app}>
      <AppHeader />
        <Routes location={background || location}>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegistrerPage />}/>
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/ingredients/:ingredientId' element={<IngredientDetails/>}/>
        </Routes>

        {background && (
          <Routes>
            <Route 
              path='/ingredients/:ingredientId' 
              element={
                <Modal onHide={onHide} >
                  <IngredientDetails 
                  />
                   {console.log('Modal trigger')}
                </Modal>
              }
            />
          </Routes>
        )}
    </div>
  );
}

export default App;
