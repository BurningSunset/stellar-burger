import styles from './login.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { loginAsync } from '../../utils/api'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialState = {
        email: '',
        password: ''
    }
        const [values, setValues] = useState(initialState);
        const onChange = e => {
          const { name, value } = e.target;
          setValues({...values, [name]: value});
        };

        const onSubmit = async (e) => {
            e.preventDefault();
            await dispatch(loginAsync(values));
            navigate('/'); 
        }
    return (
        <form className={`${styles.login}`} onSubmit={onSubmit}> 
            <h2 className={`mb-6`}>
                Вход
            </h2>
            <Input 
                type='email'
                placeholder='E-mail'
                extraClass='mb-6'
                name={'email'}
                value={values.email}
                onChange={onChange}
            />
            <PasswordInput
                extraClass='mb-6' 
                value={values.password}
                name={'password'}
                onChange={onChange}
            />
            <Button
                type="primary" 
                size="medium"
                extraClass='mb-20'
                htmlType='submit'
            >
                Войти
            </Button>
            <p className="text text_type_main-default text_color_inactive mb-6">Вы - новый пользователь? 
                <Link className={styles.a} to={'/register'}>
                    Зарегистрироваться
                </Link>
            </p>
            <p className="text text_type_main-default text_color_inactive">Забыли пароль? 
                <Link className={styles.a} to={'/forgot-password'}>
                    Восстановить пароль
                </Link>
            </p>
        </form>
    )
}

export default LoginPage