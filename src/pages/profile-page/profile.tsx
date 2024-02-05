import styles from './profile.module.css'
import { logout } from '../../utils/api'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from '../../utils/types'
import ProfileForm from '../../components/profile-form/profile-form'
import FeedOrders from '../../components/feed-orders/feed-orders'
import { wsConnectionClosedDispatch, wsConnectionStartDispatch } from '../../services/actions/wsActions'
import { useEffect } from 'react'

const ProfilePage = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation();
const isOrdersPage = location.pathname.includes('/profile/orders');
    useEffect(() => {
        dispatch(wsConnectionStartDispatch('/'))
        return () => {
            dispatch(wsConnectionClosedDispatch())
          }
    }, [dispatch])

    const logoutHandler = async () => {
        try {
            await dispatch(logout())
            navigate('/')
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        }
    }

    return (
        <div className={`pt-20 ${styles.pageContainer} ${isOrdersPage ? styles.ordersPage : ''}`}>
            <div className={`${styles.menu}`}>
                <ul>
                    <Link to={'/profile'}>
                        <li className={`text text_type_main-medium ${isOrdersPage ? `text_color_inactive` : ''} `}>Профиль</li>
                    </Link>
                    <Link to={'/profile/orders'}>
                        <li className={`text text_type_main-medium ${!isOrdersPage ? `text_color_inactive` : ''}`}>История заказов</li>
                    </Link>
                    <li className="text text_type_main-medium text_color_inactive" onClick={logoutHandler}>Выход</li>
                </ul>
                {!isOrdersPage && (
                    <p className={`${styles.pInActive} mt-20 text text_type_main-default`}>В этом разделе вы можете изменить свои персональные данные</p>
                )}
            </div>
            <Routes>
                <Route
                    path='/'
                    element={<ProfileForm />}
                />
                <Route
                    path='/orders'
                    element={<FeedOrders statusToggle={true}/>}
                />
            </Routes>
        </div>
    )
}

export default ProfilePage