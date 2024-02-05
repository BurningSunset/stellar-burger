import { FC, useEffect } from 'react'
import styles from './feed-page.module.css'
import FeedOrders from '../../components/feed-orders/feed-orders'
import FeedBoard from '../../components/feed-board/feed-board'
import { useDispatch } from '../../utils/types'
import { wsConnectionClosedDispatch, wsConnectionStartDispatch } from '../../services/actions/wsActions'

const FeedPage: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(wsConnectionStartDispatch('/all'))
        return () => {
            dispatch(wsConnectionClosedDispatch())
          }
    }, [dispatch])
    return (
        <div className={styles.feed}>
            <FeedOrders statusToggle={false} />
            <FeedBoard />
        </div>
    )
}

export default FeedPage