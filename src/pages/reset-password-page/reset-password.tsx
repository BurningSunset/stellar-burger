import styles from './reset-password.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { forgotTokenDelete, reset } from '../../utils/api'
import { Link, useNavigate } from 'react-router-dom'
import { Dispatch } from 'redux'

const ResetPasswordPage: FC = () => {
    const navigate = useNavigate()
    const dispatch: Dispatch<any> = useDispatch()
    const initialState = {
        password: '',
        token: ''
    }
        const [values, setValues] = useState(initialState);
        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setValues({...values, [name]: value});
        };

        const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            try {
                await dispatch(reset(values))
                setValues(initialState)
                forgotTokenDelete()
                navigate('/login')
            } catch (error) {
                console.error("Ошибка при восстановлении пароля:", error);
            }
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
            <p className="text text_type_main-default text_color_inactive mb-6">Вспомнили пароль? 
                <Link className={styles.a} to={'/login'}>
                        Войти
                </Link>
            </p>
        </div>
    )
}

export default ResetPasswordPage