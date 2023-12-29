import styles from './register.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'

const RegistrationPage = () => {
    return (
        <div className={`${styles.register}`}> 
            <h2 className={`mb-6`}>
                Регистрация
            </h2>
            <Input 
                type='text'
                placeholder='Имя'
                extraClass='mb-6'
            />
            <Input 
                type='email'
                placeholder='E-mail'
                extraClass='mb-6'
            />
            <PasswordInput
                extraClass='mb-6' 
            />
            <Button
                type="primary" 
                size="medium"
                extraClass='mb-20'
            >
                Войти
            </Button>
            <p className="text text_type_main-default text_color_inactive mb-6">Уже зарегистрированы? <a className={styles.a} href=''>Войти</a></p>
        </div>
    )
}

export default RegistrationPage