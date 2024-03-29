import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import Modal from "../modal/modal";

import IngredientDetails from "../ingredient-details/ingredient-details";
import Home from "../../pages/home-page/home";
import LoginPage from "../../pages/login-page/login";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import RegisterPage from "../../pages/register-page/register";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { checkUserAuth } from "../../utils/api";

import ProfilePage from "../../pages/profile-page/profile";
import FeedPage from "../../pages/feed-page/feed-page";
import OrderDetails from "../order-details/order-details";
import { getIngredients } from "../../services/actions/getIngredients";

import { TBackground, useDispatch } from "../../utils/types";
import OrderInfo from "../order-info/order-info";

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const background: TBackground = location.state && location.state.background;
  const onHide = () => {
    navigate(-1);
  }

  const [isOrderModalVisible, setOrderModalVisible] = useState(false);

  const showOrderModal = () => {
    setOrderModalVisible(true);
  };

  const closeOrderModal = () => {
    setOrderModalVisible(false);
  };

  // Перенесли из home, чтобы во всём приложении были ингредиенты
  // Так как в обратном случае мы в модалках их не видим
  useEffect(() => {
    dispatch(getIngredients());
  }, []);


  return (
    <div className={styles.app}>
      <AppHeader />
        <Routes location={background || location}>
          <Route path='/' element={<Home showOrderModal={showOrderModal}/>}/>
          <Route path='/login' element={<OnlyUnAuth component={<LoginPage />} />}/>
          <Route path='/register' element={<OnlyUnAuth component={<RegisterPage />} />}/>
          <Route path='/reset-password' element={<OnlyUnAuth component={<ResetPasswordPage />} />} />
          <Route path='/forgot-password' element={<OnlyUnAuth component={<ForgotPasswordPage />} />} />
          <Route path='/profile/*' element={<OnlyAuth component={<ProfilePage />} />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/feed/:number' element={<OrderInfo />} />
          <Route path='/ingredients/:ingredientId' element={<IngredientDetails/>}/>
          <Route path='/profile/orders/:number' element={<OnlyAuth component={<OrderInfo />} />} />
        </Routes>

        {background && (
          <Routes>
            <Route 
              path='/ingredients/:ingredientId' 
              element={
                <Modal onHide={onHide} >
                  <IngredientDetails />
                </Modal>
              }
            />
            <Route 
              path='/feed/:number' 
              element={
                <Modal onHide={onHide} >
                  <OrderInfo />
                </Modal>
              }
            />
            <Route 
              path='/profile/orders/:number' 
              element={
                <Modal onHide={onHide} >
                  <OrderInfo />
                </Modal>
              }
            />
          </Routes>
        )}
        {isOrderModalVisible && 
          <Modal onHide={closeOrderModal}>
            <OrderDetails />
          </Modal>
        }
    </div>
  );
}

export default App;


/*

компонент, который принимает массив данных? использовать и для history orders и для feed

для feed:id и для orders:id тоже один компонент? структура одинаковая

*/