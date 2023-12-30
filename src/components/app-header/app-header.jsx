import { Logo, BurgerIcon, ListIcon, ProfileIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
function AppHeader() {
    return (
        <header className={`pb-4 pt-4 ${styles.header}`}>
            <nav className={`${styles.nav}`}>
                <ul className={`${styles.ul}`}>
                    <li className={`mr-2 pr-5 pl-5 pt-4 pb-4`}>
                        <a className={styles.a} href='/'>
                            <BurgerIcon type="primary"/>
                            <p className={`ml-2 text text_type_main-default ${styles.active}`}>Конструктор</p>
                        </a>
                    </li>
                    <li className={`pl-5 pr-5 pt-4 pb-4`}>
                        <a className={styles.a} href='/'>
                            <ListIcon type="secondary" />
                            <p className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</p>
                        </a>
                    </li>
                </ul>
                <a href='/' className={`${styles.logo} ${styles.a}`}>
                    <Logo />
                </a>
                <a className={`pl-5 pr-5 pt-4 pb-4 ${styles.a}`} href='/'>
                    <ProfileIcon type="secondary" />
                    <p className='m-2 text text_type_main-default text_color_inactive'>Личный кабинет</p>
                </a>
            </nav>
        </header>
    )
}

export default AppHeader