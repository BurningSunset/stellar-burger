import styles from './profile.module.css'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { logout, patchUser } from '../../utils/api'
import { Link, useNavigate } from 'react-router-dom'

const ProfilePage = () => {

const dispatch = useDispatch()
const navigate = useNavigate()
const { user } = useSelector((state) => state.user)

let initialState = {
    name: user.name,
    email: user.email,
    password: ''
}

    const [values, setValues] = useState(initialState);
    const onChange = e => {
      const { name, value } = e.target;
      setValues({...values, [name]: value});
    };

    const onSubmit = e => {
        e.preventDefault()
        dispatch(patchUser(values))
        initialState = {
            name: values.name,
            email: values.email,
            password: ''
        }
        setValues(initialState)
    }

    const cancel = () => {
        setValues(initialState)
    }

    const logoutHandler = async () => {
        await dispatch(logout())
        navigate('/')
    }

    return (
        <div className={`pt-20 ${styles.pageContainer}`}>
            <div className={`${styles.menu}`}>
                <ul>
                    <li className="text text_type_main-medium">Профиль</li>
                    <Link to={'/order'}>
                        <li className="text text_type_main-medium text_color_inactive">История заказов</li>
                    </Link>
                    <li className="text text_type_main-medium text_color_inactive" onClick={logoutHandler}>Выход</li>
                </ul>
                <p className={`${styles.pInActive} mt-20 text text_type_main-default`}>В этом разделе вы можете изменить свои персональные данные</p>
            </div>

            <form className={``} onSubmit={onSubmit}>
                <Input 
                    type='text'
                    placeholder='Имя'
                    name={'name'}
                    value={values.name}
                    onChange={onChange}
                    extraClass='mb-6'
                    icon='EditIcon'
                />
                <Input 
                    type='email'
                    placeholder='Логин'
                    name={'email'}
                    value={values.email}
                    onChange={onChange}
                    extraClass='mb-6'
                    icon='EditIcon'
                />
                <PasswordInput
                    name={'password'}
                    value={values.password}
                    onChange={onChange}
                />
                {values.name !== initialState.name || values.email !== initialState.email || values.password !== initialState.password ? (
                    <div className={`${styles.buttonContainer} mt-10`}>
                        <Button 
                            onClick={cancel}
                            htmlType='reset'
                        >
                            Отменить
                        </Button>
                        <Button 
                            htmlType='submit'
                        >
                            Сохранить изменения
                        </Button>
                    </div>
                    ) : (
                    <></>
                    )}
            </form>
        </div>
    )
}

export default ProfilePage