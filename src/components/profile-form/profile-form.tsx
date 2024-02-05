import styles from './profile-form.module.css'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { ChangeEvent, FormEvent, useState } from 'react'
import { logout, patchUser } from '../../utils/api'
import { Link, useNavigate } from 'react-router-dom'
import { User, useDispatch, useSelector } from '../../utils/types'

const ProfileForm = () => {
const dispatch = useDispatch()
const navigate = useNavigate()


const { user }: {user: User | null} = useSelector((state) => state.user)

let initialState = {
    name: user?.name || '',
    email: user?.email || '',
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
           await dispatch(patchUser(values))
            initialState = {
                name: values.name,
                email: values.email,
                password: ''
            }
            setValues(initialState)
            alert('Данные успешно обновлены')
        } catch (error) {
            console.error("Ошибка при изменении данных пользователя:", error);
        }
    }

    const cancel = () => {
        setValues(initialState)
    }

    return (
        <section className={``}>
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
        </section>
    )
}

export default ProfileForm