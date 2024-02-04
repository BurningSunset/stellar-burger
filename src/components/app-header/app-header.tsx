import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
const AppHeader: FC = () => {

    const location = useLocation()

    const [activeLink, setActiveLink] = useState<string | null>(null);

    useEffect(() => {
      // Дополнительная проверка для страниц /login, /register, /reset-password, /forgot-password
      if (
        location.pathname === '/login' || location.pathname === '/register' || 
        location.pathname === '/reset-password'|| location.pathname === '/forgot-password'
        ) {
        setActiveLink('/profile');
      } else {
        setActiveLink(location.pathname);
      }
    }, [location.pathname]);

    const getLinkClass = (path: string): string => `${styles.a} ${activeLink === path ? styles.active : styles.inactive}`
    const getIconType = (path: string):'primary' | 'secondary' => activeLink === path ? 'primary' : 'secondary';

    return (
        <header className={`pb-4 pt-4 ${styles.header}`}>
            <nav className={`${styles.nav}`}>
                <ul className={`${styles.ul}`}>
                    <li className={`mr-2 pr-5 pl-5 pt-4 pb-4`}>
                        <Link 
                            className={getLinkClass('/')} 
                            to={`/`}
                        >
                            <BurgerIcon type={getIconType('/')}/>
                            <p className={`ml-2 text text_type_main-default`}>Конструктор</p>
                        </Link>
                    </li>
                    <li className={`pl-5 pr-5 pt-4 pb-4`}>
                        <Link 
                            className={getLinkClass('/feed')} 
                            to={`/feed`}
                        >
                            <ListIcon type={getIconType('/feed')}/>
                            <p className='ml-2 text text_type_main-default'>Лента заказов</p>
                        </Link>
                    </li>
                </ul>
                <Link to={`/`} className={`${styles.logo} ${styles.a}`}>
                    <Logo />
                </Link>
                <Link className={`pl-5 pr-5 pt-4 pb-4 ${getLinkClass('/profile')}`} to={`/profile`}>
                    <ProfileIcon type={getIconType('/profile')} />
                    <p className='m-2 text text_type_main-default'>Личный кабинет</p>
                </Link>
            </nav>
        </header>
    )
}

export default AppHeader