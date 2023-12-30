import styles from './forgot-password.module.css'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { forgotAsync, forgotTokenConfirm } from '../../utils/api'

const ForgotPasswordPage = () => {
    const dispatch = useDispatch()
    const initialState = {
        name: '',
        email: '',
        password: ''
    }
        const [values, setValues] = useState(initialState);
        const onChange = e => {
          const { name, value } = e.target;
          setValues({...values, [name]: value});
        };

        const onSubmit = e => {
            e.preventDefault()
            dispatch(forgotAsync(values))
            setValues(initialState)
            dispatch(forgotTokenConfirm())
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