import { FC, useEffect } from 'react'
import styles from './feed-orders.module.css'
import OrderItem from '../order-item/order-item'
import { TOrderItem, useDispatch, useSelector } from '../../utils/types'
import { wsConnectionStartDispatch } from '../../services/actions/wsActions'

type Props = {
    statusToggle: boolean
}

const FeedOrders: FC<Props> = ({ statusToggle }) => {

    const dispatch = useDispatch();
    const { response } = useSelector((state) => state.ws)
    useEffect(() => {
        console.log('dispatching')
        // @ts-ignore
        dispatch(wsConnectionStartDispatch(''))
    }, [dispatch])
    return (
        <div className={styles.feedContainer}>
            {!statusToggle && (
                <h2 className={`text text_type_main-large mt-4 mb-4 ${styles.h2}`}>Лента заказов</h2>
            )}
            <div className={`${styles.feedBlock}`}>
                {response && (
                    response.map((order: TOrderItem, index: number) => (
                        <OrderItem key={index} item={order} statusToggle={statusToggle}/>
                    ))
                )}
            </div>
        </div>
    )
}

export default FeedOrders