import styles from './register.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../utils/api'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Dispatch } from 'redux'

const RegistrationPage: FC = () => {
    const navigate = useNavigate()
    const dispatch: Dispatch<any> = useDispatch()
    const initialState = {
        name: '',
        email: '',
        password: ''
    }
        const [values, setValues] = useState(initialState);
        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setValues({...values, [name]: value});
        };

        const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            try {
                await dispatch(register(values))
                setValues(initialState)
                navigate('/'); 
            } catch (error) {
                console.error("Ошибка при регистрации:", error);
            }
        }
    return (
        <form className={`${styles.register}`} onSubmit={onSubmit}> 
            <h2 className={`mb-6`}>
                Регистрация
            </h2>
            <Input 
                type='text'
                placeholder='Имя'
                extraClass='mb-6'
                name={'name'}
                value={values.name}
                onChange={onChange}
            />
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
                name={'password'}
                value={values.password}
                onChange={onChange}
            />
            <Button
                type="primary" 
                size="medium"
                extraClass='mb-20'
                htmlType='submit'
            >
                Зарегистрироваться
            </Button>
            <p className="text text_type_main-default text_color_inactive mb-6">Уже зарегистрированы? 
                <Link className={styles.a} to={'/login'}>
                    Войти
                </Link>
            </p>
        </form>
    )
}

export default RegistrationPage