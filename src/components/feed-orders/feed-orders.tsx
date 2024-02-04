import { FC } from 'react'
import styles from './feed-orders.module.css'
import OrderItem from '../order-item/order-item'
import { TOrderItem } from '../../utils/types'

const FeedOrders: FC = () => {
    
    const dummy1: TOrderItem = {
        ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093e',
        ],
        _id: '1232131',
        status: 'done',
        number: 5337,
        createdAt: '2023-05-25T15:34:31.361Z',
        updatedAt: '2023-05-25T15:34:31.460Z',
        name: 'Sample text saaaaaaaaaaaaaaaaaample Sample text Sample text Sample text Sample text '
    }

    const dummy2: TOrderItem = {
        ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0949',
            '643d69a5c3f7b9001cfa0948',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0947',
        ],
        _id: '1232131',
        status: 'done',
        number: 5322,
        createdAt: '2023-05-25T15:34:31.361Z',
        updatedAt: '2023-05-25T15:34:31.460Z',
        name: 'Sample text '
    }
    const dummy3: TOrderItem = {
        ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0944',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa0944',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0941',
        ],
        _id: '1232131',
        status: 'done',
        number: 1232,
        createdAt: '2023-05-25T15:34:31.361Z',
        updatedAt: '2023-05-25T15:34:31.460Z',
        name: 'Sample text '
    }
    const dummyArray: TOrderItem[] = [
        dummy1,
        dummy2,
        dummy3,
        dummy1,
        dummy2,
        dummy3,
    ]

    return (
        <div className={styles.feedContainer}>
            <h2 className={`text text_type_main-large mt-4 mb-4 ${styles.h2}`}>Лента заказов</h2>
            <div className={`${styles.feedBlock}`}>
            {
                dummyArray.map((order: TOrderItem, index) => (
                    <OrderItem key={index} item={order} statusToggle={false}/>
                ))
            }
            </div>
        </div>
    )
}

export default FeedOrders