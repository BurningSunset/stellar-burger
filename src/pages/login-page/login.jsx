import styles from './login.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'

const LoginPage = () => {
    return (
        <div className={`${styles.login}`}> 
            <h2 className={`mb-6`}>
                Вход
            </h2>
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
            <p className="text text_type_main-default text_color_inactive mb-6">Вы - новый пользователь? <a className={styles.a} href=''>Зарегистрироваться</a></p>
            <p className="text text_type_main-default text_color_inactive">Забыли пароль? <a className={styles.a} href=''>Восстановить пароль</a></p>
        </div>
    )
}

export default LoginPage