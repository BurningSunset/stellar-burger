import { FC } from 'react';
import styles from './order-info.module.css'
import { useParams } from 'react-router-dom';
import { useSelector } from '../../utils/types';

const OrderInfo: FC = () => {
    return (
        <div className={styles.ingredientContainer}>
            <p>Заглушка, но модалка работает</p>
        </div>
    )
}

export default OrderInfo
