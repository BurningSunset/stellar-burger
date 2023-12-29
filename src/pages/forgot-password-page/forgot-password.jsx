import styles from './forgot-password.module.css'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'

const ForgotPasswordPage = () => {
    return (
        <div className={`${styles.forgot}`}> 
            <h2 className={`mb-6`}>
                Восстановление пароля
            </h2>
            <Input 
                type='email'
                placeholder='Укажите e-mail'
                extraClass='mb-6'
            />
            <Button
                type="primary" 
                size="medium"
                extraClass='mb-20'
            >
                Восстановить
            </Button>
            <p className="text text_type_main-default text_color_inactive mb-6">Вспомнили пароль? <a className={styles.a} href=''>Войти</a></p>
        </div>
    )
}

export default ForgotPasswordPage