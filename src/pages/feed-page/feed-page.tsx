import { FC } from 'react'
import styles from './feed-page.module.css'
import FeedOrders from '../../components/feed-orders/feed-orders'
import FeedBoard from '../../components/feed-board/feed-board'

const FeedPage: FC = () => {
    return (
        <div className={styles.feed}>
            <FeedOrders />
            <FeedBoard />
        </div>
    )
}

export default FeedPage