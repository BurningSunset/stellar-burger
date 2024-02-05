import { FC } from 'react'
import styles from './feed-orders.module.css'
import OrderItem from '../order-item/order-item'
import { TOrderItem, useSelector } from '../../utils/types'
import { useParams } from 'react-router-dom'

type Props = {
    statusToggle: boolean
}

const FeedOrders: FC<Props> = ({ statusToggle }) => {
    const { response } = useSelector((state) => state.ws)
    const data = JSON.parse(response)
    return (
        <div className={styles.feedContainer}>
            {!statusToggle && (
                <h2 className={`text text_type_main-large mt-4 mb-4 ${styles.h2}`}>Лента заказов</h2>
            )}
            <div className={`${styles.feedBlock}`}>
                {data && (
                    data.orders && (
                        data.orders.map((order: TOrderItem, index: number) => (
                            <OrderItem key={index} item={order} statusToggle={statusToggle}/>
                        ))
                    )
                )}
            </div>
        </div>
    )
}

export default FeedOrders