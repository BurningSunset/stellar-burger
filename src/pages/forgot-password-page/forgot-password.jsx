import styles from './forgot-password.module.css'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { forgot, forgotTokenConfirm, forgotTokenDelete } from '../../utils/api'

const ForgotPasswordPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const initialState = {
        email: ''
    }
        const [values, setValues] = useState(initialState);
        const onChange = e => {
          const { name, value } = e.target;
          setValues({...values, [name]: value});
        };

        const onSubmit = e => {
            e.preventDefault()
            if (localStorage.getItem("forgotToken")) {
                console.log('trigger!')
                dispatch(forgotTokenDelete())
            }
            dispatch(forgot(values))
            setValues(initialState)
            dispatch(forgotTokenConfirm())
            navigate('/reset-password')
        }
    return (
        <div className={`${styles.forgot}`}> 
            <h2 className={`mb-6`}>
                Восстановление пароля
            </h2>
            <form onSubmit={onSubmit}>
            <Input 
                type='email'
                placeholder='Укажите e-mail'
                extraClass='mb-6'
                name={'email'}
                value={values.email}
                onChange={onChange}
            />
            <Button
                type="primary" 
                size="medium"
                extraClass='mb-20'
                htmlType='submit'
            >
                Восстановить
            </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive mb-6">Вспомнили пароль? 
                <Link className={styles.a} to={'/login'}>
                    Войти
                </Link>
            </p>
        </div>
    )
}

export default ForgotPasswordPage