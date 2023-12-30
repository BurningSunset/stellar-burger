import styles from './reset-password.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { forgotTokenDelete, resetAsync } from '../../utils/api'
const ResetPasswordPage = () => {

    const dispatch = useDispatch()
    const initialState = {
        password: '',
        token: ''
    }
        const [values, setValues] = useState(initialState);
        const onChange = e => {
          const { name, value } = e.target;
          setValues({...values, [name]: value});
        };

        const onSubmit = e => {
            e.preventDefault()
            dispatch(resetAsync(values))
            setValues(initialState)
            forgotTokenDelete()
        }

    return (
        <div className={`${styles.reset}`}> 
            <h2 className={`mb-6`}>
                Восстановление пароля
            </h2>
            <form onSubmit={onSubmit}>
                <PasswordInput 
                    placeholder='Введите новый пароль'
                    extraClass='mb-6'
                    name={'password'}
                    value={values.password}
                    onChange={onChange}
                />
                <Input 
                    type='text'
                    placeholder='Введите код из письма'
                    extraClass='mb-6'
                    name={'token'}
                    value={values.token}
                    onChange={onChange}
                />
                <Button
                    type="primary" 
                    size="medium"
                    extraClass='mb-20'
                    htmlType='submit'
                >
                    Сохранить
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive mb-6">Вспомнили пароль? <a className={styles.a} href=''>Войти</a></p>
        </div>
    )
}

export default ResetPasswordPage