import { FC } from 'react'
import styles from './feed-page.module.css'
import FeedOrders from '../../components/feed-orders/feed-orders'

const FeedPage: FC = () => {
    return (
        <div className={styles.feed}>
            <FeedOrders />
        </div>
    )
}

export default FeedPage