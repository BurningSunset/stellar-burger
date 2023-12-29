import styles from './reset-password.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'

const ResetPasswordPage = () => {
    return (
        <div className={`${styles.reset}`}> 
            <h2 className={`mb-6`}>
                Восстановление пароля
            </h2>
            <PasswordInput 
                placeholder='Введите новый пароль'
                extraClass='mb-6'
            />
            <Input 
                type='text'
                placeholder='Введите код из письма'
                extraClass='mb-6'
            />
            <Button
                type="primary" 
                size="medium"
                extraClass='mb-20'
            >
                Сохранить
            </Button>
            <p className="text text_type_main-default text_color_inactive mb-6">Вспомнили пароль? <a className={styles.a} href=''>Войти</a></p>
        </div>
    )
}

export default ResetPasswordPage