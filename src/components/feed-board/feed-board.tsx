import { FC } from 'react'
import styles from './feed-board.module.css'

const FeedBoard: FC = () => {

    const dummyDone = [
        '034533',
        '032123',
        '123231',
        '321312',
        '321322',
        '312321',
        '321312',
        '034533',
        '032123',
        '123231',
        '321312',
        '321322',
        '312321',
        '321312',
        '034533',
        '032123',
        '123231',
        '321312',
        '321322',
        '312321',
        '321312',
    ]
    
    const dummyPending = [
        '321322',
        '321111',
        '322222'
    ]

    const maxVisibleOrders = 15

    return (
        <div className={`${styles.boardContainer} ml-15 mt-15`}>
            <div className={`${styles.orderStatusContainer}`}>
                <div className={`${styles.orderStatus} mr-9`}>
                    <h2 className="text text_type_main-medium pb-6">Готовы:</h2>
                    <div className={`${styles.orderList}`}>
                        {dummyDone.slice(0, maxVisibleOrders).map((item) => (
                            <p className={`${styles.itemDone} text text_type_digits-default mb-2`}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className={`${styles.orderStatus}`}>
                    <h2 className="text text_type_main-medium pb-6">В работе:</h2>
                    <div className={`${styles.orderList}`}>
                        {dummyPending.slice(0, maxVisibleOrders).map((item) => (
                            <p className="text text_type_digits-default mb-2">{item}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${styles.total}`}>
                <h2 className="text text_type_main-medium mt-15">Выполнено за всё время:</h2>
                <p className={`text text_type_digits-large ${styles.totalOrders}`}>321232</p>
            </div>
            <div className={`${styles.total}`}>
                <h2 className="text text_type_main-medium mt-15">Выполнено за сегодня:</h2>
                <p className={`text text_type_digits-large ${styles.totalOrders}`}>123</p>
            </div>
        </div>
    )
}

export default FeedBoard